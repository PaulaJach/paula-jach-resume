import styled from "styled-components";

const AsideWrapper = styled.aside`
  padding: 1rem;
  width: 290px;
  display: flex;
  flex-direction: column;
  background: radial-gradient(
    circle,
    rgba(241, 241, 245, 0.9850533963585434) 0%,
    rgba(255, 255, 255, 1) 100%
  );
`;

const AsideContainer = (props) => {
  return <AsideWrapper>{props.children}</AsideWrapper>;
};

export default AsideContainer;
