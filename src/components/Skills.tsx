import React from 'react';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-zinc-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-zinc-950 to-transparent"></div>
      <div className="absolute -left-32 top-1/4 w-64 h-64 bg-zinc-800/20 rounded-full blur-3xl"></div>
      <div className="absolute -right-32 bottom-1/4 w-64 h-64 bg-zinc-800/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Technical Skills</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-zinc-300 mb-3">Programming Languages</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-sm">Python</span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-sm">JavaScript</span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-sm">C++</span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-sm">Solidity</span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium text-zinc-300 mb-3">Web Development</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-sm">React</span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-sm">MongoDB</span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium text-zinc-300 mb-3">AI & Machine Learning</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-sm">TensorFlow</span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-sm">PyTorch</span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-sm">NLP</span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-sm">Computer Vision</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Professional Skills</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-zinc-300 mb-3">Healthcare</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-sm">Physical Therapy</span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-sm">Rehabilitation</span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-sm">Sports Medicine</span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-sm">Ergonomics</span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium text-zinc-300 mb-3">Hardware</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-sm">Arduino</span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-sm">Raspberry Pi</span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-sm">Sensors</span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-sm">IoT</span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium text-zinc-300 mb-3">Other</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-sm">Project Management</span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-sm">Research</span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-sm">Technical Writing</span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-sm">Team Leadership</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 