import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-zinc-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-zinc-950 to-transparent"></div>
      <div className="absolute -left-32 top-1/4 w-64 h-64 bg-zinc-800/20 rounded-full blur-3xl"></div>
      <div className="absolute -right-32 bottom-1/4 w-64 h-64 bg-zinc-800/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <div className="bg-zinc-800/50 rounded-xl p-6 backdrop-blur-sm border border-zinc-700 hover:border-zinc-500 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-4">AI Voice Pain Consultation</h3>
            <p className="text-zinc-400 mb-4">
              Developed an AI-powered voice consultation system for pain assessment and management.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-zinc-700 text-zinc-300 rounded-md text-sm">Python</span>
              <span className="px-3 py-1 bg-zinc-700 text-zinc-300 rounded-md text-sm">TensorFlow</span>
              <span className="px-3 py-1 bg-zinc-700 text-zinc-300 rounded-md text-sm">NLP</span>
            </div>
            <a 
              href="https://github.com/orgs/ProtectMong/repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              View Project →
            </a>
          </div>

          {/* Project Card 2 */}
          <div className="bg-zinc-800/50 rounded-xl p-6 backdrop-blur-sm border border-zinc-700 hover:border-zinc-500 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-4">Smart Lumbar Support Device</h3>
            <p className="text-zinc-400 mb-4">
              Created a wearable device with sensors for monitoring and supporting lumbar movement.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-zinc-700 text-zinc-300 rounded-md text-sm">Arduino</span>
              <span className="px-3 py-1 bg-zinc-700 text-zinc-300 rounded-md text-sm">C++</span>
              <span className="px-3 py-1 bg-zinc-700 text-zinc-300 rounded-md text-sm">IoT</span>
            </div>
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">View Project →</a>
          </div>

          {/* Project Card 3 */}
          <div className="bg-zinc-800/50 rounded-xl p-6 backdrop-blur-sm border border-zinc-700 hover:border-zinc-500 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-4">Sports Video Analysis Web App</h3>
            <p className="text-zinc-400 mb-4">
              Built a web application for analyzing sports performance videos with AI assistance.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-zinc-700 text-zinc-300 rounded-md text-sm">React</span>
              <span className="px-3 py-1 bg-zinc-700 text-zinc-300 rounded-md text-sm">Node.js</span>
              <span className="px-3 py-1 bg-zinc-700 text-zinc-300 rounded-md text-sm">MongoDB</span>
            </div>
            <a 
              href="http://snapgoal.co.kr/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              View Project →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 