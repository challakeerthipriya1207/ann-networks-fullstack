import React from 'react';
import { Link } from 'react-router-dom';
import { FiFileText, FiMessageCircle, FiCheckCircle, FiBookOpen, FiUsers, FiTarget, FiHeart } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="w-full font-sans">
      
      {/* SECTION 1: HERO SECTION */}
      <section className="bg-primary py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-white text-[32px] md:text-[48px] font-[800] tracking-tight mb-6 leading-tight">
            Accelerate Your IT Career with <br className="hidden md:block" />
            <span className="text-secondary">ANN Networks</span>
          </h1>
          <p className="text-[16px] md:text-[18px] mb-10 text-textMuted max-w-3xl mx-auto leading-relaxed font-[400]">
            We bridge the gap between academia and the IT industry. Explore curated IT job opportunities, read in-depth job articles, and connect directly with our consultants to take the next step in your career.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/jobs" className="bg-secondary text-white px-7 py-3 rounded-[8px] font-[600] hover:bg-secondaryHover hover:-translate-y-[1px] transition-all shadow-btn text-center">
              Browse IT Jobs
            </Link>
            <Link to="/consultation" className="bg-transparent border-2 border-secondary text-secondary px-7 py-3 rounded-[8px] font-[600] hover:bg-tagBg transition-all text-center">
              Consult Now
            </Link>
          </div>
        </div>
      </section>

     {/* SECTION 2: HOW IT WORKS */}
      <section className="py-20 bg-background px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[32px] font-[700] text-textMain text-center mb-16">How ANN Networks Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
            
            {/* The Connecting Dashed Line (Visible only on desktop) */}
            <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-[2px] border-t-2 border-dashed border-borderLight z-0"></div>

            {/* Step 1 */}
            <div className="text-center p-6 flex flex-col items-center relative z-10 group">
              <div className="relative mb-8">
                {/* Icon Circle */}
                <div className="w-20 h-20 bg-tagBg rounded-full flex items-center justify-center group-hover:bg-secondary transition-all duration-300 shadow-sm">
                  <FiFileText className="text-secondary text-[32px] group-hover:text-white transition-colors duration-300" />
                </div>
                {/* Overlapping Number Badge */}
                <div className="absolute -top-1 -right-2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-[14px] font-[700] border-[4px] border-background shadow-sm">
                  1
                </div>
              </div>
              <h3 className="text-[20px] font-[700] text-textMain mb-3">Read the Job Article</h3>
              <p className="text-textBody text-[16px] leading-relaxed">
                Every opportunity comes with a detailed article — role, skills, location, salary, and culture. No guesswork, just clarity.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center p-6 flex flex-col items-center relative z-10 group">
              <div className="relative mb-8">
                {/* Icon Circle */}
                <div className="w-20 h-20 bg-tagBg rounded-full flex items-center justify-center group-hover:bg-secondary transition-all duration-300 shadow-sm">
                  <FiMessageCircle className="text-secondary text-[32px] group-hover:text-white transition-colors duration-300" />
                </div>
                {/* Overlapping Number Badge */}
                <div className="absolute -top-1 -right-2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-[14px] font-[700] border-[4px] border-background shadow-sm">
                  2
                </div>
              </div>
              <h3 className="text-[20px] font-[700] text-textMain mb-3">Consult Our Experts</h3>
              <p className="text-textBody text-[16px] leading-relaxed">
                Reach out to our consultants directly via WhatsApp or Email. Get personalized guidance on whether you're the right fit.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center p-6 flex flex-col items-center relative z-10 group">
              <div className="relative mb-8">
                {/* Icon Circle (Green for Success) */}
                <div className="w-20 h-20 bg-[#DCFCE7] rounded-full flex items-center justify-center group-hover:bg-success transition-all duration-300 shadow-sm">
                  <FiCheckCircle className="text-success text-[32px] group-hover:text-white transition-colors duration-300" />
                </div>
                {/* Overlapping Number Badge */}
                <div className="absolute -top-1 -right-2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-[14px] font-[700] border-[4px] border-background shadow-sm">
                  3
                </div>
              </div>
              <h3 className="text-[20px] font-[700] text-textMain mb-3">Express Your Interest</h3>
              <p className="text-textBody text-[16px] leading-relaxed">
                Once you're ready, tell us you're interested. Our team connects you with the right people and guides you through.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: LATEST JOB ARTICLES */}
      <section className="py-20 bg-surface px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[32px] font-[700] text-textMain text-center mb-12">Latest IT Job Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            
            {/* Card 1 */}
            <div className="bg-surface border border-borderLight rounded-[12px] p-[24px] shadow-card hover:shadow-card-hover hover:-translate-y-[3px] transition-all duration-200 flex flex-col h-full">
              <h3 className="text-[20px] font-[700] text-textMain mb-1">Junior Java Developer</h3>
              <p className="text-[14px] font-[500] text-textMuted mb-4">Product-based startup</p>
              <div className="flex gap-2 mb-4">
                <span className="bg-tagBg text-secondary border border-tagBorder text-[12px] font-[500] px-[10px] py-[3px] rounded-[6px]">Hyderabad</span>
                <span className="bg-tagBg text-secondary border border-tagBorder text-[12px] font-[500] px-[10px] py-[3px] rounded-[6px]">0-1 Yrs Exp</span>
              </div>
              <p className="text-[16px] text-textBody mb-6 flex-grow">
                Join a fast-growing startup building scalable fintech solutions. Strong OOPs concepts required.
              </p>
              <Link to="/blog" className="block w-full text-center bg-background border border-borderLight text-secondary font-[600] py-2 rounded-[8px] hover:bg-tagBg transition-colors">
                Read Full Article
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-surface border border-borderLight rounded-[12px] p-[24px] shadow-card hover:shadow-card-hover hover:-translate-y-[3px] transition-all duration-200 flex flex-col h-full">
              <h3 className="text-[20px] font-[700] text-textMain mb-1">React Frontend Engineer</h3>
              <p className="text-[14px] font-[500] text-textMuted mb-4">MNC Agency</p>
              <div className="flex gap-2 mb-4">
                <span className="bg-tagBg text-secondary border border-tagBorder text-[12px] font-[500] px-[10px] py-[3px] rounded-[6px]">Bangalore</span>
                <span className="bg-tagBg text-secondary border border-tagBorder text-[12px] font-[500] px-[10px] py-[3px] rounded-[6px]">Fresher</span>
              </div>
              <p className="text-[16px] text-textBody mb-6 flex-grow">
                Looking for UI enthusiasts to build interactive dashboards. React and Tailwind CSS knowledge is a must.
              </p>
              <Link to="/blog" className="block w-full text-center bg-background border border-borderLight text-secondary font-[600] py-2 rounded-[8px] hover:bg-tagBg transition-colors">
                Read Full Article
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-surface border border-borderLight rounded-[12px] p-[24px] shadow-card hover:shadow-card-hover hover:-translate-y-[3px] transition-all duration-200 flex flex-col h-full">
              <h3 className="text-[20px] font-[700] text-textMain mb-1">Node.js Backend Intern</h3>
              <p className="text-[14px] font-[500] text-textMuted mb-4">E-commerce Platform</p>
              <div className="flex gap-2 mb-4">
                <span className="bg-tagBg text-secondary border border-tagBorder text-[12px] font-[500] px-[10px] py-[3px] rounded-[6px]">Remote</span>
                <span className="bg-tagBg text-secondary border border-tagBorder text-[12px] font-[500] px-[10px] py-[3px] rounded-[6px]">Internship</span>
              </div>
              <p className="text-[16px] text-textBody mb-6 flex-grow">
                6-month internship converting into a full-time role. Work on REST APIs and MySQL databases.
              </p>
              <Link to="/blog" className="block w-full text-center bg-background border border-borderLight text-secondary font-[600] py-2 rounded-[8px] hover:bg-tagBg transition-colors">
                Read Full Article
              </Link>
            </div>

          </div>
          <div className="text-center">
            <Link to="/jobs" className="text-secondary font-[600] text-[16px] hover:underline inline-flex items-center">
              View All Job Opportunities <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY ANN NETWORKS */}
      <section className="py-20 bg-background px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[32px] font-[700] text-textMain text-center mb-16">Why Students & Graduates Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            <div className="flex gap-5">
              <div className="mt-1"><FiBookOpen className="text-secondary text-[32px]" /></div>
              <div>
                <h3 className="text-[20px] font-[700] text-textMain mb-2">In-Depth Job Articles</h3>
                <p className="text-textBody text-[16px] leading-relaxed">We don't just list titles. Every post covers skills, salary, location, culture, and day-to-day realities.</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="mt-1"><FiUsers className="text-secondary text-[32px]" /></div>
              <div>
                <h3 className="text-[20px] font-[700] text-textMain mb-2">Direct Consultant Access</h3>
                <p className="text-textBody text-[16px] leading-relaxed">No bots. Reach real IT consultants via WhatsApp or Email, and get honest advice about your profile.</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="mt-1"><FiTarget className="text-secondary text-[32px]" /></div>
              <div>
                <h3 className="text-[20px] font-[700] text-textMain mb-2">Built for Freshers</h3>
                <p className="text-textBody text-[16px] leading-relaxed">Designed specifically for students entering IT. We understand your stage, your doubts, and your goals.</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="mt-1"><FiHeart className="text-secondary text-[32px]" /></div>
              <div>
                <h3 className="text-[20px] font-[700] text-textMain mb-2">Zero Cost to Students</h3>
                <p className="text-textBody text-[16px] leading-relaxed">Using ANN Networks to discover jobs, read articles, and consult our team is completely free.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: TESTIMONIALS */}
      <section className="py-20 bg-surface px-6 border-t border-borderLight">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[32px] font-[700] text-textMain text-center mb-16">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background p-[24px] rounded-[12px] border border-borderLight">
              <p className="text-textBody text-[16px] italic mb-6 leading-relaxed">
                "I read an article about a React Developer role, WhatsApp'd the consultant the same evening, and had an interview scheduled within 3 days."
              </p>
              <p className="font-[600] text-textMain text-[14px]">Ravi K. — B.Tech 2024</p>
            </div>
            <div className="bg-background p-[24px] rounded-[12px] border border-borderLight">
              <p className="text-textBody text-[16px] italic mb-6 leading-relaxed">
                "The job articles here are incredibly detailed. I finally understood what companies actually expect from freshers before I even applied."
              </p>
              <p className="font-[600] text-textMain text-[14px]">Sneha P. — MCA Graduate</p>
            </div>
            <div className="bg-background p-[24px] rounded-[12px] border border-borderLight">
              <p className="text-textBody text-[16px] italic mb-6 leading-relaxed">
                "The consultant gave me honest feedback about my resume and told me exactly which skills to build. That guidance changed everything."
              </p>
              <p className="font-[600] text-textMain text-[14px]">Arjun M. — B.Sc CS</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CTA BANNER */}
      <section className="py-20 bg-primary px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-white text-[32px] font-[700] mb-4">Ready to Take the First Step?</h2>
          <p className="text-textMuted text-[16px] md:text-[18px] mb-10 max-w-2xl mx-auto">
            Explore IT job opportunities written for freshers and graduates. Read, consult, and apply — all in one place.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/jobs" className="bg-secondary text-white px-7 py-3 rounded-[8px] font-[600] hover:bg-secondaryHover hover:-translate-y-[1px] transition-all shadow-btn">
              Browse IT Jobs
            </Link>
            <Link to="/consultation" className="bg-transparent border-2 border-borderLight text-white px-7 py-3 rounded-[8px] font-[600] hover:bg-white hover:text-primary transition-colors">
              Consult Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;