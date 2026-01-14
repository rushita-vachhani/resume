import Image from "next/image";

export default function Home() {
  return (
    <div className="section-container">

      {/* HERO HEADER */}
      <div
        className="bg-card-bg border border-card-border rounded-xl shadow-md 
          p-10 flex justify-between items-center
        "
      >
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Hi, I’m <span className="text-primary">Rushitaben Vachhani</span>
          </h1>

          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Master’s student in <strong>Computer Software Engineering</strong> at Northeastern University,
            with hands-on experience building <strong>full-stack, data-driven, and scalable applications</strong>.
          </p>

          <p className="mt-2 text-gray-600 dark:text-gray-400 text-lg">
            Actively seeking <span className="text-primary font-semibold">Software Engineering / Data / ML Internships</span>.
          </p>

          <button className="mt-6 bg-primary hover:bg-primary-hover text-black px-6 py-3 rounded-md font-semibold">
            View My Work
          </button>
        </div>

        {/* OPTIONAL: add image later when available in /public */}
        {/* <Image
          src="/profile.png"
          alt="Profile photo"
          width={320}
          height={320}
          className="rounded-xl"
        /> */}
      </div>

      {/* METRICS */}
      <div className="grid grid-cols-4 gap-8 mt-10">
        <Metric title="Years of Experience" value="5+" />
        <Metric title="Academic & Industry Projects" value="15+" />
        <Metric title="Technologies Used" value="20+" />
        <Metric title="Hackathons & Awards" value="5+" />
      </div>

      {/* SERVICES / FOCUS AREAS */}
      <h2 className="text-2xl font-semibold mt-12 mb-6">
        What I Work On
      </h2>

      <div className="grid grid-cols-3 gap-6">
        <ServiceCard
          title="Full-Stack Development"
          description="Building scalable web applications using React, TypeScript, Node.js, Spring Boot, and REST APIs."
        />
        <ServiceCard
          title="Backend & Systems"
          description="Designing robust backend services, data pipelines, and cloud-ready architectures."
        />
        <ServiceCard
          title="Data & Machine Learning"
          description="Hands-on experience with Python, ML models, feature engineering, and analytics workflows."
        />
        <ServiceCard
          title="Cloud & DevOps"
          description="Exposure to Docker, Kubernetes, AWS, CI/CD pipelines, and system monitoring."
        />
        <ServiceCard
          title="UI / UX Engineering"
          description="Translating designs into responsive, accessible, and performance-optimized user interfaces."
        />
        <ServiceCard
          title="Research & Prototyping"
          description="Rapid prototyping, experimentation, debugging, and performance optimization."
        />
      </div>
    </div>
  );
}

/* ---------- Components ---------- */

function Metric({ title, value }: { title: string; value: string }) {
  return (
    <div className="text-center">
      <h3 className="text-4xl font-bold text-gray-900 dark:text-white">{value}</h3>
      <p className="text-gray-600 dark:text-gray-400">{title}</p>
    </div>
  );
}

function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-primary mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
