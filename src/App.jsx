import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";

import css from "./App.module.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchContacts } from "./redux/contactsOps.js";
import { selectError, selectLoading } from "./redux/contactsSlice.js";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook (by redux + mockapi.io)</h1>
      <ContactForm />
      <SearchBox />
      {loading && <div className={css.loader}>LOADING...</div>}
      {!error ? <ContactList /> : <div>ERROR</div>}
    </>
  );
}

export default App;
