import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-zinc-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-zinc-950 to-transparent"></div>
      <div className="absolute -left-32 top-1/4 w-64 h-64 bg-zinc-800/20 rounded-full blur-3xl"></div>
      <div className="absolute -right-32 bottom-1/4 w-64 h-64 bg-zinc-800/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Column */}
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-2xl border-4 border-zinc-700 shadow-xl transform transition-transform hover:scale-105 duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                <svg
                  className="w-32 h-32 text-zinc-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full md:w-3/5">
            <div className="space-y-6">
              <p className="text-zinc-400 text-lg leading-relaxed">
                Hello! I'm <span className="text-white font-medium">Youngkwon Lee</span>, a passionate physical therapist and digital healthcare innovator with a strong background in rehabilitation, artificial intelligence, and wearable technologies. <br></br>With over 7 years of clinical experience at Seoul National University Hospital and a master's degree in physical therapy from Yonsei University, I bridge the gap between healthcare and cutting-edge technology.<br></br>

My journey began in physical therapy, treating patients from pediatric to geriatric populations, and expanded into developing AI-powered healthcare applications, motion analysis systems, and blockchain-integrated health platforms.<br></br> I've led and contributed to various projects including voice AI for pain consultation, sports video web applications, and smart sensor-based lumbar support devices.

<br></br>I'm currently focusing on building intelligent, data-driven rehab solutions using machine learning, LLMs, and wearable sensor technology—making healthcare smarter, more accessible, and personalized.
              </p>

              {/* Tech stack showcase */}
              <div className="py-4">
                <h3 className="text-white font-semibold text-xl mb-3">My Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'React', 'Next.js', 'Node.js', 'Python', 'Arduino', 'Solidity',].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 pt-8 border-t border-zinc-800">
              <div>
                <h3 className="text-white font-semibold text-xl mb-3 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                  Education
                </h3>
                <ul className="space-y-4">
                  <li className="text-zinc-400">
                    <span className="text-white font-medium">MSc & BSc in Physical Therapy</span>
                    <br />
                    <span className="text-sm">Yonsei University</span>
                  </li>
                  <li className="text-zinc-400">
                    <span className="text-white font-medium">Certifications:</span>
                    <br />
                    <span className="text-sm">
Blockchain Specialist (Level 2)<br></br>
Certified Ergonomist<br></br>
Neurologic & Respiratory Rehabilitation<br></br>
Geriatric Sports Instructor<br></br>
AI & Data Analysis</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold text-xl mb-3 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Experience
                </h3>
                <ul className="space-y-4">
                  <li className="text-zinc-400">
                    <span className="text-white font-medium">Physical Therapist</span>
                    <br />
                    <span className="text-sm">Seoul National University Hospital, 2017-Present</span>
                  </li>
                  <li className="text-zinc-400">
                    <span className="text-white font-medium">Olympic Team PT</span>
                    <br />
                    <span className="text-sm">2018 PyeongChang Winter Olympics</span>
                  </li>
                  <li className="text-zinc-400">
                    <span className="text-white font-medium">Researcher</span>
                    <br />
                    <span className="text-sm">2AI-assisted motion analysis for elderly fall prevention</span>
                  </li>
                  <li className="text-zinc-400">
                    <span className="text-white font-medium">Developer </span>
                    <br />
                    <span className="text-sm">smart wearable lumbar movement sensor system</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
