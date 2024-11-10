import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import clsx from "clsx";

import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";

import EditForm from "../EditForm/EditForm";

import css from "./Contact.module.css";

import { deleteContact } from "../../redux/contacts/operations";
import { setUpdatingContact } from "../../redux/contacts/slice";
import { selectCurrentUpdating } from "../../redux/contacts/selectors";

function Contact({ contact }) {
  const dispatch = useDispatch();
  const currentUpdatingContact = useSelector(selectCurrentUpdating);

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
    dispatch(setUpdatingContact(contact));
  };

  return (
    <div>
      {currentUpdatingContact !== null &&
      currentUpdatingContact.id === contact.id ? (
        <EditForm />
      ) : (
        <div className={css.contact}>
          <div>
            <p>
              <IoPerson className={css.icon} />
              {contact.name}
            </p>
            <p>
              <FaPhone className={css.icon} />
              {contact.number}
            </p>
          </div>
          <div className={css.btnWrapper}>
            <button
              className={clsx(css.button, css.editBtn)}
              type="button"
              onClick={handleUpdateClick}
            >
              <FiEdit3 className={css.buttonIcon} />
            </button>
            <button
              className={clsx(css.button, css.deleteBtn)}
              type="button"
              onClick={handleDeleteClick}
            >
              <MdDeleteOutline className={css.buttonIcon} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
