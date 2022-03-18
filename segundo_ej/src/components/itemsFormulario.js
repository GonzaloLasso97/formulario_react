import React, {Fragment, useRef } from 'react';


export function ItemsFormulario({ elemento, clickado, recogerDato}) {
    const {id, type, placeholder} = elemento;
    const dato=useRef();

  
  if(clickado){
    recogerDato(id,dato.current.value);
    clickado=false;
  }
    
  return ( 
      <Fragment>
        <input ref={dato} type={type} placeholder={placeholder} />
      </Fragment>              
  );
};






