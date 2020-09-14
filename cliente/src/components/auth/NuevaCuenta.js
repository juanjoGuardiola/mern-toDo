import React, { useState, } from 'react';
import {Link} from 'react-router-dom';

const NuevaCuenta = () =>{
  
  const [usuario, setUsuario] = useState({

    nombre: '',
    email: '',
    password: '',
    confirmar: ''

  });
  
  const {nombre, email, password, confirmar} = usuario;
  
  
    const onChange = (e)=>{
  
      setUsuario({
        ...usuario,
        [e.target.name] : e.target.value
      })
    }
  
  const handleSubmit = (e) =>{
    e.preventDefault();

    //Validar campos vacios


    //Password de 6 caracteres


    //Coincidan los passwords


    //Pasarlo al action
    
  }
  
  
    return (
      <div className="form-usuario">
        <div className="contenedor-form sombra-dark">
          <h1>Crear Cuenta</h1>

          <form onSubmit={handleSubmit}>

            <div className="campo-form">
              <label htmlFor="email">Nombre</label>
              <input
                type="text"
                value={nombre}
                id="nombre"
                name="nombre"
                placeholder="Tu nombre"
                onChange={onChange}
              />
            </div>

            <div className="campo-form">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={email}
                id="email"
                name="email"
                placeholder="Tu Email"
                onChange={onChange}
              />
            </div>

            <div className="campo-form">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={password}
                id="password"
                name="password"
                placeholder="Tu password"
                onChange={onChange}
              />
            </div>

            <div className="campo-form">
              <label htmlFor="confirmar">Confirmar Password</label>
              <input
                type="password"
                value={confirmar}
                id="confirmar"
                name="confirmar"
                placeholder="Repite tu password"
                onChange={onChange}
              />
            </div>

            <div className="campo-form">
              <input
                type="submit"
                className="btn btn-primario btn-block"
                value="Crear Cuenta"
              />
            </div>
          </form>

          <Link to={"/"} className="enalce-cuenta">
            Iniciar Sesion
          </Link>
        </div>
      </div>
    );
  }
export default NuevaCuenta;