import React, {useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';


const Proyecto = ({proyecto}) => {

   //Obtener el state del formulario

   const proyectosContext = useContext(proyectoContext); //Fijate en el nombre de la constante
   const { proyectoActual } = proyectosContext;

  return (
    
    <li>
      <button 
      type="submit" 
      className="btn btn-blank"
      onClick={() => proyectoActual(proyecto.id)}>{proyecto.nombre}</button>
    </li>
  );
}

export default Proyecto;