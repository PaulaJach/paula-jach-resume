import styled from "styled-components";


const AsideWrapper = styled.aside`
  display: flex;
  flex-direction: column;
`;

const AsideContent = () => {
  return (
    <AsideWrapper>
      <div>Contact details</div>
      <div>Technology Stack</div>
      <div>Personality Highlights</div>
      <div>Foreign languages</div>
      <div>Hobby</div>
    </AsideWrapper>
  );
};
export default AsideContent;