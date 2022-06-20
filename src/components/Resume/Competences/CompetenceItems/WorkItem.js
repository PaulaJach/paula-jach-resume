import styled from "styled-components";
import CompetenceItemContainer from "../../../UI/CompetenceItemContainer";

const WorkItemList = styled.ul`
  padding: 0 0.5rem;
  margin-bottom: 1rem;
  @media print {
    margin-bottom: 0.2rem;
  }
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
