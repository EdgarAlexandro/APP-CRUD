import { useEffect, useState } from "react";
import classes from "./../css/Global.module.css";
import { Cines } from "../data/interfaces";

//Componente que genera un form para modificar o agregar un cine
export default function EditarCines(props: {
  id_cine: number;
  nombre: string;
  direccion: string;
  cinesDataArray: Cines[];
  onErrorHandler: (errorString: string) => void;
  onActualizarCines: () => void;
}) {
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");

  //Se define el nombre y dirección (o se deja en vacio) segun lo enviado a props
  useEffect(() => {
    setNombre(props.nombre);
    setDireccion(props.direccion);
  }, []);

  //Realiza la llamada a la API según lo que se quiera hacer: modificar o agregar
  const apiCall = () => {
    //Crear el objeto de datos a enviar
    const data = {
      nombre,
      direccion,
    };
    //Se define segun si el id_cine es 0 o diferente (existe o no el cine)
    const url =
      props.id_cine !== 0
        ? `http://localhost:3001/cines/${props.id_cine}`
        : "http://localhost:3001/cines";
    fetch(url, {
      method: props.id_cine !== 0 ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        // Actualizar la interfaz de usuario
        props.onActualizarCines();
      })
      .catch((error) => {
        //Lanza error al usuario si no se puede establecer conexión con la API
        props.onErrorHandler(
          `No fue posible ${
            props.id_cine !== 0 ? "modificar" : "agregar"
          } el cine debido a un error en la llamada a la API: ${error.message}`
        );
      });
  };

  const handleFormSubmit = (e: { preventDefault: () => void }) => {
    //Evitamos que el form recargue la página
    e.preventDefault();

    //Si el componente recibe 0 como id_cine se realiza la solicitud de agregar cine
    if (props.id_cine === 0) {
      //Si el cine a agregar ya existe (nombre y dirección iguales a otro existente) lanza un error al usuario
      if (
        props.cinesDataArray.some(
          (cine) => cine.nombre === nombre && cine.direccion === direccion
        )
      ) {
        props.onErrorHandler(
          "Ya existe un cine con ese nombre y esa misma dirección"
        );
      }
      //Si no existe se realiza la solicitud
      else {
        apiCall();
      }
    }
    //Si el id_cine es diferente a 0 entonces se realiza la solicitud de crear cine
    else {
      apiCall();
    }
  };

  //Form para los datos
  return (
    <div
      className={classes.mainContainer + " container " + classes.formContainer}
    >
      <form onSubmit={handleFormSubmit}>
        <label>
          <div className={classes.labelText}>Nombre:</div>
          <input
            type="text"
            value={nombre}
            required={true}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          <div className={classes.labelText}>Dirección:</div>
          <input
            type="text"
            value={direccion}
            required={true}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </label>
        <button className={classes.btnModificar} type="submit">
          {props.id_cine === 0 ? "Agregar" : "Actualizar"}
        </button>
      </form>
    </div>
  );
}
