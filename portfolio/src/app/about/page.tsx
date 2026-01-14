export default function AboutPage() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-text">
          About Me
        </h1>

        <div className="space-y-6 text-base leading-7 text-muted">
          <p>
            I didn’t start my journey in software by chasing titles — I started it
            by solving problems that people actually felt.
          </p>

          <p>
            Over the last five years, I’ve worked across the full spectrum of
            software development: from designing user-centered interfaces, to
            building scalable backend systems, to leading cross-functional teams
            as a Product Owner in regulated healthcare environments.
          </p>

          <p>
            At <span className="text-text font-medium">Outright Solutions</span>,
            I owned the end-to-end delivery of a HIPAA-compliant healthcare
            platform. I translated real client needs into clear user stories,
            collaborated closely with designers and engineers, and helped improve
            development efficiency by over 50%.
          </p>

          <p>
            Earlier, at <span className="text-text font-medium">Square Infosoft</span>,
            I grew from a technical analyst into a team lead, working on scalable
            SaaS systems using React, Node.js, TypeScript, and Swift. That phase
            taught me how systems evolve — and why clean architecture matters.
          </p>

          <p>
            Today, as a Master’s student in Software Engineering at Northeastern
            University, I’m deepening my understanding of system design, data
            management, and user experience. I’m especially motivated by building
            secure, human-centered products that make a real impact.
          </p>

          <p>
            I’m currently seeking internship opportunities where I can
            contribute as a thoughtful engineer, learn from strong teams, and
            continue building software that simplifies complexity and improves
            lives.
          </p>
        </div>
      </div>
    </section>
  );
}

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-0">
      {/* Grid */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),
              linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />

      {/* Floating gradient */}
      <div
        className="
          absolute -top-40 -left-40 w-[600px] h-[600px]
          bg-yellow-500/10 rounded-full blur-3xl
          animate-floatSlow
        "
      />

      <div
        className="
          absolute bottom-0 right-0 w-[500px] h-[500px]
          bg-indigo-500/10 rounded-full blur-3xl
          animate-floatSlowReverse
        "
      />
    </div>
  );
}
