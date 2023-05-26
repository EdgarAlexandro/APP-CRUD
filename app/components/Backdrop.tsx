import classes from "./../css/Backdrop.module.css";

//Componente para mostrar la pantalla "oscura" cuando se muestra la tarjeta de error
export default function Backdrop(props: { onClick: () => void }) {
  return <div className={classes.backdrop} onClick={props.onClick} />;
}
