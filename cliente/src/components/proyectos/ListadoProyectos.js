import React, {useContext, useEffect} from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';


const ListadoProyectos = () => {

  //Extraer el state inicial
  const proyectosContext = useContext(proyectoContext); //Fijate en el nombre de la constante
  const { proyectos, obtenerProyectos } = proyectosContext;


  //Obtener los proyectos al cargar el componente
  useEffect(() => {
    obtenerProyectos();
  }, [])

    //Revisar el contenido de proyectos
    if(proyectos.length === 0) return null;

  return (

    <ul className="listado-proyectos">
    {proyectos.map(p=>(
      <Proyecto
        key = {p.id}
        proyecto={p}
      />
    ))}

    </ul>
  );
}

export default ListadoProyectos;