import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-slate-800 pt-16 pb-6 px-6 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-12">
        
        {/* Column 1 — Brand */}
        <div className="md:w-1/2">
          <h3 className="text-white text-xl font-bold mb-2 tracking-tight">ANN NETWORKS</h3>
          <p className="text-slate-400 text-sm mb-6">Bridging academia and the IT industry.</p>
          
          {/* Live Badge */}
          <div className="inline-flex items-center gap-2 bg-green-900/40 text-green-400 border border-green-700/60 rounded-full px-3 py-1.5 text-xs font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Actively posting IT jobs
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            <a href="mailto:challahoney13@gmail.com" className="text-slate-400 hover:text-white transition-colors duration-200" title="Email Us">
              <FiMail className="text-xl" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors duration-200" title="LinkedIn">
              <FiLinkedin className="text-xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors duration-200" title="Twitter / X">
              <FiTwitter className="text-xl" />
            </a>
          </div>
        </div>

        {/* Column 2 — Quick Links */}
        <div className="md:w-1/3">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">Explore</h4>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm block">
                Home
              </Link>
            </li>
            <li>
              <Link to="/jobs" className="flex items-center text-slate-400 hover:text-white transition-colors duration-200 text-sm">
                Browse IT Jobs 
                <span className="ml-3 bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">New</span>
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm block">
                Articles
              </Link>
            </li>
            <li>
              <Link to="/consulting" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm block">
                Consultation
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto pt-6 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left: Copyright */}
        <div className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} ANN Networks. All rights reserved.
        </div>

        {/* Center/Right: Legal Links */}
        <div className="flex items-center gap-4 text-slate-500 text-sm">
          <Link to="#" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
          <span>&middot;</span>
          <Link to="#" className="hover:text-slate-400 transition-colors">Terms of Use</Link>
        </div>

        {/* Far Right: Secret Admin Link */}
        <div>
          <Link to="/admin-login" className="text-slate-600 hover:text-slate-400 text-sm transition-colors duration-300">
            Admin
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
