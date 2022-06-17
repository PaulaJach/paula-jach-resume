const ProjectItem = ({ project }) => {
  const { name, description, tech, github, live } = project;

  return (
    <li>
      <h3>
        {name} - {description}
      </h3>
      <p>{tech}</p>
      <p>{github}</p>
    </li>
  );
};

export default ProjectItem;
