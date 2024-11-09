import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";
import * as Yup from "yup";
import clsx from "clsx";

import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

import css from "./EditFrom.module.css";

import { updateContact } from "../../redux/contacts/operations";
import { discardUpdating } from "../../redux/contacts/slice";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const EditForm = ({ contact }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    if (values.name === contact.name || values.number === contact.number) {
      return;
    }
    dispatch(updateContact({ ...contact, ...values }));
  };

  const handleDiscardClick = () => {
    dispatch(discardUpdating());
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <div>
          <div className={css.inputWrapper}>
            <IoPerson />
            <Field type="text" name="name" placeholder="enter name" />
            <ErrorMessage
              className={css.errorMessage}
              name="name"
              component="span"
            />
          </div>
          <div className={css.inputWrapper}>
            <FaPhone />
            <Field type="text" name="number" placeholder="enter number" />
            <ErrorMessage
              className={css.errorMessage}
              name="number"
              component="span"
            />
          </div>
        </div>

        <button className={clsx(css.button, css.confirmBtn)} type="submit">
          <IoMdCheckmark className={css.buttonIcon} />
        </button>
        <button
          className={clsx(css.button, css.closeBtn)}
          type="button"
          onClick={handleDiscardClick}
        >
          <IoMdClose className={css.buttonIcon} />
        </button>
      </Form>
    </Formik>
  );
};

export default EditForm;
