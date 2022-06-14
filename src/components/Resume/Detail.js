import styled from "styled-components";

const DetailWrapper = styled.li``;

const Detail = ({ title, icon, info }) => {
  return (
    <DetailWrapper>
      <h3>{title}</h3>
      <h2>{icon}</h2>
      <h3>{info}</h3>
    </DetailWrapper>
  );
};

export default Detail;
