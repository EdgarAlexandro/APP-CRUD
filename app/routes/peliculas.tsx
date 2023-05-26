import type { V2_MetaFunction } from "@remix-run/react";
import { useEffect, useState } from "react";
import classes from "./../css/Global.module.css";
import Backdrop from "./../components/Backdrop";
import Modal from "./../components/Modal";
import { Peliculas } from "../data/interfaces";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Peliculas" }];
};

//Componente que muestra en pantalla una lista de peliculas
export default function Pelicula() {
  const [peliculasData, setPeliculasData] = useState<Peliculas[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [errorStringConst, setErrorStringConst] = useState("");
  const [needToReload, setNeedToReload] = useState(false);

  //Funcion para mostrar algún error existente al usuario
  function openModalHandler(errorString: string) {
    setErrorStringConst(errorString);
    setModalIsOpen(true);
  }

  //Función para cerrar el error (según  que haya activado el error se determina
  //si es necesario el reload de la página o no)
  function closeModalHandler(reload: boolean) {
    setModalIsOpen(false);
    if (reload) {
      window.location.reload();
    }
  }

  //Se hace la llamada a la API para traer las peliculas
  useEffect(() => {
    fetch("http://localhost:3001/peliculas")
      .then(async (response) => {
        setPeliculasData(await response.json());
      })
      .catch((error) => {
        setNeedToReload(true);
        openModalHandler(
          "No fue posible mostrar las peliculas debido a un error en la llamada a la API: " +
            error.message
        );
      });
  }, []);

  //Regresa la lista de peliculas
  return (
    <div
      className={classes.mainContainer + " container"}
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
    >
      <ul>
        {peliculasData.map((pelicula) => (
          <li key={pelicula.id}>
            <div>Titulo: {pelicula.titulo}</div>
            <div>Director: {pelicula.director}</div>
            <div>Duración: {pelicula.duracion_minutos}</div>
            <div>Género: {pelicula.id_genero}</div>
            <div>Fecha de creación: {pelicula.createdAt}</div>
            <div>Fecha de actualización: {pelicula.updatedAt}</div>
            <br />
          </li>
        ))}
      </ul>
      {modalIsOpen && (
        <Modal
          onClick={() => closeModalHandler(needToReload)}
          error={errorStringConst}
        />
      )}
      {modalIsOpen && (
        <Backdrop onClick={() => closeModalHandler(needToReload)} />
      )}
    </div>
  );
}
