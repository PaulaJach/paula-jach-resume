import MainContent from "../MainContent";


const Competences = () => {
  const competences = [
    {
      sectionName: "work experience",
      sectionHeader: "Proffesional experience",
    },
    {
      sectionName: "projects",
      sectionHeader: "Created projects",
    },

    {
      sectionName: "education",
      sectionHeader: "Education",
    },
  ];

  return (
    <div>
      {competences.map((competence, id) => (
        <MainContent key={id} competence={competence} />
      ))}
    </div>
  );
};
export default Competences;
