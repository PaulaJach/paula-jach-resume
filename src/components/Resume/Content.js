import styled from "styled-components";
import AsideContent from "./AsideContent";
import MainContent from "./MainContent";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Content = () => {
  return (
    <ContentWrapper>
      <AsideContent />
      <MainContent />
    </ContentWrapper>
  );
};

export default Content;
