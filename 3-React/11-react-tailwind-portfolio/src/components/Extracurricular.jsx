import List from "./List";
import Section from "./Section";
import { Award } from "lucide-react";

const Extracurricular = () => {
  const curricularItems = [
    "Volunteer at local coding bootcamp for underprivileged youth",
    "Organizer of city-wide hackathon event",
    "Member of the University Chess Club",
  ];
  return (
    <Section
      icon={<Award />}
      sectionTitle="Extracurricular Activities"
    >
      <List items={curricularItems}/>
    </Section>
  );
};

export default Extracurricular;
