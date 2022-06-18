const ProjectItem = ({ project }) => {
  const { name, description, tech, github, live } = project;

  return (
    <li>
      <h4>
        {name} - {description}
      </h4>
      <p>{tech}</p>
      <p>{github}</p>
    </li>
  );
};

export default ProjectItem;
