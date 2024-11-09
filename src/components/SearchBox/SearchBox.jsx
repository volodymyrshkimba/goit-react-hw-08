import { useDispatch, useSelector } from "react-redux";

import css from "./SearchBox.module.css";

import { selectNameFilter } from "../../redux/filters/selectors";

import { changeFilter } from "../../redux/filters/slice";

function SearchBox() {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div className={css.searchWrapper}>
      <p className={css.title}>Find contact</p>
      <input
        className={css.search}
        type="text"
        name="search"
        value={filter}
        onChange={handleChange}
        placeholder="name or phone"
      />
    </div>
  );
}

export default SearchBox;
