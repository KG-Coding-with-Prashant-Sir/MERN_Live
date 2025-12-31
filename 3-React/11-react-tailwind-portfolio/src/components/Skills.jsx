import Pill from "./Pill";
import Section from "./Section";
import { Code } from 'lucide-react';

const Skills = () => {
  const skillTitles = ["JavaScript", "React", "Node.js", "Python", "SQL", "Git", "AWS", "Docker"];
  return <Section icon={<Code />} sectionTitle="Skills">
    {skillTitles.map(title => <Pill key={title} title={title} />)}
  </Section>
}

export default Skills;