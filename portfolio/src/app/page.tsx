import Image from "next/image";

export default function Home() {
  return (
    <div className="section-container">

      {/* HERO HEADER */}
      <div
        className="bg-white border border-gray-200 dark:bg-[#242529] dark:border-[#2e2f31] rounded-xl shadow-md 
          p-10 flex justify-between items-center
        "
      >
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Discover my Amazing <span className="text-yellow-500 dark:text-yellow-400">Tech Space!</span>
          </h1>

          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
            <code className="text-yellow-500 dark:text-yellow-400">I build iOS and Android apps.</code>
          </p>

          <button className="mt-6 bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold">
            EXPLORE NOW
          </button>
        </div>

        <Image
          src="/public/profile.png"
          alt="Hero"
          width={350}
          height={350}
          className="rounded-xl"
        />
      </div>

      {/* METRICS */}
      <div className="grid grid-cols-4 gap-8 mt-10">
        <Metric title="Years Experience" value="5+" />
        <Metric title="Completed Projects" value="160+" />
        <Metric title="Happy Customers" value="75+" />
        <Metric title="Honors & Awards" value="20+" />
      </div>

      {/* SERVICES */}
      <h2 className="text-2xl font-semibold mt-12 mb-6">My Services</h2>

      <div className="grid grid-cols-3 gap-6">
        <ServiceCard title="Web Development" />
        <ServiceCard title="UI/UX Design" />
        <ServiceCard title="Sound Design" />
        <ServiceCard title="Game Design" />
        <ServiceCard title="Advertising" />
        <ServiceCard title="Photography" />
      </div>
    </div>
  );
}

function Metric({ title, value }: { title: string; value: string }) {
  return (
    <div className="text-center">
      <h3 className="text-4xl font-bold text-gray-900 dark:text-white">{value}</h3>
      <p className="text-gray-600 dark:text-gray-400">{title}</p>
    </div>
  );
}

function ServiceCard({ title }: { title: string }) {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-yellow-600 dark:text-yellow-400 mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <button className="mt-4 text-yellow-500 font-semibold">ORDER NOW →</button>
    </div>
  );
}
