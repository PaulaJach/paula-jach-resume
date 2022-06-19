import { skills } from "../../../assets/data/AsideContentInformation";
import AsideDetailContainer from "../../UI/AsideDetailContainer";

const Skills = () => {
  return (
    <AsideDetailContainer>
      <h4>Technologies I use:</h4>
      {skills.map((skill, id) => (
        <li key={id}>
          <p>{skill}</p>
        </li>
      ))}
    </AsideDetailContainer>
  );
};

export default Skills;
