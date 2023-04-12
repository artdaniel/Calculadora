import './App.css';
import logod from './images/logo-d.png';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [entrada, setEntrada] = useState('');

  const agregarEntrada = val => {
    setEntrada(entrada + val);
  };

  const calcularResultado = () =>{
    if(entrada){
      setEntrada(evaluate(entrada));
    } else {
      alert("Ingrese valores");
    }
  };


  return (
    <div className="App">
      <div className='dart-logo-contenedor'>
        <img
          src={logod}
          className='dart-logo'
          alt='Logo dart' />        
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={entrada} />
        <div className='fila'>
          <Boton manejarClic={agregarEntrada}>1</Boton>
          <Boton manejarClic={agregarEntrada}>2</Boton>
          <Boton manejarClic={agregarEntrada}>3</Boton>
          <Boton manejarClic={agregarEntrada}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarEntrada}>4</Boton>
          <Boton manejarClic={agregarEntrada}>5</Boton>
          <Boton manejarClic={agregarEntrada}>6</Boton>
          <Boton manejarClic={agregarEntrada}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarEntrada}>7</Boton>
          <Boton manejarClic={agregarEntrada}>8</Boton>
          <Boton manejarClic={agregarEntrada}>9</Boton>
          <Boton manejarClic={agregarEntrada}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarEntrada}>0</Boton>
          <Boton manejarClic={agregarEntrada}>.</Boton>
          <Boton manejarClic={agregarEntrada}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear 
            manejarClear={() => setEntrada('')}>
            Clear
          </BotonClear>
        </div>
      </div>        
    </div>
  );
}

export default App;
