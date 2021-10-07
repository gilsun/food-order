import React from "react";
import mealsImage from "../../assets/meals.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

export default function header(props) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Measls</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="a table full of delicious food" />
      </div>
    </React.Fragment>
  );
}
