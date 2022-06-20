import styled from "styled-components";

const AsideDetailContainer = styled.ul`
  margin-bottom: 0.4rem;
  li {
    padding: 0.1rem;
    margin-left: 1rem;
    list-style-type: circle;
    font-size: 0.9rem;
    @media print {
      padding: 0;
    }
  }
`;

export default AsideDetailContainer;
