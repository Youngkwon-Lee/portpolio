import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-zinc-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-zinc-950 to-transparent"></div>
      <div className="absolute -left-32 top-1/4 w-64 h-64 bg-zinc-800/20 rounded-full blur-3xl"></div>
      <div className="absolute -right-32 bottom-1/4 w-64 h-64 bg-zinc-800/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
          Contact Me
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="bg-zinc-800/50 rounded-xl p-8 backdrop-blur-sm border border-zinc-700">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-zinc-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-white text-zinc-900 rounded-md font-medium hover:bg-zinc-200 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] group"
              >
                <span className="flex items-center justify-center">
                  Send Message
                  <svg
                    className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-zinc-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Email</h3>
              <p className="text-zinc-400">kwon3856@gmail.com</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-zinc-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Location</h3>
              <p className="text-zinc-400">Seoul, South Korea</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-zinc-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Phone</h3>
              <p className="text-zinc-400">+82 10-6704-6556</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 