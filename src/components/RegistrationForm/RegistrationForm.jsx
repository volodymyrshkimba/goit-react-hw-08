import { Field, Formik, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import { register } from "../../redux/auth/operations";

import css from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  const registerSchema = Yup.object({
    name: Yup.string()
      .min(2, "At least 2 characters")
      .max(20, "Max 20 characters")
      .required("required"),
    email: Yup.string().email("Invalid email address").required("required"),
    password: Yup.string().min(8, "At least 8 characters").required("required"),
  });

  return (
    <div className={css.pageWrapper}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={registerSchema}
      >
        <Form className={css.form}>
          <label>
            <span>Username</span>
            <Field type="text" name="name" placeholder="johndoe123" />
            <ErrorMessage
              className={css.errorMessage}
              name="name"
              component="span"
            />
          </label>
          <label>
            <span>Email</span>
            <Field
              type="email"
              name="email"
              placeholder="johndoe@example.com"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="email"
              component="span"
            />
          </label>
          <label>
            <span>Password</span>
            <Field type="password" name="password" placeholder="********" />
            <ErrorMessage
              className={css.errorMessage}
              name="password"
              component="span"
            />
          </label>
          <button className={css.btn} type="submit">
            Sign Up
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
