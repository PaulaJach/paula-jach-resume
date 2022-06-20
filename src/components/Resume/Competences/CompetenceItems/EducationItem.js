import CompetenceItemContainer from "../../../UI/CompetenceItemContainer";

const EducationItem = ({ education }) => {
  const { date, school, degree, branch, specialization } = education;

  let spec = <p></p>;
  if (specialization !== "") {
    spec = <p>Specialization: {specialization}</p>;
  }

  return (
    <CompetenceItemContainer>
      <h4>
        {date} - {school}
      </h4>
      <div>
        <p>
          Degree: {degree}, Branch of study: {branch}
        </p>
        {spec}
      </div>
    </CompetenceItemContainer>
  );
};

export default EducationItem;
