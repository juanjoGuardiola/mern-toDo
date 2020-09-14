import React,{useReducer} from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import  {FORMULARIO_PROYECTO,
         OBTENER_PROYECTO,
         AGREGAR_PROYECTO,
         VALIDAR_FORMULARIO,
         PROYECTO_ACTUAL
        } from '../../types/index';
import {v4 as uuid} from "uuid";



const ProyectoState = props =>{



  const proyectos = [
    {id: 1, nombre: 'Tienda Virtual'},
    {id: 2, nombre: 'Otro proyecto ejemplo'},
    {id: 3, nombre: 'Otro mas'}
  ]



  const initialState = {

     proyectos : [],
    formulario : false,
    errorFormulario : false,
    proyecto : null

  }

  //Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState); //Cuando depende del estado anterior

  //Funciones para el CRUD
  
  const mostrarFormulario = () =>{
    dispatch({
      type: FORMULARIO_PROYECTO
    })
  }

//Obtener los proyectos
const obtenerProyectos = () =>{
  dispatch({
    type: OBTENER_PROYECTO,
    payload: proyectos //Los carga del array de arriba
  })
}

  //Agregar nuevo proyecto

  const agregarProyecto = (p) =>{

    p.id = uuid();

  //Insertar el proyecto en el state
    dispatch({
      type: AGREGAR_PROYECTO,
      payload: p
    })

  }

  //VALIDAR FORMULARIO

  const mostrarError = () =>{
    dispatch({
      type: VALIDAR_FORMULARIO
    })
  }


  //SELECCION DEL PROYECTO ACTUAL
  const proyectoActual = (proyectoId) =>{
      dispatch({
        type: PROYECTO_ACTUAL,
        payload: proyectoId
      })
  }


  return(
  <proyectoContext.Provider
    value = {{
    proyectos: state.proyectos,
    formulario: state.formulario,
    errorFormulario: state.errorFormulario,
    proyecto : state.proyecto,
    mostrarFormulario,
    obtenerProyectos,
    agregarProyecto,
    mostrarError,
    proyectoActual
    }}
  >
    {props.children}

  </proyectoContext.Provider>
  );

}
export default ProyectoState;