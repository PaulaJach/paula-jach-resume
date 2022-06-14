import styled from "styled-components";
import { setFont, setColor } from "../../styles";
import cv_img from "../../assets/images/cv_img.jpg";

const HeaderWrapper = styled.header`
  margin: 40px;
  display: flex;
`;

const Title = styled.h1`
  ${setColor.primaryColor};
  font-size: 30px;
  ${setFont.slanted};
`;

const SubTitle = styled.h2`
  color: blue;
`;

const ImgWrapper = styled.div`
  height: 150px;
  border-radius: 5px solid black;
  .img {
    width: 160px;
    height: 200px;
    border-radius: 10px;
  }
`;

const Description = styled.section`
  text-align: justify;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <ImgWrapper>
        <img src={cv_img} className="img" />
      </ImgWrapper>

      <Description>
        <Title>Paula Jach</Title>
        <SubTitle>Frontend Developer</SubTitle>
        <p>
          I am looking for a job as a Frontend Developer. I am very motivated to
          improve my programming skills. I am a fast learner and I feel
          comfortable working in a group.
        </p>
      </Description>
    </HeaderWrapper>
  );
};

export default Header;
