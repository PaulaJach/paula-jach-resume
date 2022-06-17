import styled from "styled-components";
import SectionContainer from "../UI/SectionContainer";
import { experience } from "../../assets/data/ExperienceData";
import { projects } from "../../assets/data/ProjectsData";
import { educationData } from "../../assets/data/EducationData";
import ProjectItem from "./Competences/CompetenceItems/ProjectItem";
import WorkItem from "./Competences/CompetenceItems/WorkItem";
import { setColor } from "../../styles";

const CompetenceHeading = styled.h3`
  position: relative;
  left: 4rem;
  padding-bottom: 5px;
  color: ${setColor.primaryColor};
  text-transform: uppercase;
`;

const SectionContent = styled.div`
  position: relative;
  left: 4rem;
`;

const experienceItem = experience.map((experience) => (
  <WorkItem key={experience.id} work={experience} />
));
const projectItem = projects.map((project) => (
  <ProjectItem key={project.id} project={project} />
));

const educationItem = educationData.map((education) => <li></li>);

const makeSectionItem = (sectionName) => {
  switch (sectionName) {
    case "work experience":
      return experienceItem;
    case "projects":
      return projectItem;
    // case "education":
    //   return educationItem;
    default:
      return false;
  }
};

const MainContent = ({ competence }) => {
  const { sectionName, sectionHeader } = competence;
  return (
    <main>
      <SectionContainer>
        <CompetenceHeading>{sectionHeader}</CompetenceHeading>
        <SectionContent>{makeSectionItem(sectionName)}</SectionContent>
      </SectionContainer>
    </main>
  );
};

export default MainContent;
