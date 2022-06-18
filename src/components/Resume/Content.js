import styled from "styled-components";
import Competences from "./Competences/Competences";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Content = () => {
  return (
    <ContentWrapper>
      <Competences />
    </ContentWrapper>
  );
};

export default Content;
