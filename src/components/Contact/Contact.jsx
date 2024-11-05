import { useDispatch } from "react-redux";

import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

import css from "./Contact.module.css";

import { deleteContact } from "../../redux/contactsOps";

function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.contact}>
      <div>
        <p>
          <FaPhone />
          {contact.name}
        </p>
        <p>
          <IoPerson />
          {contact.number}
        </p>
      </div>
      <button className={css.button} type="button" onClick={handleClick}>
        Delete
      </button>
    </div>
  );
}

export default Contact;
