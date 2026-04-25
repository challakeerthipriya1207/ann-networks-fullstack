import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-primary text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        <Link to="/" className="text-2xl font-bold tracking-wider">
          ANN NETWORKS
        </Link>
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-secondary transition">Home</Link>
          <Link to="/services" className="hover:text-secondary transition">Services</Link>
          <Link to="/jobs" className="hover:text-secondary transition">Browse IT Jobs</Link>
          <Link to="/blog" className="hover:text-secondary transition">Blog</Link>
          <Link to="/consulting" className="bg-secondary px-4 py-2 rounded font-medium hover:bg-blue-600 transition">
            Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;