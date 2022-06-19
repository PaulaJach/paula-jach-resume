import { languages } from "../../../assets/data/AsideContentInformation";
import AsideDetailContainer from "../../UI/AsideDetailContainer";

const Languages = () => {
  return (
    <AsideDetailContainer>
      <h4>Languages</h4>
      {languages.map((language, id) => (
        <li key={id}>{language}</li>
      ))}
    </AsideDetailContainer>
  );
};

export default Languages;
