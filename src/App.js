import React,{Fragment, useState} from 'react';
import Formulario from './components/Formulario'
import $ from 'jquery'

function App() {

  var hola = [];

  $.get("hola/",(data)=>{
    console.log(data)
    hola = data;
    console.log(hola)
  })


  return (
    <Fragment>
      <h1>Bienvenido</h1>
    <Formulario
      hola = {hola}
    />
    </Fragment>
  );
}

export default App;
