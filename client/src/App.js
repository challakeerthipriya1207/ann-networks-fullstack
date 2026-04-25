import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/FooterTemp';
// Page Imports
import Home from './pages/Home';
import Blog from './pages/Blog';
import JobListings from './pages/jobs/JobListings';
import Consultation from './pages/consulting/Consultation';
import Services from './pages/Services';
import JobDetail from './pages/jobs/JobDetail';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';

// You will import the rest of your pages here as you build them...

// Placeholder for unbuilt pages so the app doesn't crash
const Placeholder = ({ title }) => <div className="p-10 text-center text-2xl font-bold text-primary">{title} Page Coming Soon</div>;
const NotFound = () => <div className="p-10 text-center text-4xl font-bold text-red-500">404 - Page Not Found</div>;

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Core Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Placeholder title="About Us" />} />
            <Route path="/services" element={<Services />} /> 
            <Route path="/blog" element={<Blog />} />

            {/* Jobs & Consulting */}
            <Route path="/blog/:id" element={<JobDetail />} />
            <Route path="/jobs" element={<JobListings />} />
            <Route path="/consulting" element={<Consultation />} />

            {/* Resources (Placeholders for now) */}
            <Route path="/resources/guidance" element={<Placeholder title="Career Guidance" />} />
            
            {/* Auth (Placeholders for now) */}
            <Route path="/login" element={<Placeholder title="Login" />} />
            <Route path="/register" element={<Placeholder title="Register" />} />

            {/* 404 Catch-All */}
            <Route path="*" element={<NotFound />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;