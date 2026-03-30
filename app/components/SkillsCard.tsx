import Image from "next/image";

type SkillCardProps = {
  title: string;
  icon: string;
  technologies: string[];
};

export default function SkillsCard({ title, icon, technologies }: SkillCardProps) {
  return (
    <div className="bg-[#0D1117] border border-[#21262d] rounded-xl p-6 flex flex-col items-center text-center hover:border-[#00FFB3]/40 transition-colors duration-300">
      <div className="mb-4 p-3 bg-[#161B22] rounded-lg">
        <Image src={icon} alt={title} width={36} height={36} />
      </div>

      <h3 className="text-base font-semibold text-white mb-4">{title}</h3>

      <div className="flex flex-wrap gap-2 justify-center">
        {technologies.map((tech, i) => (
          <span key={i} className="skill-pill">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
