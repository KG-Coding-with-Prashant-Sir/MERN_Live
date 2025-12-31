import Section from "../Section";
import { Briefcase } from "lucide-react";
import Project from "./Project";

const Projects = () => {
  const projectList = [
    {
      title: "E-commerce Platform",
      desc: "Developed a fully-functional e-commerce platform with user authentication, product management, and payment integration.",
      techUsed: ["React", "Node.js", "MongoDB", "Stripe"],
    },

    {
      title: "Social Media Dashboard",
      desc: "Created a responsive dashboard for social media analytics, featuring real-time data visualization and reporting.",
      techUsed: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    },
  ];

  return (
    <Section icon={<Briefcase />} sectionTitle="Projects">
      {projectList.map(project => <Project title={project.title} desc={project.desc} techUsed={project.techUsed}/>)}
    </Section>
  );
};

export default Projects;
