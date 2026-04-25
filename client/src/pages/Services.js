import React from 'react';

const Services = () => {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="bg-primary text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            What We Do at <span className="text-secondary">ANN Networks</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            We are not just a job board. We are a career consulting platform that helps IT students and graduates find the right opportunities through expert guidance, detailed content, and direct human support.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-20 bg-background px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* SERVICE 1 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start hover:shadow-md transition">
            <div className="text-6xl text-secondary shrink-0">📰</div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">IT Job Articles & Opportunity Posts</h2>
              <p className="text-textMain mb-6 leading-relaxed">
                We research and publish in-depth articles for every IT job opportunity we post. Each article includes the job title, role description, day-to-day responsibilities, required technical skills, location, salary range, experience level, company type, and career growth path. Students can read these articles like a guide before deciding to apply — removing all confusion about what a role actually involves.
              </p>
              <div className="inline-block bg-blue-50 border border-blue-100 text-secondary font-semibold px-4 py-2 rounded-lg text-sm">
                <span className="font-bold">Who it's for:</span> Final year students, recent graduates, career changers entering IT
              </div>
            </div>
          </div>

          {/* SERVICE 2 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start hover:shadow-md transition">
            <div className="text-6xl text-secondary shrink-0">🤝</div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Personal Career Consulting</h2>
              <p className="text-sm font-semibold text-gray-500 mb-4 tracking-wider uppercase">Via WhatsApp / Email / Call</p>
              <p className="text-textMain mb-6 leading-relaxed">
                Once you find a role that interests you, you don't have to figure things out alone. Our consultants are available via WhatsApp, Email, and phone calls to answer your questions, review your profile, and help you understand whether you're the right fit. We give honest, real-world advice — not templates.
              </p>
              <h3 className="font-bold text-primary mb-3">Topics we help with:</h3>
              <ul className="list-disc list-inside text-textMain space-y-2 mb-6 ml-2">
                <li>"Am I eligible for this role?"</li>
                <li>"What skills should I build before applying?"</li>
                <li>"Can you review my resume for this job?"</li>
                <li>"How should I prepare for this type of interview?"</li>
              </ul>
              <div className="inline-block bg-blue-50 border border-blue-100 text-secondary font-semibold px-4 py-2 rounded-lg text-sm">
                <span className="font-bold">Who it's for:</span> Any student or graduate who has read a job article and wants human guidance before applying
              </div>
            </div>
          </div>

          {/* SERVICE 3 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start hover:shadow-md transition">
            <div className="text-6xl text-secondary shrink-0">🎯</div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Express Your Interest in a Job</h2>
              <p className="text-textMain mb-6 leading-relaxed">
                Found a role that excites you? After reading the job article, you can directly reach out to the person listed in the article to express your interest. Every job post on ANN Networks includes the contact details of a real person you can connect with — via WhatsApp, Email, or Phone. There is no middleman, no long application portals. You read, you connect, you express interest — directly and personally.
              </p>
              <div className="inline-block bg-blue-50 border border-blue-100 text-secondary font-semibold px-4 py-2 rounded-lg text-sm">
                <span className="font-bold">Who it's for:</span> Students and graduates who have read a job article and are ready to show interest in that specific opportunity.
              </div>
            </div>
          </div>

          {/* SERVICE 4 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start hover:shadow-md transition">
            <div className="text-6xl text-secondary shrink-0">💡</div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Ask Questions About Any Job Role</h2>
              <p className="text-textMain mb-6 leading-relaxed">
                Not sure if a role is right for you? Every job article on ANN Networks has a contact person whose details are shared openly. You can reach out to this person directly with any questions you have about the role — whether it's about the required skills, the work environment, the salary expectations, the interview process, or whether your background is a good match. This is real, human consultation — not a chatbot or an automated system.
              </p>
              <h3 className="font-bold text-primary mb-3">Examples of questions you can ask:</h3>
              <ul className="list-disc list-inside text-textMain space-y-2 mb-6 ml-2">
                <li>"I have knowledge of Java basics — is this role suitable for me?"</li>
                <li>"Is this a work-from-home or on-site position?"</li>
                <li>"What is the exact interview process for this role?"</li>
                <li>"I'm a 2024 graduate — am I eligible for this opening?"</li>
              </ul>
              <div className="inline-block bg-blue-50 border border-blue-100 text-secondary font-semibold px-4 py-2 rounded-lg text-sm">
                <span className="font-bold">Who it's for:</span> Any student or graduate who wants clarity on a job before deciding to apply or express interest.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Have a question before booking?</h2>
          <p className="text-lg text-textMain mb-10">Reach out to us directly — no forms, no waiting.</p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#1ebe57] transition shadow-lg w-full sm:w-auto justify-center">
              <span>📱</span> WhatsApp Us
            </a>
            <a href="mailto:contact@annnetworks.in" className="flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 transition shadow-lg w-full sm:w-auto justify-center">
              <span>📧</span> Email Us
            </a>
            <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition shadow-lg w-full sm:w-auto justify-center">
              <span>📞</span> Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;