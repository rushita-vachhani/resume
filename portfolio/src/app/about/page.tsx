import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';

export default function About() {
  return (
    <div className="section-container relative min-h-screen overflow-hidden">
      {/* Global Animated Background */}
      <AnimatedBackground />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <header className="mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            Developer, Problem Solver, and Lifelong Learner.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-12">
          {/* Main Story Column */}
          <div className="md:col-span-8 space-y-8">
            <section className="card backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 border-white/20 dark:border-gray-700/30 p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
                <span>🚀</span> The Journey
              </h2>
              <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4 leading-relaxed">
                <p>
                  {/* TIP: Start with a hook. Instead of "I am a student", try "My fascination with technology began when..." */}
                  My journey into tech wasn't just about writing code; it was about solving puzzles. It started when I realized that a few lines of logic could build tools that help people.
                </p>
                <p>
                  {/* TIP: Discuss a challenge. This shows resilience. */}
                  Over the last few years, I&apos;ve dived deep into full-stack development. There were late nights debugging complex issues, but each error taught me something new about architecture and efficiency.
                </p>
                <p>
                  {/* TIP: The Present/Goal. */}
                  Currently, I&apos;m focused on building scalable web applications and learning about cloud infrastructure. I&apos;m eager to apply this knowledge in a professional environment where I can contribute to meaningful projects.
                </p>
              </div>
            </section>

            <section className="card backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 border-white/20 dark:border-gray-700/30 p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
                <span>💡</span> Why I Code
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I believe that code is the closest thing we have to magic. It allows us to create something from nothing. I am driven by the opportunity to build intuitive user experiences and robust backend systems that stand the test of time.
              </p>
            </section>
          </div>

          {/* Sidebar / Highlights Column */}
          <div className="md:col-span-4 space-y-6">
             {/* Call to Action for Recruiter */}
             <div className="card bg-gradient-to-br from-card-gradient-start to-card-gradient-end text-white p-6 border-none shadow-lg transform hover:scale-105 transition-transform duration-300">
                <h3 className="font-bold mb-2 text-lg">Open to Opportunities</h3>
                <p className="text-sm opacity-90 mb-4">
                  I am actively looking for internship roles where I can bring my skills in React and Node.js to the table.
                </p>
                <button className="w-full px-4 py-2 bg-white text-card-gradient-start rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors">
                  Download Resume
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
