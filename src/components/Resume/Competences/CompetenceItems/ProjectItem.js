import styled from "styled-components";
import CompetenceItemContainer from "../../../UI/CompetenceItemContainer";
import { setColor } from "../../../../styles";

const StyledDescription = styled.div`
  font-weight: bold;
  display: inline-block;
  color: ${setColor.headingColor};
  margin-bottom: 0.2rem;
  button {
    display: inline-block;
  }
`;

const StyledButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  button {
    width: 3rem;
    margin-left: 0.5rem;
    padding: 0.2rem 0.4rem;
    border-radius: 1rem;
    font-size: 0.7rem;
    a {
      color: ${setColor.primaryColor};
    }
    :hover {
      transform: scale(1.2);
      transition: background-color 0.7s ease 0s;
      background-color: ${setColor.headingColor};
    }

    @media print {
      padding: 0.1rem 0.2rem;
    }
  }
`;

const ProjectItem = ({ project }) => {
  const { name, description, tech, github, live } = project;

  return (
    <CompetenceItemContainer>
      <StyledDescription>
        {name} - {description}
      </StyledDescription>
      <StyledButtons>
        <p>Technologies: {tech}</p>
        <div>
          <button>
            <a href={github} target="_blank" rel="noreferrer">
              github
            </a>
          </button>
          <button>
            <a href={live} target="_blank" rel="noreferrer">
              live
            </a>
          </button>
        </div>
      </StyledButtons>
    </CompetenceItemContainer>
  );
};

export default ProjectItem;
