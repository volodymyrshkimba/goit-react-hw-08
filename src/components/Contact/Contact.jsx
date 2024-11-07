import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";

import EditForm from "../EditForm/EditForm";

import css from "./Contact.module.css";

import { deleteContact } from "../../redux/contacts/operations";
import { isUpdatingContact } from "../../redux/contacts/slice";
import { selectisUpdating } from "../../redux/contacts/selectors";

function Contact({ contact }) {
  const dispatch = useDispatch();
  const updatingContact = useSelector(selectisUpdating);

  const handleDeleteClick = () => {
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

  const handleUpdateClick = () => {
    dispatch(isUpdatingContact(contact));
  };

  return (
    <div>
      {updatingContact !== null && updatingContact.id === contact.id ? (
        <EditForm contact={contact} />
      ) : (
        <div className={css.contact}>
          <div>
            <p>
              <IoPerson />
              {contact.name}
            </p>
            <p>
              <FaPhone />
              {contact.number}
            </p>
          </div>
          <div className={css.btnWrapper}>
            <button
              className={css.button}
              type="button"
              onClick={handleUpdateClick}
            >
              Edit
            </button>
            <button
              className={css.button}
              type="button"
              onClick={handleDeleteClick}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
