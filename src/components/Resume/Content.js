import styled from "styled-components";
import Competences from "./Competences/Competences";
import AsideContent from "./AsideContent/AsideContent";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
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
