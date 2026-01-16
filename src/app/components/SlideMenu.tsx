import Link from "next/link";

export default function SlideMenu({ close }: { close: () => void }) {
  return (
    <div
      className="fixed right-0 top-0 h-full w-[260px] bg-card-bg text-body-text border-l border-card-border shadow-xl animate-slideLeft z-50"
    >
      <button
        className="text-right w-full py-4 pr-6 text-xl text-gray-600 dark:text-gray-400 hover:text-yellow-400"
        onClick={close}
      >
        ✕
      </button>

      <nav className="px-6 space-y-4 text-lg">
        <MenuItem href="/" label="Home" close={close} />
        <MenuItem href="/about" label="About" close={close} />
        <MenuItem href="/skills" label="Skills" close={close} />
        <MenuItem href="/education" label="Education" close={close} />
        <MenuItem href="/experience" label="Timeline & Experience" close={close} />
        <MenuItem href="/projects" label="Projects" close={close} />
      </nav>
    </div>
  );
}

function MenuItem({
  label,
  href,
  close,
}: {
  label: string;
  href: string;
  close: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={close}
      className="block py-2 text-gray-600 dark:text-gray-300 hover:text-yellow-400"
    >
      {label}
    </Link>
  );
}
