const jwt = require('jsonwebtoken');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./config/db');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ==========================================
// BLOG ROUTES
// ==========================================

// Route to Fetch All Blogs
app.get('/api/blogs', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM blogs ORDER BY created_at DESC');
        res.json(rows);
    } catch (error) {
        console.error("Error fetching blogs:", error);
        res.status(500).json({ message: "Server Error fetching blogs" });
    }
});

// Route to Fetch a Single Blog by ID
app.get('/api/blogs/:id', async (req, res) => {
    try {
        const { id } = req.params; // Grab the ID from the URL
        const [rows] = await db.query('SELECT * FROM blogs WHERE id = ?', [id]);
        
        if (rows.length === 0) {
            return res.status(404).json({ message: "Article not found" });
        }
        
        res.json(rows[0]); // Send back just the single article object
    } catch (error) {
        console.error("Error fetching single blog:", error);
        res.status(500).json({ message: "Server Error fetching article" });
    }
});

// ==========================================
// JOB ROUTES
// ==========================================

// Route to Fetch All Jobs
app.get('/api/jobs', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM jobs ORDER BY created_at DESC');
        res.json(rows);
    } catch (error) {
        console.error("Error fetching jobs:", error);
        res.status(500).json({ message: "Server Error fetching jobs" });
    }
});
// ==========================================
// PUBLIC ROUTES (No Token Required)
// ==========================================

// 1. Fetch all Jobs for the JobListings page
app.get('/api/jobs', async (req, res) => {
    try {
        // Grab all jobs, ordered by the newest first
        const [jobs] = await db.query('SELECT * FROM jobs ORDER BY id DESC');
        res.status(200).json(jobs);
    } catch (error) {
        console.error("Error fetching jobs:", error);
        res.status(500).json({ message: "Server error fetching jobs" });
    }
});

// 2. Fetch all Blogs for the Blog page
app.get('/api/blogs', async (req, res) => {
    try {
        // Grab all blogs, ordered by the newest first
        const [blogs] = await db.query('SELECT * FROM blogs ORDER BY id DESC');
        res.status(200).json(blogs);
    } catch (error) {
        console.error("Error fetching blogs:", error);
        res.status(500).json({ message: "Server error fetching blogs" });
    }
});

// ==========================================
// ADMIN AUTHENTICATION ROUTES
// ==========================================

// Route to Handle Admin Login
app.post('/api/admin/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // 1. Check if the username exists in the database
        const [admins] = await db.query('SELECT * FROM admins WHERE username = ?', [username]);
        
        if (admins.length === 0) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        const admin = admins[0];

        // 2. Check if the password matches 
        if (password !== admin.password) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        // 3. Generate the JWT Key (Valid for 1 day)
        const token = jwt.sign(
            { id: admin.id, username: admin.username }, 
            process.env.JWT_SECRET, 
            { expiresIn: '1d' }
        );

        // 4. Send the token back to the React frontend
        res.status(200).json({ 
            message: "Login successful", 
            token: token 
        });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Server error during login" });
    }
});
// ==========================================
// SECURITY MIDDLEWARE (The Bouncer)
// ==========================================
const authenticateToken = (req, res, next) => {
    // 1. Get the token from the request headers
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Extracts the token after "Bearer"

    // 2. If no token, access denied
    if (!token) {
        return res.status(401).json({ message: "Access Denied. No token provided." });
    }

    // 3. Verify the token using your secret key
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "Invalid or expired token." });
        
        req.user = user; // Pass the user info to the next step
        next(); // Let them through to the route!
    });
};

// ==========================================
// ADMIN DASHBOARD ROUTES
// ==========================================

// Route to Add a New Job & Blog (Protected by authenticateToken)
app.post('/api/admin/jobs', authenticateToken, async (req, res) => {
    // 1. Catch the data sent from the React form
    const { title, company, location, experience, job_type, description } = req.body;
    
    // Default salary if left blank
    const salary = req.body.salary || "Not Disclosed";

    // 2. Automatically generate required Blog fields
    // Take the first 120 characters of the description for the blog summary card
    const summary = description.substring(0, 120) + "..."; 

    // Default Contact Info (You can make these dynamic in the React form later)
    const contactName = "ANN Consultant";
    const contactRole = "Career Expert";
    const contactEmail = "contact@annnetworks.in"; 
    const contactPhone = "+91-XXXXXXXXXX"; 
    const contactWhatsapp = "+91-XXXXXXXXXX";

    try {
        // ==========================================
        // STEP 1: CREATE THE BLOG ARTICLE FIRST
        // ==========================================
        const blogQuery = `
            INSERT INTO blogs (title, tags, location, summary, content, contact_name, contact_role, contact_whatsapp, contact_email, contact_phone) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        
        // Map job_type -> tags, and pass in our generated contact variables
        const blogValues = [
            title, job_type, location, summary, description, 
            contactName, contactRole, contactWhatsapp, contactEmail, contactPhone
        ];

        const [blogResult] = await db.query(blogQuery, blogValues);
        
        // Grab the ID of the blog we just created so we can link the job to it
        const newArticleId = blogResult.insertId; 

        // ==========================================
        // STEP 2: CREATE THE JOB LISTING
        // ==========================================
        const jobQuery = `
            INSERT INTO jobs (title, company_type, location, experience, skills, salary, article_id) 
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        
        // Map company -> company_type, job_type -> skills, and attach the newArticleId
        const jobValues = [title, company, location, experience, job_type, salary, newArticleId];

        const [jobResult] = await db.query(jobQuery, jobValues);

        // ==========================================
        // STEP 3: SEND SUCCESS RESPONSE
        // ==========================================
        res.status(201).json({ 
            message: "Job and Article created successfully!", 
            jobId: jobResult.insertId,
            articleId: newArticleId
        });

    } catch (error) {
        console.error("Error inserting job and article:", error);
        res.status(500).json({ message: "Database error while creating job." });
    }
});
// Route to Delete a Job & Blog Manually (Protected by authenticateToken)
app.delete('/api/admin/jobs/:id', authenticateToken, async (req, res) => {
    const jobId = req.params.id;

    try {
        // 1. Find the article_id associated with this job
        const [jobRows] = await db.query('SELECT article_id FROM jobs WHERE id = ?', [jobId]);
        
        // If the job doesn't exist, stop here
        if (jobRows.length === 0) {
            return res.status(404).json({ message: "Job not found" });
        }
        
        const articleId = jobRows[0].article_id;

        // 2. FIRST: Delete the job listing (the child)
        await db.query('DELETE FROM jobs WHERE id = ?', [jobId]);

        // 3. SECOND: Delete the blog article (the parent)
        // Now that the job is gone, MySQL will allow us to delete the blog
        await db.query('DELETE FROM blogs WHERE id = ?', [articleId]);

        res.status(200).json({ message: "Job and article deleted successfully" });
    } catch (error) {
        console.error("Error deleting job:", error);
        res.status(500).json({ message: "Server error while deleting job." });
    }
});
// Route to Edit/Update a Job & Blog (Protected by authenticateToken)
app.put('/api/admin/jobs/:id', authenticateToken, async (req, res) => {
    const jobId = req.params.id;
    const { title, company, location, experience, job_type, description, salary } = req.body;
    
    const finalSalary = salary || "Not Disclosed";
    const summary = description.substring(0, 120) + "...";

    try {
        // 1. Find the article_id associated with this job
        const [jobRows] = await db.query('SELECT article_id FROM jobs WHERE id = ?', [jobId]);
        if (jobRows.length === 0) {
            return res.status(404).json({ message: "Job not found" });
        }
        const articleId = jobRows[0].article_id;

        // 2. Update the Job Table
        const jobQuery = `
            UPDATE jobs 
            SET title = ?, company_type = ?, location = ?, experience = ?, skills = ?, salary = ? 
            WHERE id = ?
        `;
        await db.query(jobQuery, [title, company, location, experience, job_type, finalSalary, jobId]);

        // 3. Update the Blog Table
        const blogQuery = `
            UPDATE blogs 
            SET title = ?, tags = ?, location = ?, summary = ?, content = ? 
            WHERE id = ?
        `;
        await db.query(blogQuery, [title, job_type, location, summary, description, articleId]);

        res.status(200).json({ message: "Job and article updated successfully" });
    } catch (error) {
        console.error("Error updating job:", error);
        res.status(500).json({ message: "Server error while updating job." });
    }
});

// ==========================================
// SERVER INITIALIZATION
// ==========================================

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});