import styled from "styled-components";
import { setColor } from "../../styles";
import cv_img from "../../assets/images/cv_img.jpg";

const HeaderWrapper = styled.header`
  margin: 30px 40px;
  display: flex;
`;

const Title = styled.h1`
  color: ${setColor.secondaryColor};
  font-size: 40px;
  letter-spacing: 0.4rem;
  text-transform: uppercase;
`;

const SubTitle = styled.h2`
  color: ${setColor.headingColor};
  letter-spacing: 0.4rem;
  margin: 0.5rem 0;
`;

const ImgWrapper = styled.div`
  height: 150px;
  border-radius: 5px solid black;
  margin-right: 20px;
  .img {
    width: 140px;
    height: 180px;
    border-radius: 10px;
  }
`;

const Description = styled.section`
  text-align: justify;
  flex-direction: column;
  color: ${setColor.primaryColor};
  font-size: 0.9rem;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <ImgWrapper>
        <img src={cv_img} className="img" alt="personal photo" />
      </ImgWrapper>
      <Description>
        <Title>Paula Jach</Title>
        <SubTitle>Frontend Developer</SubTitle>
        <p>
          I am a self-taught frontend developer. I gained my first commercial
          experience at the Web Developer position, where I was in charge of
          maintaining and improving online stores and implementing customer
          requirements. I am very motivated to improve my programming skills in
          the field of frontend development. My experience and soft skills
          acquired at jobs beyond IT branch certainly bring many positive
          aspects to the team I join.
        </p>
      </Description>
    </HeaderWrapper>
  );
};

export default Header;
