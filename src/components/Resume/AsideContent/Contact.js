import styled from "styled-components";
import { contactData } from "../../../assets/data/ContactData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneVolume,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div>
      <h4>CONTACT</h4>

      {contactData.map((contact, id) => {
        const { name, value, href } = contact;

        const icon =
          (name === "telephone" && <FontAwesomeIcon icon={faPhoneVolume} />) ||
          (name === "gitHub" && <FontAwesomeIcon icon={faGithub} />) ||
          (name === "linkedIn" && <FontAwesomeIcon icon={faLinkedin} />) ||
          (name === "email" && <FontAwesomeIcon icon={faEnvelope} />) ||
          (name === "portfolio" && <FontAwesomeIcon icon={faLaptopCode} />);
        return (
          <li key={id}>
            {icon}
            <p>{name}</p>
          </li>
        );
      })}
    </div>
  );
};

export default Contact;
