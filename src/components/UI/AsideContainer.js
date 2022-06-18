import styled from "styled-components";

const AsideWrapper = styled.aside`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const AsideContainer = (props) => {
  return <AsideWrapper>{props.children}</AsideWrapper>;
};

export default AsideContainer;
