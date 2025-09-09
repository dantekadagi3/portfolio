import Image from "next/image";

type SkillCardProps = {
  title: string;
  icon: string; // path to image
  technologies: string[];
};

export default function SkillsCard({ title, icon, technologies }: SkillCardProps) {
  return (
    <div className="bg-[#0D1117] rounded-xl shadow-md p-6 flex flex-col items-center text-center max-w-xs">
      {/* Icon */}
      <div className="mb-4">
        <Image src={icon} alt={title} width={40} height={40} />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-[var(--foreground)]">
        {title}
      </h3>

      {/* Technologies */}
      <p className="mt-2 text-sm text-gray-400">
        {technologies.join(", ")}
      </p>
    </div>
  );
}
