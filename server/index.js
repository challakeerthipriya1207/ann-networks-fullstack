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
// SERVER INITIALIZATION
// ==========================================

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});