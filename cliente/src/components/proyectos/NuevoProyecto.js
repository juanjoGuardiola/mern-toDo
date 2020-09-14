import React, { Fragment,useState, useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {


  //Obtener el state del formulario

  const proyectosContext = useContext(proyectoContext); //Fijate en el nombre de la constante
  const { formulario, mostrarFormulario, agregarProyecto, mostrarError, errorFormulario } = proyectosContext;

  const [proyecto, setProyecto] = useState({
    nombre: "",
  });

  const {nombre} = proyecto;


  const onChangeProyecto = (e) => {
    setProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {

    e.preventDefault();

    //Validar proyecto
    if (nombre === ''){
      mostrarError();
      return;
    }

    //Agregar al state
    agregarProyecto(proyecto);

    //Reiniciar el state
    setProyecto({
      nombre: ''
    });
  };

  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario" onClick={() => mostrarFormulario()}>
        Nuevo Proyecto
      </button>

      {formulario
      ? (
        <form 
        className="formulario-nuevo-proyecto"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="input-text"
          placeholder="Nombre Proyecto"
          name="nombre"
          value={nombre}
          onChange={onChangeProyecto}
        />
        <input
          type="submit"
          className="btn btn-primario btn-block"
          value="Agregar Proyecto"
        />
      </form>
      )
      :
      null
      }
      
      {errorFormulario ? <p className="mensaje error">Nombre obligatorio</p> : null}

    </Fragment>
  );
};
export default NuevoProyecto;