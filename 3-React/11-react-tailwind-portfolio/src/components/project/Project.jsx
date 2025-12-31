import TechPill from "./TechPill";

const Project = ({ title, desc, techUsed }) => {
  return (
    <div className="bg-slate-100 max-w-4xl mx-auto rounded-xl shadow-lg p-6 mb-4">
      <h1 className="font-semibold text-xl mb-2">{title}</h1>
      <p className="text-gray-700 mb-4">{desc}</p>
      {techUsed.map((tech) => (
        <TechPill title={tech} />
      ))}
    </div>
  );
};

export default Project;
