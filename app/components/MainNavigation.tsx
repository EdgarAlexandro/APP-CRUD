import { NavLink } from "@remix-run/react";
import classes from "./../css/MainNavigation.module.css";

//Componente que carga un header con los diferentes links de navegación de la app
export default function MainNavigation() {
  return (
    <header className={classes.mainNav}>
      <div className="container text-center">
        <nav className="row">
          <div className="col-md-2 col-12">Edgar Castillo</div>
          <NavLink
            to="/"
            className={classes.NavLink + " col-md-2 offset-md-3 col-4"}
          >
            Cines
          </NavLink>
          <NavLink
            to="/peliculas"
            className={classes.NavLink + " col-md-2 offset-md-3 col-4"}
          >
            Peliculas
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
