import { languages } from "../../../assets/data/AsideContentInformation";
import AsideDetailContainer from "../../UI/AsideDetailContainer";

const Languages = () => {
  return (
    <AsideDetailContainer>
      <h5>Languages</h5>
      {languages.map((language, id) => (
        <li key={id}>{language}</li>
      ))}
    </AsideDetailContainer>
  );
};

export default Languages;
