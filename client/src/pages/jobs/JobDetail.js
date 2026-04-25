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

        {/* SIDEBAR: DYNAMIC CONTACT CARD */}
        <div className="lg:w-1/3 space-y-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sticky top-24">
            <h3 className="text-xl font-bold text-primary mb-6 border-b border-gray-100 pb-4">
              Interested in This Role? Get in Touch.
            </h3>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center text-2xl shrink-0">
                👤
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary">{article.contact_name}</h4>
                <p className="text-sm font-semibold text-secondary">{article.contact_role}</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              {/* WhatsApp Button */}
              {article.contact_whatsapp && (
                <a href={`https://wa.me/${article.contact_whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-[#e7f8ed] transition group border border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">📱</span>
                    <span className="text-sm font-semibold text-textMain group-hover:text-[#25D366] transition">WhatsApp</span>
                  </div>
                  <span className="bg-[#25D366] text-white text-xs font-bold px-3 py-1.5 rounded shadow-sm">Chat</span>
                </a>
              )}

              {/* Email Button */}
              {article.contact_email && (
                <a href={`mailto:${article.contact_email}`} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition group border border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">📧</span>
                    <span className="text-sm font-semibold text-textMain group-hover:text-secondary transition">Email</span>
                  </div>
                  <span className="bg-secondary text-white text-xs font-bold px-3 py-1.5 rounded shadow-sm">Send</span>
                </a>
              )}

              {/* Phone Button */}
              {article.contact_phone && (
                <a href={`tel:${article.contact_phone}`} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition group border border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">📞</span>
                    <span className="text-sm font-semibold text-textMain group-hover:text-primary transition">Call</span>
                  </div>
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded shadow-sm">Dial</span>
                </a>
              )}
            </div>

            <div className="bg-blue-50 border-l-4 border-secondary p-3 text-xs text-textMain leading-relaxed">
              <span className="font-bold text-primary">Note: </span> You can reach out to ask any questions about this job role, understand if you're eligible, or express interest. No registration required.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default JobDetail;