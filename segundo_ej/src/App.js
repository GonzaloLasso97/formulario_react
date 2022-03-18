import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import React, { Fragment, useState, useRef} from 'react';
import { FormularioUnico } from './components/Formulario.js';
import { v4 as uuidv4 } from "uuid";


var estado_comenzar=false;
var estado_enviar=true;

export function App() {
  const [elementos, setElementos] = useState([]);
  

  const comenzar = () => {
    for(var i = 1; i< 4; i++){
        setElementos((prevElementos) => {
          return [... prevElementos, {id:uuidv4(),type: 'text', placeholder: 'Añade los datos', dato_introducido:' '}]});
    }
    estado_comenzar=true;
    estado_enviar=false;
  };

  return (
    <Fragment>
      <button onClick={comenzar} hidden={estado_comenzar}>Comenzar</button>
      <FormularioUnico mostrar={estado_enviar} todos_elementos={elementos} />  
    </Fragment>
  );
}



