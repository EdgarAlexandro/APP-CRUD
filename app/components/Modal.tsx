import classes from "./../css/Modal.module.css";

//Componente que carga la tarjeta donde se muestra el error
export default function Modal(props: { onClick: () => void; error: string }) {
  function closeHandler() {
    props.onClick();
  }
  return (
    <div className={classes.modal}>
      <p>{props.error}</p>
      <button className={classes.btn} onClick={closeHandler}>
        OK
      </button>
    </div>
  );
}
