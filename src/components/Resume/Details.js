import styled from "styled-components";
import Detail from "./Detail";

import SectionContainer from "../UI/SectionContainer";

const Details = ({ title, icon, info }) => {
  return (
    <SectionContainer>
      <Detail title="Contact:" />
      <Detail title="Socials:" />
    </SectionContainer>
  );
};

export default Details;
