import List from "./List";
import Section from "./Section";
import { Heart } from 'lucide-react';

const Hobbies = () => {
  const hobbies = ["Photography", "Hiking", "Playing guitar", "Reading sci-fi novels"];
  return <Section icon={<Heart />} sectionTitle="Hobbies & Interests">
    <List items={hobbies}/>
  </Section>
}

export default Hobbies;