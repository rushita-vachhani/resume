type EducationItemProps = {
  year: string;
  title: string;
  institution: string;
  description: string;
};

export default function EducationItem({
  year,
  title,
  institution,
  description,
}: EducationItemProps) {
  return (
    <div className="relative pl-10">
      {/* Connector Dot */}
      <span className="absolute left-[-45px] top-8 w-4 h-4 rounded-full bg-primary border-4 border-body-bg z-10" />

      <div className="card hover:scale-[1.02] transition-transform duration-300">
        <span className="inline-block px-3 py-1 text-xs font-bold tracking-wide text-primary-hover bg-primary/10 rounded-full mb-2">{year}</span>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-md text-gray-700 dark:text-gray-300 font-medium mb-2">
          {institution}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
