import styled from "styled-components";
import CompetenceItemContainer from "../../../UI/CompetenceItemContainer";

const WorkItemList = styled.ul`
  padding: 0.5rem;
`;

const WorkItem = ({ work }) => {
  const { date, company, position, responsibilities } = work;

  return (
    <WorkItemList>
      <h4>
        {date} - {company} - {position}
      </h4>
      {responsibilities.map((responsibility, index) => (
        <CompetenceItemContainer key={index}>
          {responsibility}
        </CompetenceItemContainer>
      ))}
    </WorkItemList>
  );
};

export default WorkItem;
