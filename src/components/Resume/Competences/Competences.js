import MainContent from "../MainContent";


const Competences = () => {
  const competences = [
    {
      sectionName: "work experience",
      sectionHeader: "Proffesional experience",
    },
    {
      sectionName: "projects",
      sectionHeader: "Selected projects",
    },

    {
      sectionName: "education",
      sectionHeader: "Education",
    },
  ];

  return (
    <main>
      {competences.map((competence, id) => (
        <MainContent key={id} competence={competence} />
      ))}
    </main>
  );
};
export default Competences;
