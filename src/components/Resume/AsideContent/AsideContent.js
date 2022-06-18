import Contact from "./Contact";
import Skills from "./Skills";
import Highlights from "./Highlights";
import Languages from "./Languages";
import Hobby from "./Hobby";
import AsideContainer from "../../UI/AsideContainer";

const AsideContent = () => {
  return (
    <AsideContainer>
      <Contact />
      <Skills />
      <Highlights />
      <Languages />
      <Hobby />
    </AsideContainer>
  );
};

export default AsideContent;
