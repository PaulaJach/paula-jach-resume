import { hobby } from "../../../assets/data/AsideContentInformation";
import AsideDetailContainer from "../../UI/AsideDetailContainer";

const Hobby = () => {
  return (
    <AsideDetailContainer>
      <h5>HOBBY</h5>
      {hobby.map((hobby, id) => (
        <li key={id}>{hobby}</li>
      ))}
    </AsideDetailContainer>
  );
};

export default Hobby;
