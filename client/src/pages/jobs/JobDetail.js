import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const JobDetail = () => {
  const { id } = useParams(); // Extracts the ID from the URL (e.g., /blog/1)
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSingleBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/blogs/${id}`);
        setArticle(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching article:", error);
        setLoading(false);
      }
    };
    fetchSingleBlog();
  }, [id]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-2xl font-bold text-primary">Loading Article...</div>;
  }

  if (!article) {
    return <div className="min-h-screen flex items-center justify-center text-2xl font-bold text-red-500">Article Not Found</div>;
  }

  return (
    <div className="w-full min-h-screen bg-background">
      
      {/* PAGE HEADER: Article Title & Meta */}
      <section className="bg-primary text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="text-secondary hover:underline text-sm font-bold mb-6 inline-block">
            ← Back to All Articles
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-blue-900 text-blue-100 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-blue-700">
              {article.tags}
            </span>
            <span className="text-gray-400 text-sm">📍 {article.location}</span>
            <span className="text-gray-400 text-sm">
              📅 {new Date(article.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
            </span>
          </div>
          <h1 className="text-white text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
           {article.title}
          </h1>
          <p className="text-lg text-gray-300 border-l-4 border-secondary pl-4 py-1 italic">
            {article.summary}
          </p>
        </div>
      </section>

      {/* TWO COLUMN LAYOUT: Content & Contact Card */}
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
        
        {/* MAIN ARTICLE CONTENT */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
            {/* whitespace-pre-wrap preserves the line breaks from your database text */}
            <div className="text-textMain text-lg leading-relaxed whitespace-pre-wrap">
              {article.content}
            </div>
          </div>
        </div>

        {/* SIDEBAR: UNIFIED PRIME CONSULTANT CARD */}
        <div className="lg:w-1/3 space-y-8">
          {/* Prime Consultant Sidebar */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-6">
            <h3 className="text-[18px] font-bold text-textMain mb-6">Interested in This Role? Get in Touch.</h3>
            
            {/* Consultant Profile */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xl font-bold shrink-0">
                A {/* Or use an icon/avatar here */}
              </div>
              <div>
                <h4 className="font-bold text-textMain">ANN Prime Consultant</h4>
                <p className="text-sm text-secondary font-semibold">Expert Career Guidance</p>
              </div>
            </div>

            {/* Unified Action Buttons */}
            <div className="space-y-3">
              {/* Option A: Direct them to the Consulting Page */}
              <Link 
                to="/consulting" 
                className="w-full flex items-center justify-between bg-primary text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors text-sm font-semibold"
              >
                <div className="flex items-center gap-2">
                  <span>📅</span> Book a Consultation
                </div>
                <span className="bg-white/20 px-2 py-0.5 rounded text-xs">Book</span>
              </Link>

              {/* Option B: Direct WhatsApp to the Prime Consultant */}
              <a 
                href="https://wa.me/91XXXXXXXXXX" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between bg-green-50 text-green-700 border border-green-200 px-4 py-3 rounded-lg hover:bg-green-100 transition-colors text-sm font-semibold"
              >
                <div className="flex items-center gap-2">
                  <span>📱</span> WhatsApp Chat
                </div>
                <span className="bg-green-200 px-2 py-0.5 rounded text-xs text-green-800">Chat</span>
              </a>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-xs text-textMuted leading-relaxed">
                <strong className="text-textMain">Note:</strong> Our Prime Consultant handles all inquiries. Reach out to ask questions about this role, verify eligibility, or express your interest.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default JobDetail;