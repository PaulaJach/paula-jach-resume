const EducationItem = ({ education }) => {
  const { date, school, degree, branch, specialization } = education;

  let spec = <p></p>;
  if (specialization !== "") {
    spec = <p>Specialization: {specialization}</p>;
  }

  return (
    <li>
      <h4>
        {date} - {school}
      </h4>
      <p>Degree: {degree}</p>
      <p>Branch of study: {branch}</p>
      {spec}
    </li>
  );
};

export default EducationItem;
