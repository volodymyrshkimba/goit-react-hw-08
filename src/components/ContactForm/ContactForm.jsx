import { useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { MdOutlineContactPhone } from "react-icons/md";

import css from "./ContactForm.module.css";

import { addContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
});

function ContactForm() {
  const userNameId = useId();
  const userTelId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values)).then(() => {
      toast.success("Contact added successfully!", {
        icon: <MdOutlineContactPhone size={30} />,
        position: "top-right",
      });
    });
    actions.resetForm();
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
        <p className={css.title}>Add Contact</p>
        <div className={css.inputWrapper}>
          <label htmlFor={userNameId}>Name</label>
          <Field
            type="text"
            name="name"
            id={userNameId}
            placeholder="Jonh Doe"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="name"
            component="span"
          />
        </div>
        <div className={css.inputWrapper}>
          <label htmlFor={userTelId}>Number</label>
          <Field
            type="tel"
            name="number"
            id={userTelId}
            placeholder="+XXX (XX) XXX-XXXX"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="number"
            component="span"
          />
        </div>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
