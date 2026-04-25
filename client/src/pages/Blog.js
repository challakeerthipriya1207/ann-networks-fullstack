import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios to talk to the backend

const Blog = () => {
  // NEW: 1. Setup State for database data, loading status, and search
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // NEW: 2. Fetch blogs from Node.js backend when component loads
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blogs');
        setArticles(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // NEW: 3. Create a filtered list of articles based on the search bar
  const filteredArticles = articles.filter((article) => {
    if (searchTerm === "") return true;
    
    const searchLower = searchTerm.toLowerCase();
    
    return (
      article.title.toLowerCase().includes(searchLower) ||
      (article.tags && article.tags.toLowerCase().includes(searchLower)) ||
      (article.location && article.location.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="w-full min-h-screen bg-background">
      
      {/* PAGE HEADER */}
      <section className="bg-primary text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            IT Job Opportunities & Career Insights
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Read detailed articles on the latest IT job openings, skill requirements, salary insights, and career advice — written specifically for students and fresh graduates.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* FILTERS / SEARCH BAR */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-10">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-grow">
              <span className="absolute left-3 top-3 text-gray-400">🔍</span>
              {/* NEW: 4. Connect input to searchTerm state */}
              <input 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by role, skill, or location..." 
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition"
              />
            </div>
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition">
              Search
            </button>
          </div>
        </div>

        {/* TWO-COLUMN LAYOUT (Main Content & Sidebar) */}
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* LEFT: BLOG CARDS FROM DATABASE */}
          <div className="lg:w-2/3 space-y-8">
            {loading ? (
              <div className="text-center text-primary font-bold text-xl py-10">Loading articles from database...</div>
            ) : filteredArticles.length === 0 ? (
              <div className="text-center text-gray-500 py-10">No articles match your search.</div>
            ) : (
              filteredArticles.map((article) => (
                <div key={article.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8 hover:shadow-md transition">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-50 text-secondary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {article.tags}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-3 hover:text-secondary transition cursor-pointer">
                    {article.title}
                  </h2>
                  <p className="text-textMain mb-6 leading-relaxed">
                    {article.summary}
                  </p>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-t border-gray-100 pt-4 mt-4">
                    {/* NEW: 5. Format the MySQL Timestamp to a readable date */}
                    <span className="text-sm text-gray-500 mb-4 sm:mb-0">
                      📅 Posted on {new Date(article.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </span>
                    <Link to={`/blog/${article.id}`} className="text-secondary font-bold hover:underline flex items-center gap-1">
                      Read Full Article <span>→</span>
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* RIGHT: SIDEBAR */}
          <div className="lg:w-1/3 space-y-8">
            
            {/* Widget 1: Consult Now CTA */}
            <div className="bg-primary rounded-xl shadow-sm p-6 text-white text-center border-t-4 border-secondary">
             <h3 className="text-white text-xl font-bold mb-3">Need Guidance?</h3>
              <p className="text-gray-300 text-sm mb-6">
                Have a question about any job? Don't guess. Ask an expert directly.
              </p>
              <a 
                href="https://wa.me/91XXXXXXXXXX" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full bg-[#25D366] text-white font-bold py-3 rounded-lg hover:bg-[#1ebe57] transition shadow-md flex justify-center items-center gap-2"
              >
                <span>📱</span> WhatsApp a Consultant
              </a>
            </div>

            {/* Widget 2: Popular Articles (Keeping these static for now as a UI element) */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-primary mb-4 border-b border-gray-100 pb-2">Popular Articles</h3>
              <ul className="space-y-4">
                <li className="group cursor-pointer">
                  <p className="text-sm text-textMain group-hover:text-secondary font-medium transition line-clamp-2">
                    Junior Java Developer — What to Expect, What You Need, and How to Apply
                  </p>
                  <span className="text-xs text-gray-400">1.2k Views</span>
                </li>
                <li className="group cursor-pointer">
                  <p className="text-sm text-textMain group-hover:text-secondary font-medium transition line-clamp-2">
                    Frontend Developer (React) — Startup Role — Hyderabad
                  </p>
                  <span className="text-xs text-gray-400">980 Views</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Blog;