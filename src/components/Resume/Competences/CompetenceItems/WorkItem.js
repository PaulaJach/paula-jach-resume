import styled from "styled-components";

const WorkItem = ({ work }) => {
  const { date, company, position, responsibilities } = work;

  return (
    <li>
      <h3>
        {date} - {company}
      </h3>
      <p>{position}</p>
    </li>
  );
};

export default WorkItem;
