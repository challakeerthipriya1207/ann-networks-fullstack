import React from 'react';
import { Link } from 'react-router-dom';

const Consultation = () => {
  return (
    <div className="w-full min-h-screen bg-background">
      
      {/* PAGE HEADER */}
      <section className="bg-primary text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
         <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Consult About a Job Opportunity
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Have a question about a job listed on ANN Networks? Or are you interested in a particular role and want to take it forward? Reach out directly to the person associated with that listing. Get real answers from a real person — no bots, no delays.
          </p>
        </div>
      </section>

      {/* HOW THIS WORKS */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">How This Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            <div className="bg-background p-8 rounded-xl border border-gray-100 relative">
              <div className="absolute -top-6 left-8 bg-secondary text-white w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold border-4 border-white">1</div>
              <h3 className="text-xl font-bold text-primary mb-3 mt-4">Find a Job You're Interested In</h3>
              <p className="text-textMain">Browse the job listings or read a blog article on ANN Networks. Each post covers the full role details — responsibilities, skills, location, salary, and more.</p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-gray-100 relative">
              <div className="absolute -top-6 left-8 bg-secondary text-white w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold border-4 border-white">2</div>
              <h3 className="text-xl font-bold text-primary mb-3 mt-4">Check Contact Details</h3>
              <p className="text-textMain">Every job article includes the name and contact details of the person you should reach out to — shared transparently on the post itself.</p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-gray-100 relative">
              <div className="absolute -top-6 left-8 bg-secondary text-white w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold border-4 border-white">3</div>
              <h3 className="text-xl font-bold text-primary mb-3 mt-4">Reach Out Directly</h3>
              <p className="text-textMain">Contact the person via WhatsApp, Email, or Phone. Ask your questions, express your interest, or request more information about the opportunity.</p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT CARD SECTION (Sample Preview) */}
      <section className="py-20 bg-background px-6 border-y border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary mb-2">Interested in a Role? Get in Touch.</h2>
            <p className="text-textMain">This is a sample of the contact card you will find at the bottom of every job article.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-10 max-w-2xl mx-auto">
            <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-6">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center text-3xl shrink-0">
                👤
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary">Alex Sharma</h3>
                <p className="text-secondary font-semibold">IT Placement Consultant</p>
                <p className="text-sm text-gray-500 mt-1">🕒 Monday to Saturday, 9:00 AM – 7:00 PM IST</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-[#e7f8ed] transition group border border-gray-100">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📱</span>
                  <span className="font-semibold text-textMain group-hover:text-[#25D366] transition">+91-XXXXXXXXXX (WhatsApp)</span>
                </div>
                <span className="bg-[#25D366] text-white text-sm font-bold px-4 py-2 rounded shadow-sm">Chat</span>
              </a>

              <a href="mailto:challahoney13@gmail.com" className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition group border border-gray-100">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📧</span>
                  <span className="font-semibold text-textMain group-hover:text-secondary transition">email@annnetworks.in</span>
                </div>
                <span className="bg-secondary text-white text-sm font-bold px-4 py-2 rounded shadow-sm">Email</span>
              </a>

              <a href="tel:+91XXXXXXXXXX" className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition group border border-gray-100">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  <span className="font-semibold text-textMain group-hover:text-primary transition">+91-XXXXXXXXXX (Phone)</span>
                </div>
                <span className="bg-primary text-white text-sm font-bold px-4 py-2 rounded shadow-sm">Call</span>
              </a>
            </div>

            <div className="bg-blue-50 border-l-4 border-secondary p-4 text-sm text-textMain">
              <span className="font-bold text-primary">Note: </span> You can reach out to ask any questions about the specific job role, understand if you're eligible, or simply let them know you're interested. There is no registration or form required — just a direct conversation.
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU CAN ASK OR DISCUSS */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">What Can You Talk To Them About?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="flex gap-4 p-6 border border-gray-100 rounded-xl hover:shadow-sm transition">
              <div className="text-3xl text-secondary">🎯</div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Job Eligibility</h3>
                <p className="text-textMain">Not sure if your background matches this role? Ask directly and get an honest answer based on your profile.</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 border border-gray-100 rounded-xl hover:shadow-sm transition">
              <div className="text-3xl text-secondary">🔍</div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Role Clarity</h3>
                <p className="text-textMain">Want to understand the day-to-day work, team structure, or company culture in more detail? Just ask.</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 border border-gray-100 rounded-xl hover:shadow-sm transition">
              <div className="text-3xl text-secondary">📚</div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Skills & Preparation</h3>
                <p className="text-textMain">Want to know what to prepare before applying or what skills to brush up on? They can guide you.</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 border border-gray-100 rounded-xl hover:shadow-sm transition">
              <div className="text-3xl text-secondary">🚀</div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Express Interest</h3>
                <p className="text-textMain">If you're ready to move forward, let them know you're interested. They'll guide you on the next steps.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PAGE-LEVEL CTA */}
      <section className="py-20 bg-blue-50 px-6 border-t border-blue-100 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-4">Don't Have a Specific Job in Mind Yet?</h2>
          <p className="text-lg text-textMain mb-8">
            Browse our job listings and read the articles. Each one has a contact person ready to help you.
          </p>
          <Link 
            to="/jobs" 
            className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 transition shadow-lg"
          >
            Browse IT Jobs <span>→</span>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Consultation;