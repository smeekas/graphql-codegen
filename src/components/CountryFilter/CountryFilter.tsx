import React, { useEffect, useState } from "react";
import styles from "./CountryFilter.module.css";
type filterType = {
  onSearch: (arg0: string) => void;
};
function CountryFilter(props: filterType) {
  const [searchWord, setSearchWord] = useState("");
  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchWord(e.target.value);
  };
  useEffect(() => {
    const to = setTimeout(() => {
        console.log("HERE");
        props.onSearch(searchWord);
    }, 300);
    return () => {
      clearTimeout(to);
    };
  }, [props, searchWord]);
  return (
    <div className={styles.filter}>
      <div>
        Search: </div> <input className={styles.input} value={searchWord} onChange={changeHandler} type="text" />
    </div>
  );
}

export default CountryFilter;
