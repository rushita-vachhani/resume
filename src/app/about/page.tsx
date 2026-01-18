import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';

export default function About() {
  return (
    <div className="section-container relative min-h-screen overflow-hidden">
      {/* Global Animated Background */}
      <AnimatedBackground />

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Creative Header */}
        <header className="mb-2 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-body-text tracking-tight">
            About <span className="text-primary">Me</span>
          </h1>
          <p className="text-2xl text-text-secondary max-w-2xl font-light leading-relaxed">
            More than just a <span className="font-semibold text-primary">developer</span>. <br/>
            I&apos;m a storyteller, a problem solver, and a tech enthusiast.
          </p>
        </header>

        <div className="grid gap-10 md:grid-cols-12">
          {/* Left Column: The Narrative */}
          <div className="md:col-span-7 space-y-10">
            {/* The Journey Card */}
            <section className="
              rounded-[2.5rem] p-10
              bg-body-bg
              shadow-[20px_20px_60px_var(--shadow-outer-dark),_-20px_-20px_60px_var(--shadow-outer-light)]
              relative overflow-hidden
            ">
              <div className="absolute top-0 right-0 p-10 opacity-5 text-9xl text-primary rotate-12 select-none pointer-events-none">
                <i className="bi bi-rocket-takeoff-fill"></i>
              </div>
              
              <h2 className="text-3xl font-bold mb-6 text-body-text flex items-center gap-3 relative z-10">
                The Journey
              </h2>
              
              <div className="prose dark:prose-invert max-w-none text-text-secondary space-y-6 leading-relaxed relative z-10 text-justify">
                <p>
                  My fascination with technology began not with code, but with <span className="font-semibold text-primary">curiosity</span>. I wanted to know how things worked behind the screen. That curiosity led me to write my first &quot;Hello World,&quot; and I haven&apos;t looked back since.
                </p>
                <p>
                  From late-night debugging sessions to the thrill of deploying a scalable application, I&apos;ve fallen in love with the process of creation. I see every bug as a puzzle and every project as an opportunity to learn something new.
                </p>
                <p>
                  Today, I&apos;m pursuing my Master&apos;s in Software Engineering, bridging the gap between theoretical concepts and real-world solutions.
                </p>
              </div>
            </section>

            {/* Why I Code Card - Inset Style for Contrast */}
            <section className="
              rounded-[2.5rem] p-10
              bg-body-bg
              shadow-[inset_10px_10px_20px_var(--shadow-inner-dark),inset_-10px_-10px_20px_var(--shadow-inner-light)]
            ">
              <h2 className="text-2xl font-bold mb-4 text-primary">
                Why I Code
              </h2>
              <p className="text-text-secondary leading-relaxed italic">
                &quot;Code is the closest thing we have to magic. It allows us to create something from nothing, to solve problems that affect real people, and to build the future one line at a time.&quot;
              </p>
            </section>
          </div>

          {/* Right Column: Highlights & Personality */}
          <div className="md:col-span-5 space-y-8">
            
            {/* Quick Stats / Highlights */}
            <div className="grid grid-cols-2 gap-6">
               <HighlightCard icon="bi-mortarboard-fill" label="Master's Student" />
               <HighlightCard icon="bi-code-slash" label="Full Stack Dev" />
               <HighlightCard icon="bi-puzzle-fill" label="Problem Solver" />
               <HighlightCard icon="bi-infinity" label="Lifelong Learner" />
            </div>

            {/* Beyond the Code */}
            <section className="
              rounded-[2.5rem] p-8
              bg-body-bg
              shadow-[20px_20px_60px_var(--shadow-outer-dark),_-20px_-20px_60px_var(--shadow-outer-light)]
            ">
              <h3 className="font-bold mb-6 text-xl text-body-text">Beyond the Code</h3>
              <div className="flex flex-wrap gap-4">
                <InterestPill icon="bi-camera-fill" label="Photography" />
                <InterestPill icon="bi-controller" label="Gaming" />
                <InterestPill icon="bi-music-note-beamed" label="Music" />
                <InterestPill icon="bi-book-half" label="Reading" />
              </div>
            </section>

            {/* CTA */}
            <div className="
              rounded-[2.5rem] p-8 text-center
              bg-body-bg
              border-2 border-primary/10
              shadow-[20px_20px_60px_var(--shadow-outer-dark),_-20px_-20px_60px_var(--shadow-outer-light)]
            ">
               <h3 className="font-bold mb-2 text-lg text-body-text">Let&apos;s Create Together</h3>
               <p className="text-sm text-text-secondary mb-6">
                 Open to internships and collaborative projects.
               </p>
               <a 
                 href="https://docs.google.com/document/d/1srg1XYpJQfZqMBG7pg0iG4KK1oHeYLFJRpb6MvhTckY/edit?usp=sharing"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="
                   inline-block px-8 py-3 rounded-full font-bold text-primary
                  bg-body-bg
                  shadow-[6px_6px_12px_var(--shadow-outer-dark),_-6px_-6px_12px_var(--shadow-outer-light)]
                  hover:shadow-[inset_4px_4px_8px_var(--shadow-inner-dark),inset_-4px_-4px_8px_var(--shadow-inner-light)]
                  active:scale-95 transition-all duration-300
                 "
               >
                  Download Resume
               </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

function HighlightCard({ icon, label }: { icon: string, label: string }) {
  return (
    <div className="
      flex flex-col items-center justify-center p-6 rounded-[2rem]
      bg-body-bg
      shadow-[10px_10px_20px_var(--shadow-outer-dark),_-10px_-10px_20px_var(--shadow-outer-light)]
      hover:-translate-y-1 transition-transform duration-300
    ">
      <i className={`bi ${icon} text-3xl text-primary mb-3`}></i>
      <span className="text-sm font-semibold text-text-secondary text-center">{label}</span>
    </div>
  )
}

function InterestPill({ icon, label }: { icon: string, label: string }) {
  return (
    <div className="
      flex items-center gap-2 px-4 py-2 rounded-full
      bg-body-bg
      shadow-[inset_3px_3px_6px_var(--shadow-inner-dark),inset_-3px_-3px_6px_var(--shadow-inner-light)]
    ">
      <i className={`bi ${icon} text-primary`}></i>
      <span className="text-sm font-medium text-text-secondary">{label}</span>
    </div>
  )
}
