import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#111620] text-gray-300 py-12 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">ANN NETWORKS</h3>
          <p className="text-sm leading-relaxed max-w-xs">
            Bridging the gap between education and the IT industry. Your trusted partner for career growth.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-secondary transition">Home</Link></li>
            <li><Link to="/services" className="hover:text-secondary transition">Services</Link></li>
            <li><Link to="/jobs" className="hover:text-secondary transition">Browse IT Jobs</Link></li>
            <li><Link to="/blog" className="hover:text-secondary transition">Blog</Link></li>
            <li><Link to="/consulting" className="hover:text-secondary transition">Book a Consultant</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <span>📧</span> <a href="mailto:challahoney13@gmail.com" className="hover:text-secondary">contact@annnetworks.in</a>
            </li>
            <li className="flex items-center gap-2">
              <span>📱</span> <a href="https://wa.me/91XXXXXXXXXX" className="hover:text-secondary">WhatsApp: +91-XXXXXXXXXX</a>
            </li>
            <li className="flex items-center gap-2">
              <span>📞</span> <a href="tel:+91XXXXXXXXXX" className="hover:text-secondary">Call: +91-XXXXXXXXXX</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        <p>&copy; 2025 ANN Networks. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;