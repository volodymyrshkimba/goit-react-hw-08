import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";

import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import Loader from "../../components/Loader/Loader";

import css from "./ContactsPage.module.css";
import { Toaster } from "react-hot-toast";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.pageWrapper}>
      <Toaster />
      <p className={css.title}>Phonebook</p>
      <div className={css.mainContentWrapper}>
        <div className={css.leftSide}>
          <ContactForm />
          <SearchBox />
        </div>
        <div className={css.rightSide}>
          {loading && (
            <div className={css.loader}>
              <Loader w={60} h={60} />
            </div>
          )}

          {!error ? <ContactList /> : <div>ERROR</div>}
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
