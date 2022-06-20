import { skills } from "../../../assets/data/AsideContentInformation";
import AsideDetailContainer from "../../UI/AsideDetailContainer";

const Skills = () => {
  return (
    <AsideDetailContainer>
      <h5>Technologies I use:</h5>
      {skills.map((skill, id) => (
        <li key={id}>
          <p>{skill}</p>
        </li>
      ))}
    </AsideDetailContainer>
  );
};

export default Skills;
