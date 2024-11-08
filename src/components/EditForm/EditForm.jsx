import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

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
          <p>
            <IoPerson />
            <Field type="text" name="name" placeholder="enter name" />
            <ErrorMessage
              className={css.errorMessage}
              name="name"
              component="span"
            />
          </p>
          <p>
            <FaPhone />
            <Field type="text" name="number" placeholder="enter number" />
            <ErrorMessage
              className={css.errorMessage}
              name="number"
              component="span"
            />
          </p>
        </div>

        <button className={css.button} type="submit">
          Confirm
        </button>
        <button
          className={css.button}
          type="button"
          onClick={handleDiscardClick}
        >
          Discard
        </button>
      </Form>
    </Formik>
  );
};

export default EditForm;
