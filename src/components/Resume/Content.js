import styled from "styled-components";
import Competences from "./Competences/Competences";
import AsideContent from "./AsideContent/AsideContent";
import { setColor } from "../../styles";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: ${setColor.primaryColor};
`;

const Content = () => {
  return (
    <ContentWrapper>
      <AsideContent />
      <Competences />
    </ContentWrapper>
  );
};

export default Content;
