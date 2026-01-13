type Props = {
  title: string;
  description: string;
  link?: string;
};

export default function ProjectCard({ title, description, link }: Props) {
  return (
    <div
      className="card-base bg-white text-gray-900 border-gray-200
                 dark:bg-darkCard dark:text-gray-50 dark:border-[#2f3033]"
    >
      <h3 className="text-lg font-semibold text-yellow-500">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
        {description}
      </p>
      {link && (
        <a
          href={link}
          target="_blank"
          className="mt-4 inline-block text-sm font-medium text-yellow-500 hover:underline"
        >
          View Project →
        </a>
      )}
    </div>
  );
}
