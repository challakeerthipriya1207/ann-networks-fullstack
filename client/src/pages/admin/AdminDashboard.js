import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FiLogOut, FiPlusCircle, FiBriefcase, FiList, FiTrash2, FiEdit, FiSave, FiXCircle } from 'react-icons/fi';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('post');
  const [message, setMessage] = useState({ type: '', text: '' });
  const [jobList, setJobList] = useState([]);
  
  // NEW: Track if we are currently editing a job
  const [editingId, setEditingId] = useState(null);
  
  const [formData, setFormData] = useState({
    title: '', company: '', location: '', experience: '', salary: '', job_type: 'Full-time', description: ''
  });

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) navigate('/admin-login');
  }, [navigate]);

  useEffect(() => {
    if (activeTab === 'manage') fetchJobs();
  }, [activeTab]);

  const fetchJobs = async () => {
    try {
      const response = await axios.get('https://ann-networks-api.onrender.com/api/jobs');
      setJobList(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin-login');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // NEW: Handle pulling data into the form for editing
  const handleEditClick = async (job) => {
    try {
      // Fetch the full article to get the description
      const response = await axios.get(`https://ann-networks-api.onrender.com/api/blogs/${job.article_id}`);
      const blogData = response.data;

      // Pre-fill the form
      setFormData({
        title: job.title,
        company: job.company_type,
        location: job.location,
        experience: job.experience,
        salary: job.salary === "Not Disclosed" ? "" : job.salary,
        job_type: job.skills,
        description: blogData.content
      });

      setEditingId(job.id);
      setActiveTab('post'); // Switch to the form tab
      setMessage({ type: '', text: '' });
      window.scrollTo(0, 0);

    } catch (error) {
      console.error("Error fetching job details for edit:", error);
      setMessage({ type: 'error', text: 'Could not load job details for editing.' });
    }
  };

  // NEW: Cancel Edit Mode
  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData({ title: '', company: '', location: '', experience: '', salary: '', job_type: 'Full-time', description: '' });
    setActiveTab('manage');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });

    try {
      const token = localStorage.getItem('adminToken');
      
      if (editingId) {
        // UPDATE EXISTING JOB
        await axios.put(`https://ann-networks-api.onrender.com/api/admin/jobs/${editingId}`, formData, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setMessage({ type: 'success', text: 'Job successfully updated!' });
        setEditingId(null); // Exit edit mode
      } else {
        // CREATE NEW JOB
        await axios.post('https://ann-networks-api.onrender.com/api/admin/jobs', formData, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setMessage({ type: 'success', text: 'Job successfully published!' });
      }

      // Clear form
      setFormData({ title: '', company: '', location: '', experience: '', salary: '', job_type: 'Full-time', description: '' });
      
    } catch (error) {
      setMessage({ type: 'error', text: editingId ? 'Failed to update job.' : 'Failed to publish job.' });
    }
  };

  const handleDelete = async (jobId) => {
    if (!window.confirm("Are you sure you want to permanently delete this job and its article?")) return;

    try {
      const token = localStorage.getItem('adminToken');
      await axios.delete(`https://ann-networks-api.onrender.com/api/admin/jobs/${jobId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setJobList(jobList.filter(job => job.id !== jobId));
      setMessage({ type: 'success', text: 'Job deleted successfully.' });
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to delete job.' });
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <nav className="bg-primary px-6 py-4 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-2 text-white">
          <FiBriefcase className="text-xl text-secondary" />
          <h1 className="text-xl font-bold tracking-tight">ANN Control Center</h1>
        </div>
        <button onClick={handleLogout} className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm font-medium">
          <FiLogOut /> Logout
        </button>
      </nav>

      <div className="max-w-4xl mx-auto py-10 px-6">
        <div className="flex gap-4 mb-8 border-b border-borderLight pb-4">
          <button 
            onClick={() => { setActiveTab('post'); setMessage({type: '', text: ''}); if(!editingId) setFormData({...formData, title:''}); }}
            className={`flex items-center gap-2 px-5 py-2.5 font-semibold rounded-lg transition-colors ${activeTab === 'post' ? 'bg-secondary text-white shadow-md' : 'text-textMuted hover:bg-surface'}`}
          >
            {editingId ? <FiEdit /> : <FiPlusCircle />} {editingId ? "Edit Existing Job" : "Post New Job"}
          </button>
          <button 
            onClick={() => { setActiveTab('manage'); setMessage({type: '', text: ''}); }}
            className={`flex items-center gap-2 px-5 py-2.5 font-semibold rounded-lg transition-colors ${activeTab === 'manage' ? 'bg-secondary text-white shadow-md' : 'text-textMuted hover:bg-surface'}`}
          >
            <FiList /> Manage Jobs
          </button>
        </div>

        {message.text && (
          <div className={`p-4 rounded-lg mb-6 text-sm font-medium border ${message.type === 'success' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
            {message.text}
          </div>
        )}

        {activeTab === 'post' ? (
          <div className="bg-surface p-8 rounded-xl shadow-card border border-borderLight relative">
            {editingId && (
               <div className="absolute top-0 right-0 bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                 EDIT MODE ACTIVE
               </div>
            )}
            <h2 className="text-xl font-bold text-textMain mb-6">{editingId ? "Update Job Listing" : "Create a Listing"}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-semibold text-textMain mb-2">Job Title</label>
                  <input type="text" name="title" value={formData.title} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border border-borderLight focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-textMain mb-2">Company / Agency Type</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border border-borderLight focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-textMain mb-2">Location</label>
                  <input type="text" name="location" value={formData.location} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border border-borderLight focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-textMain mb-2">Experience Required</label>
                  <input type="text" name="experience" value={formData.experience} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border border-borderLight focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-textMain mb-2">Employment Type</label>
                  <select name="job_type" value={formData.job_type} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-borderLight focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all bg-white">
                    <option>Full-time</option>
                    <option>Internship</option>
                    <option>Contract</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-textMain mb-2">Full Job Description</label>
                <textarea name="description" value={formData.description} onChange={handleChange} required rows="6" className="w-full px-4 py-2 rounded-lg border border-borderLight focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all resize-y"></textarea>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button type="submit" className="flex-1 px-8 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondaryHover transition-colors flex items-center justify-center gap-2 shadow-btn">
                  {editingId ? <><FiSave className="text-lg" /> Update Job</> : <><FiPlusCircle className="text-lg" /> Publish Job</>}
                </button>
                {editingId && (
                  <button type="button" onClick={handleCancelEdit} className="px-8 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 border border-gray-300">
                    <FiXCircle className="text-lg" /> Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
        ) : (
          <div className="bg-surface rounded-xl shadow-card border border-borderLight overflow-hidden">
            {jobList.length === 0 ? (
              <div className="p-10 text-center text-textMuted font-medium">No jobs currently active.</div>
            ) : (
              <ul className="divide-y divide-borderLight">
                {jobList.map(job => (
                  <li key={job.id} className="p-5 flex justify-between items-center hover:bg-background transition-colors group">
                    <div>
                      <h4 className="font-bold text-textMain text-lg">{job.title}</h4>
                      <p className="text-sm text-textMuted mt-1">
                        <span className="font-semibold text-secondary">{job.company_type}</span> &bull; {job.location}
                      </p>
                    </div>
                    <div className="flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                      <button onClick={() => handleEditClick(job)} className="text-blue-500 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 p-2.5 rounded-lg transition-colors" title="Edit Job">
                        <FiEdit className="text-xl" />
                      </button>
                      <button onClick={() => handleDelete(job.id)} className="text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 p-2.5 rounded-lg transition-colors" title="Delete Job">
                        <FiTrash2 className="text-xl" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;