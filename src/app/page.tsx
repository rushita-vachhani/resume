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
            I’m a software engineer with 5+ years of industry experience across backend services, web applications, and mobile products, currently completing an internship at SAP. My work spans Java, Spring Boot, Node.js, and TypeScript, with a focus on reliable APIs, database performance, and maintainable software. At SAP, I’m building full-stack audit capabilities that help teams track changes and safely manage updates. I’m pursuing an M.S. in Computer Software Engineering at Northeastern University, with expected graduation in April 2027. 
          </p>

          <p className="mt-2 text-text-secondary text-lg">
             <span className="text-primary font-semibold">Software Engineer · Full-Stack (Backend + Frontend) · Graduating April 2027</span>.
          </p>

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
      <section aria-label="Career at a glance" className="my-12">
        <dl className="grid grid-cols-1 gap-5 min-[600px]:grid-cols-2 min-[1280px]:grid-cols-4">
          <Metric title="Years of Experience" value="5+" icon="briefcase" />
          <Metric title="Current Internship" value="SAP" icon="building" />
          <Metric title="Expected M.S. Graduation" value="Apr 2027" icon="mortarboard" />
          <Metric title="Engineering Focus" value="Full-Stack & Backend" icon="code-slash" compact />
        </dl>
      </section>

      {/* SERVICES / FOCUS AREAS */}
      <h2 className="text-2xl font-bold mt-12 mb-8 text-body-text">
        Engineering Expertise
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10">
        <ServiceCard
          title="Backend Engineering & APIs"
          description="I build backend services and REST APIs using Java, Spring Boot, and Node.js. My experience includes healthcare platform development, role-based access control, and modernizing legacy services into modular components."
        />
        <ServiceCard
          title="Full-Stack Web Development"
          description="At SAP, I develop audit features using Nuxt 3, NestJS, and TypeScript. My work includes change tracking, readable change histories, server-side search, pagination, and reusable UI components."
        />
        <ServiceCard
          title="Databases & Data Integrity"
          description="I work with relational database design, SQL, indexing, and transaction behavior. As a database teaching assistant at Northeastern, I reviewed student schemas and queries and helped diagnose concurrency issues."
        />
        <ServiceCard
          title="Software Design & Maintainability"
          description="I design modular services and reusable components with clear responsibilities. My work includes backend modernization and consolidating multiple SAP audit views into a shared component for consistent behavior and easier maintenance."
        />
        <ServiceCard
          title="Production Reliability & Security"
          description="I troubleshoot API failures and improve monitoring and logging. My experience includes reducing production incidents in a healthcare platform and implementing optimistic locking, input validation, and controlled field updates at SAP."
        />
        <ServiceCard
          title="Mobile Application Development"
          description="I develop Android, iOS, and React Native applications, with experience on products including KukuFM. My work includes third-party integrations, crash monitoring, analytics, and notifications to support application stability."
        />
      </div>
    </div>
  );
}

/* ---------- Components ---------- */

function Metric({ title, value, icon, compact = false }: {
  title: string;
  value: string;
  icon: string;
  compact?: boolean;
}) {
  return (
    <div className="flex min-w-0 flex-col rounded-3xl border border-sidebar-border bg-body-bg p-6 shadow-[8px_8px_20px_var(--shadow-outer-dark),_-8px_-8px_20px_var(--shadow-outer-light)]">
      <dt className="flex min-h-10 items-center gap-3 text-sm font-medium leading-5 text-text-secondary">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-lg text-body-text dark:text-primary" aria-hidden="true">
          <i className={`bi bi-${icon}`} />
        </span>
        <span>{title}</span>
      </dt>
      <dd className={`mt-5 flex min-h-16 items-center font-bold tracking-tight text-body-text dark:text-primary ${compact ? "text-2xl leading-8" : "text-4xl leading-tight tabular-nums"}`}>
        {value}
      </dd>
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
