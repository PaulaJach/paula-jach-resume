import { contactData } from "../../../assets/data/ContactData";

const Contact = () => {
  return (
    <div>
      <h4>CONTACT</h4>
      {contactData.map((contact, id) => (
        <li key={id}>
          <h5>{contact.name}</h5>
          <p>{contact.value}</p>
        </li>
      ))}
    </div>
  );
};

export default Contact;
