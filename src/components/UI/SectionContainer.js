import styled from "styled-components";
import { setFont, setColor } from "../../styles";

const SectionWrapper = styled.section`
  ${setFont.main};
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const SectionContainer = (props) => {
  return <SectionWrapper>{props.children}</SectionWrapper>;
};

export default SectionContainer;
