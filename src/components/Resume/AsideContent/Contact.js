import styled from "styled-components";
import { contactData } from "../../../assets/data/ContactData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneVolume,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const ContactWrapper = styled.li`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;

  span {
    padding: 0.2rem;
    width: 30px;
    margin-right: 5px;
  }
  a {
    font-weight: bold;
    color: black;
    font-size: 0.9rem;
    padding: 0.2rem;
    align-items: left;
    :visited {
      color: black;
    }
  }
`;

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
          <ContactWrapper key={id}>
            <a href={href} target="_blank">
              <span>{icon}</span>
              {value}
            </a>
          </ContactWrapper>
        );
      })}
    </div>
  );
};

export default Contact;
