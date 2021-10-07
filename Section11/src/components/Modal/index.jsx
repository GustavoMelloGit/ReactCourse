import styles from "./Modal.module.css";
import ReactDom from "react-dom";

function Backdrop(props) {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
}

function Overlay(props) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}

const portalElement = document.getElementById("overlays");

export default function Modal(props) {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDom.createPortal(
        <Overlay>{props.children}</Overlay>,
        portalElement
      )}
    </>
  );
}
