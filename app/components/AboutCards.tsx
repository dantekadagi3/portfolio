



type AboutCardProps = {
  value: number;
  description: string;
  
};

export default function AboutCard({ value, description }: AboutCardProps) {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] p-6 rounded-lg shadow-md flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-2 text-[#00FFB3]">{value}+</h2>
      <p className="text-lg text-start text-gray-500">{description}</p>
    </div>
  );
}
