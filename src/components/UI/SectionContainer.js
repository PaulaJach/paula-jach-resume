import styled from "styled-components";

const SectionWrapper = styled.section`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const SectionContainer = (props) => {
  return <SectionWrapper>{props.children}</SectionWrapper>;
};

export default SectionContainer;
