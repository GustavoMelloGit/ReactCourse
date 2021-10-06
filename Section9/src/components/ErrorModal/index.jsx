import React from "react";
import ReactDOM from "react-dom";
import styles from "./ErrorModal.module.css";
import Card from "../Card";
import Button from "../Button";

const Overlay = (props) => {
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
};

export default function ErrorModal(props) {
  if (props.showModal) {
    return ReactDOM.createPortal(
      <Overlay
        onClick={props.onClick}
        title={props.title}
        message={props.message}
      />,
      document.getElementById("overlay-root")
    );
  } else return null;
}
