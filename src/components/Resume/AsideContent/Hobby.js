import { hobby } from "../../../assets/data/AsideContentInformation";

const Hobby = () => {
  return (
    <div>
      <h4>HOBBY</h4>
      {hobby.map((hobby, id) => (
        <li key={id}>{hobby}</li>
      ))}
    </div>
  );
};

export default Hobby;
