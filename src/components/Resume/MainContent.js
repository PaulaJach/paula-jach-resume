import styled from "styled-components";
import SectionContainer from "../UI/SectionContainer";
import { experience } from "../../assets/data/ExperienceData";
import { projects } from "../../assets/data/ProjectsData";
import { educationData } from "../../assets/data/EducationData";
import ProjectItem from "./Competences/CompetenceItems/ProjectItem";
import WorkItem from "./Competences/CompetenceItems/WorkItem";
import EducationItem from "./Competences/CompetenceItems/EducationItem";
import { setColor } from "../../styles";

const CompetenceHeading = styled.h3`
  position: relative;
  left: 1rem;
  padding-bottom: 5px;
  color: ${setColor.primaryColor};
  text-transform: uppercase;
`;

const SectionContent = styled.div`
  position: relative;
  left: 1rem;
  width: 90%;
`;

const experienceItem = experience.map((experience) => (
  <WorkItem key={experience.id} work={experience} />
));
const projectItem = projects.map((project) => (
  <ProjectItem key={project.id} project={project} />
));

const educationItem = educationData.map((education) => (
  <EducationItem key={education.id} education={education} />
));

const makeSectionItem = (sectionName) => {
  switch (sectionName) {
    case "work experience":
      return experienceItem;
    case "projects":
      return projectItem;
    case "education":
      return educationItem;
    default:
      return false;
  }
};

const MainContent = ({ competence }) => {
  const { sectionName, sectionHeader } = competence;
  return (
    <div>
      <SectionContainer>
        <CompetenceHeading>{sectionHeader}</CompetenceHeading>
        <SectionContent>{makeSectionItem(sectionName)}</SectionContent>
      </SectionContainer>
    </div>
  );
};

export default MainContent;
