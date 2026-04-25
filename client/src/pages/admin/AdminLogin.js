import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    try {
      // Send credentials to our new Node.js route
      const response = await axios.post('https://ann-networks-api.onrender.com/api/admin/login', {
        username,
        password
      });

      // If successful, save the secret token to the browser
      localStorage.setItem('adminToken', response.data.token);
      
      // Redirect the user to the secret dashboard
      navigate('/admin/dashboard');
      
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-6">
      <div className="bg-surface w-full max-w-md p-8 rounded-[12px] shadow-card">
        
        <div className="text-center mb-8">
          <h1 className="text-[24px] font-[700] text-textMain mb-2">Admin Access</h1>
          <p className="text-textMuted text-[14px]">Secure login for ANN Networks</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-500 p-3 rounded-[8px] text-[14px] font-[500] mb-6 text-center border border-red-100">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-textMain text-[14px] font-[600] mb-2">Username</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-[8px] border border-borderLight focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
              placeholder="Enter admin username"
              required
            />
          </div>

          <div>
            <label className="block text-textMain text-[14px] font-[600] mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-[8px] border border-borderLight focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
              placeholder="Enter password"
              required
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-secondary text-white font-[600] py-3 rounded-[8px] hover:bg-secondaryHover transition-all shadow-btn"
          >
            Secure Login
          </button>
        </form>

      </div>
    </div>
  );
};

export default AdminLogin;