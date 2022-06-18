import { languages } from "../../../assets/data/AsideContentInformation";

const Languages = () => {
  return (
    <div>
      <h4>Languages</h4>
      {languages.map((language, id) => (
        <li key={id}>{language}</li>
      ))}
    </div>
  );
};

export default Languages;
