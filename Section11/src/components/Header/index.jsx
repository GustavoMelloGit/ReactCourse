import React from "react";
import HeaderButton from "../HeaderButton";
import styles from "./Header.module.css";

export default function Header(props) {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderButton onOpenCart={props.onOpenCart} />
      </header>
      <div className={styles.main_image}>
        <img
          src="https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/extra-files/meals.jpg?raw=true"
          alt="meal"
        />
      </div>
    </>
  );
}
