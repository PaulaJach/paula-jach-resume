import styled from "styled-components";
import Header from "./Header";

const Wrapper = styled.div`
  position: relative;
  top: 40px;
  margin: 0 auto 30px;
  width: 820px;
  background-color: #fff;
  box-shadow: 5px 7px 10px 4px #ccc;
  display: flex;
  flex-direction: column;
`;

const CvContainer = () => {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
};

export default CvContainer;
