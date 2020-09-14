import React, { Fragment, useContext } from "react";
import Tarea from "./Tarea";
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoTareas = () => {


  const proyectosContext = useContext(proyectoContext); //Fijate en el nombre de la constante
  const { proyecto } = proyectosContext;
 

  //Esperar a la seleccion del proyecto
  if (!proyecto) return <h2>Selecciona un proyecto</h2>

  const [proyectoActual] = proyecto;

  const tareasProyecto = [
    { nombre: "Elegir plataforma", estado: true },
    { nombre: "Elegir colores", estado: false },
    { nombre: "Elegir numeros", estado: true },
    { nombre: "Elegir nose", estado: false },
  ];

  return (
    
    <Fragment>
    
      <h2>Proyecto: {proyectoActual.nombre}</h2>

      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasProyecto.map((t) => <Tarea tarea={t} />)
        )}

      </ul>
      
      <button type="button" className="btn btn-eliminar">
          {" "}
          Eliminar proyecto &times;
        </button>
    </Fragment>
  );
};

export default ListadoTareas;
