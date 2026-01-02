import Graduation from "./Graduation";
import Section from "./Section";
import { BookOpen } from 'lucide-react';

const Education = () => {
  return <Section icon={<BookOpen />} sectionTitle="Education">
    <Graduation title="Bachelor of Science in Computer Science" school="University of Technology" year="2015-2019"/>

    <Graduation title="Full Stack Web Development Bootcamp" school="Code Academy" year="2020"/>
  </Section>
}

export default Education;