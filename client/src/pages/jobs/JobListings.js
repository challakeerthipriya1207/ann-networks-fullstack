import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const JobListings = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // NEW: 1. Create a state to track what the user types in the search bar
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/jobs');
        setJobs(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  // NEW: 2. Create a filtered list of jobs based on the search term
  const filteredJobs = jobs.filter((job) => {
    // If the search bar is empty, show all jobs
    if (searchTerm === "") return true;
    
    // Convert everything to lowercase so the search isn't case-sensitive
    const searchLower = searchTerm.toLowerCase();
    
    // Check if the search term matches the title, company type, location, or skills
    return (
      job.title.toLowerCase().includes(searchLower) ||
      job.company_type.toLowerCase().includes(searchLower) ||
      job.location.toLowerCase().includes(searchLower) ||
      (job.skills && job.skills.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="w-full min-h-screen bg-background">
      
      {/* PAGE HEADER */}
      <section className="bg-primary text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Browse IT Job Opportunities
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Every listing below is backed by a full article. Read the complete details, understand the role, and reach out to our consultant directly to express your interest or ask questions.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* SEARCH + FILTER BAR */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-10">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-grow">
              <span className="absolute left-3 top-3 text-gray-400">🔍</span>
              {/* NEW: 3. Connect the input to the searchTerm state */}
              <input 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by role, skill, company type, location..." 
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition"
              />
            </div>
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition">
              Search Jobs
            </button>
          </div>
        </div>

        {/* JOB LISTINGS FROM DATABASE */}
        <div className="space-y-6 mb-16">
          {loading ? (
            <div className="text-center text-primary font-bold text-xl py-10">Loading jobs from database...</div>
          ) : filteredJobs.length === 0 ? (
            /* NEW: 4. Check the length of filteredJobs instead of jobs */
            <div className="text-center text-gray-500 py-10">No jobs match your search.</div>
          ) : (
            /* NEW: 5. Map over filteredJobs instead of all jobs */
            filteredJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8 hover:shadow-md transition flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                
                {/* Left Side: Job Details */}
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl font-bold text-primary mb-1">{job.title}</h2>
                  <p className="text-secondary font-semibold text-sm mb-4">{job.company_type}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm text-textMain">
                    <div className="flex items-center gap-1">
                      <span className="text-gray-400">📍</span> {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-gray-400">💼</span> {job.experience}
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-gray-400">💰</span> {job.salary}
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-gray-400">🕒</span> Just now
                    </div>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm font-semibold text-gray-500 py-1">Key Skills:</span>
                    {job.skills && job.skills.split(',').map((skill, index) => (
                      <span key={index} className="bg-blue-50 text-secondary text-xs font-bold px-3 py-1 rounded-full border border-blue-100">
                        {skill.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Side: Action Buttons */}
                <div className="w-full md:w-auto flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
                  <Link 
                    to={`/blog/${job.article_id}`} 
                    className="bg-secondary text-white text-center px-6 py-3 rounded-lg font-bold hover:bg-blue-600 transition shadow-sm w-full"
                  >
                    Read Full Article
                  </Link>
                  <a 
                    href="https://wa.me/91XXXXXXXXXX" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-transparent border-2 border-secondary text-secondary text-center px-6 py-3 rounded-lg font-bold hover:bg-secondary hover:text-white transition shadow-sm w-full flex justify-center items-center gap-2"
                  >
                    <span>💬</span> Express Interest
                  </a>
                </div>
                
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default JobListings;