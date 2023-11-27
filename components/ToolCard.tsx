import Link from "next/link";

export default function ToolCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <div className="flex flex-col items-start justify-center gap-6 rounded-lg bg-slate-800 p-6 shadow hover:bg-slate-700 transition ease-in-out duration-300">
        <h1 className="text-center text-2xl font-bold">{title}</h1>
        <p className="text-center text-lg">{description}</p>
      </div>
    </Link>
  );
}
