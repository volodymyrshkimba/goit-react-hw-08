import { MdAccountBox } from "react-icons/md";
import { MdAddBox } from "react-icons/md";
import { BsFillFilterSquareFill } from "react-icons/bs";

import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.pageWrapper}>
      <div className={css.container}>
        <h1 className={css.title}>
          Welcome to, <span className={css.titleLogo}>myContacts</span>
        </h1>
        <p className={css.descr}>
          Is a web application that allows you to create your own digital phone
          book, store important contacts, and quickly find the necessary
          information. With its user-friendly interface
        </p>
        <ul className={css.list}>
          <li>
            <MdAccountBox className={css.itemIcon} />
            Register your phone book: Create an account and start saving
            contacts directly on the site.
          </li>
          <li>
            <MdAddBox className={css.itemIcon} />
            Add, edit, and delete contacts: Easily add new entries, edit
            existing ones, or delete unnecessary contacts.
          </li>
          <li>
            <BsFillFilterSquareFill className={css.itemIcon} />
            Search and filter contacts: Quickly find the information you need
            using the search and filter features.
          </li>
          <li>
            Store all data securely: All contacts are stored in one place and
            are accessible at any time after logging into your account.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
