import React, {Fragment} from 'react';
import $ from 'jquery'

const Formulario = ({hola}) => (
    <>
      {hola.map(x => (
        <div>{x.name}</div>
      ))}
    </>
  ); 
/*
  fetch('hola')
.then(response => response.json())}
*/
 
export default Formulario;