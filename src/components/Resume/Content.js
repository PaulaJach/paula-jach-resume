import styled from "styled-components";
import AsideContent from "./AsideContent";
import Competences from "./Competences/Competences";

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
