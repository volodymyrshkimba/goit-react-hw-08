import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";

import css from "./Contact.module.css";

import { deleteContact } from "../../redux/contacts/operations";

function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    toast(
      (t) => (
        <div>
          <p>
            Do you really want to delete <b>{contact.name}</b>?
          </p>
          <button
            onClick={() => {
              dispatch(deleteContact(contact.id)).then(() => {
                toast.success("Successfully deleted!", {
                  icon: <MdDeleteOutline size={30} />,
                  position: "top-right",
                });
              });
              toast.dismiss(t.id);
            }}
          >
            Yes
          </button>
          <button onClick={() => toast.dismiss(t.id)}>No</button>
        </div>
      ),
      {
        id: "clipboard",
        position: "top-center",
        duration: Infinity,
      }
    );
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
