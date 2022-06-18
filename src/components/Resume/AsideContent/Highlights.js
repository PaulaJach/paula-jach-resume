import { highlights } from "../../../assets/data/AsideContentInformation";

const Highlights = () => {
  return (
    <div>
      <h4>HIGHLIGHTS</h4>
      {highlights.map((highlight, id) => (
        <li key={id}>
          <p>{highlight}</p>
        </li>
      ))}
    </div>
  );
};

export default Highlights;
