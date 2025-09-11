/* ProjectCard.jsx */
import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
};

export default function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
  return (
    <div className="project-card">
      <Image
        src={image}
        alt={title}
        width={400}
        height={192}
        className="w-full h-48 object-cover"
        style={{ objectFit: 'cover' }}
        priority
      />

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-[var(--foreground)]">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-400">
          {description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag: string, index: number) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-[#1f2937] text-[#00FFB3] rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        <a
          href={link}
          target='_blank'
          className="mt-4 inline-block text-[#00FFB3] font-medium hover:underline items-center gap-1"
        >
          View Project <span>→</span>
        </a>
      </div>
    </div>
  );
}
