import React from "react";
import styles from "./ErrorModal.module.css";
import Card from "../Card";
import Button from "../Button";

export default function ErrorModal(props) {
  if (props.showModal) {
    return (
      <div className={styles.backdrop} onClick={props.onClick}>
        <div className={styles.modal}>
          <Card>
            <header className={styles.header}>
              <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
              <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
              <Button text="Close" onClick={props.onClick} />
            </footer>
          </Card>
        </div>
      </div>
    );
  } else return null;
}
