import { skills } from "../../../assets/data/AsideContentInformation";

const Skills = () => {
  return (
    <div>
      <h4>Technologies I use:</h4>
      {skills.map((skill, id) => (
        <li key={id}>
          <p>{skill}</p>
        </li>
      ))}
    </div>
  );
};

export default Skills;
