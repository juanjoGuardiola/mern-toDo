import  {
  FORMULARIO_PROYECTO, 
  OBTENER_PROYECTO, 
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL} from '../../types/index';


export default (state, action) =>{
  switch (action.type) {
    case FORMULARIO_PROYECTO:
      return {
        ...state,
        formulario: true,
      };
    case OBTENER_PROYECTO:
      return {
        ...state,
        proyectos: action.payload,
      };

    case AGREGAR_PROYECTO:
      return {
        ...state,
        proyectos: [...state.proyectos, action.payload],
        formulario: false, //Vuelve a ocultar el formulario
        errorFormulario: false //Vuelve a ocultar el error formulario
      };

    case VALIDAR_FORMULARIO:
      return {
        ...state,
        errorFormulario: true,
      };

      case PROYECTO_ACTUAL:
        return{
          ...state,
          proyecto: state.proyectos.filter(p => 
            p.id === action.payload)

        };

    default:
      return state;
  }
}