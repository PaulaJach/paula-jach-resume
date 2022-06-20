import { highlights } from "../../../assets/data/AsideContentInformation";
import AsideDetailContainer from "../../UI/AsideDetailContainer";

const Highlights = () => {
  return (
    <AsideDetailContainer>
      <h5>HIGHLIGHTS</h5>
      {highlights.map((highlight, id) => (
        <li key={id}>
          <p>{highlight}</p>
        </li>
      ))}
    </AsideDetailContainer>
  );
};

export default Highlights;
