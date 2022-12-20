import React from "react";
import styles from "./Country.module.css";
import { useNavigate } from "react-router-dom";
type CountryPropsType = {
  name: string;
  code: string;
};
function Country(props: CountryPropsType) {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/${props.code}`);
  };
  return (
    <div onClick={clickHandler} className={styles.country}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={`https://flagcdn.com/${props.code.toLowerCase()}.svg`}
          alt={props.code}
        />
      </div>
      <div className={styles.countryName}>
        {" "}
        <h3>{props.name}</h3>
      </div>
    </div>
  );
}

export default Country;
