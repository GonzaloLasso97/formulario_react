import { toBeDisabled } from '@testing-library/jest-dom/dist/matchers';
import React, { Fragment, useRef, useState } from 'react';
import { ItemsFormulario } from './itemsFormulario.js';


export function FormularioUnico({mostrar, todos_elementos})
{
  const [clickado, setClickado] = useState(false);
  const [recibido, setRecibido] = useState(false);
  const [todos, setTodos]=useState(todos_elementos)

  const mostrar_datos = () =>{
    setClickado(true);
  }

  const recogerDatos = (id, cadena) => {
    const newTodos = [...todos_elementos];
    const element = newTodos.find((ele) => ele.id == id);
    element.dato_introducido=cadena;
    setTodos(newTodos);
    setRecibido(true);
    setClickado(false);
}
if(recibido){
  alert(`Sr./a. ${todos_elementos[0].dato_introducido} ${todos_elementos[1].dato_introducido} se le ha enviado un correo a ${todos_elementos[2].dato_introducido}`);
}

  return (
    <Fragment>
      <form>
          {todos_elementos.map ((elemento) =>
          (<ItemsFormulario clickado={clickado} key={elemento.id} elemento={elemento} recogerDato={recogerDatos}/>))}   
          <button onClick={mostrar_datos} hidden={mostrar}>Enviar</button> 
      </form> 
    </Fragment>
   );
};
