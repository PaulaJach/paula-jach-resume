import styled from "styled-components";


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
        <li key={index}>- {responsibility}</li>
      ))}
    </WorkItemList>
  );
};

export default WorkItem;
