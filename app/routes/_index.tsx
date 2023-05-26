import { V2_MetaFunction } from "@remix-run/react";
import { useEffect, useState } from "react";
import EditarCines from "~/components/EditarCines";
import Backdrop from "./../components/Backdrop";
import Modal from "./../components/Modal";
import classes from "./../css/Global.module.css";
import { Cines } from "../data/interfaces";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Cines" }];
};

//Componente que muestra en pantalla una lista de cines
export default function Index() {
  const [cinesDataArray, setCinesData] = useState<Cines[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isClicked, setIsClicked] = useState(0);
  const [dataUpdated, setDataUpdated] = useState(false);
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

  //Se hace la llamada a la API para traer los cines en la primera carga
  // y cada que exista una actualización
  useEffect(() => {
    fetch("http://localhost:3001/cines", {
      method: "GET",
    })
      .then(async (response) => {
        setCinesData(await response.json());
      })
      .catch((error) => {
        setNeedToReload(true);
        openModalHandler(
          "No fue posible mostrar los cines debido a un error en la llamada a la API: " +
            error.message
        );
      });
  }, [dataUpdated]);

  //Realiza la llamada a la API para borrar un cine
  const handleDeleteCine = (id: number) => {
    fetch(`http://localhost:3001/cines/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        // Actualiza la lista de cines eliminando el cine con el ID correspondiente
        setDataUpdated(!dataUpdated);
      })
      .catch((error) =>
        openModalHandler(
          "No fue posible eliminar el cine debido a un error en la llamada a la API: " +
            error.message
        )
      );
  };

  const handleActualizarCines = () => {
    // Actualizar la lista de cines en caso de edición (agregar o modificar)
    setDataUpdated(!dataUpdated);
  };

  //Regresa la lista de cines
  return (
    <div className={classes.mainContainer + " container"}>
      <ul>
        <div>
          {cinesDataArray.map((cine) => (
            <div className="row" key={cine.id}>
              <div className="col-10">
                <li>
                  <div>Nombre: {cine.nombre}</div>
                  <div>Dirección: {cine.direccion}</div>
                  <div>Fecha de creación: {cine.createdAt}</div>
                  <div>Fecha de actualización: {cine.updatedAt}</div>
                  <br />
                </li>
                {isEditing && !isCreating && isClicked === cine.id && (
                  <EditarCines
                    id_cine={cine.id}
                    nombre={cine.nombre}
                    direccion={cine.direccion}
                    cinesDataArray={cinesDataArray}
                    onErrorHandler={openModalHandler}
                    onActualizarCines={handleActualizarCines}
                  />
                )}
                {isEditing && !isCreating && isClicked === cine.id && (
                  <button
                    className={classes.btnTerminar}
                    onClick={() => setIsEditing(false)}
                  >
                    Terminar
                  </button>
                )}
                {isEditing && !isCreating && isClicked === cine.id && (
                  <button
                    className={classes.btnEliminar}
                    onClick={() => (
                      handleDeleteCine(cine.id), setIsEditing(false)
                    )}
                  >
                    Eliminar
                  </button>
                )}
              </div>
              <div className="col-2">
                {!isEditing && !isCreating && (
                  <button
                    onClick={() => (setIsEditing(true), setIsClicked(cine.id))}
                    style={{
                      background: `url(edit.png)`,
                      backgroundSize: "cover",
                      width: "30px",
                      height: "30px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  ></button>
                )}
              </div>
            </div>
          ))}
        </div>
      </ul>
      {!isEditing && isCreating && (
        <EditarCines
          id_cine={0}
          nombre=""
          direccion=""
          cinesDataArray={cinesDataArray}
          onErrorHandler={openModalHandler}
          onActualizarCines={handleActualizarCines}
        />
      )}
      {cinesDataArray.length > 0 && !isEditing && (
        <button
          className={classes.btn}
          onClick={() => setIsCreating(!isCreating)}
        >
          {isCreating ? "Terminar" : "Agregar"}
        </button>
      )}
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
