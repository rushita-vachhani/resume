import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="section-container">

      {/* HERO HEADER */}
      <div
        className="
          rounded-[2.5rem] p-10
          bg-body-bg
          shadow-[20px_20px_60px_var(--shadow-outer-dark),_-20px_-20px_60px_var(--shadow-outer-light)]
          flex justify-between items-center
        "
      >
        <div className="w-full">
          <h1 className="text-4xl font-bold text-body-text">
            Hi, I’m <span className="text-primary">Rushitaben Vachhani</span>
          </h1>

          <p className="mt-4 text-text-secondary text-lg leading-relaxed">
            Master’s candidate in <strong>Computer Software Engineering (GPA 3.94)</strong> with 5+ years of industry experience building scalable SaaS applications and backend systems using Java, Spring Boot, and Hibernate. Strong foundation in Data Structures, OOP, RESTful API development, and distributed systems, with hands-on experience architecting HIPAA-compliant, production-grade applications. Proven ability to design, optimize, and debug high-performance client-server architectures while collaborating in Agile environments. Passionate about backend engineering, system design, and building secure, reliable, and scalable Java-based services that drive measurable product impact.
          </p>

          {/* <p className="mt-2 text-text-secondary text-lg">
            Actively seeking <span className="text-primary font-semibold">Software Engineering / Data / ML Internships</span>.
          </p> */}

          <Link
            href="/experience"
            className="mt-8 px-8 py-4 rounded-full font-bold text-primary
              bg-body-bg
              shadow-[6px_6px_12px_var(--shadow-outer-dark),_-6px_-6px_12px_var(--shadow-outer-light)]
              hover:shadow-[inset_4px_4px_8px_var(--shadow-inner-dark),inset_-4px_-4px_8px_var(--shadow-inner-light)]
              active:scale-95 transition-all duration-300 inline-block
            "
          >
            My Experience
          </Link>
        </div>

        {/* Homepage image*/}
        {/* <Image
          src="/profile.png"
          alt="Profile photo"
          width={320}
          height={320}
          className="rounded-xl"
        /> */}
      </div>

      {/* METRICS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 mb-16">
        <Metric title="Years of Experience" value="5+" />
        <Metric title="Academic & Industry Projects" value="10+" />
        <Metric title="Technologies Used" value="5+" />
        <Metric title="Hackathons & Awards" value="3" />
      </div>

      {/* SERVICES / FOCUS AREAS */}
      <h2 className="text-2xl font-bold mt-12 mb-8 text-body-text">
        What I Work On
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10">
        <ServiceCard
          title="Full-Stack Development"
          description="Building scalable web applications using React, React Native, Flutter, TypeScript, Node.js, Java, Spring Boot, Kotlin, Swift, Dart and REST APIs."
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
      <div
        className="
          w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center
          bg-body-bg
          shadow-[inset_5px_5px_10px_var(--shadow-inner-dark),inset_-5px_-5px_10px_var(--shadow-inner-light)]
        "
      >
        <h3 className="text-3xl font-bold text-primary">{value}</h3>
      </div>
      <p className="text-text-secondary text-sm font-medium">{title}</p>
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
    <div
      className="
        rounded-[2rem] p-8
        bg-body-bg
        shadow-[10px_10px_20px_var(--shadow-outer-dark),_-10px_-10px_20px_var(--shadow-outer-light)]
        hover:-translate-y-2 transition-transform duration-300
      "
    >
      <h3 className="text-lg font-bold text-primary mb-3">{title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
