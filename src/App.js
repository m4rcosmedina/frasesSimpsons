// import logo from './components/logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './components/Logo';
import Cards from './components/Cards';
import Btn from './components/Btn';
import {useEffect,useState} from 'react';
import Spinner from './components/Spinner';



function App() {

  const [personaje,setPersonaje] = useState ({});
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  useEffect(()=>{
    consultarAPI();

  },[])

  const consultarAPI =  async() =>{
setMostrarSpinner(true)
const respuesta = await fetch ('https://thesimpsonsquoteapi.glitch.me/quotes');
const dato = await respuesta.json();
console.log(respuesta)
console.log(dato[0])
setTimeout(()=> {
setPersonaje(dato[0])
setMostrarSpinner(false);},2000);
  }

//operador ternario (condicion logica)? (logica que quiero si es verdadero):(logica que quiero hacer si no se cumple la condicion)
const mostrarComponente = (mostrarSpinner === true)? <Spinner></Spinner>:  <Cards personaje={personaje}></Cards>





  return (
    <div className='py-5'>
      {/* <img src={logo} alt="logo" /> */}
      <Logo></Logo>    
      <Btn consultarAPI={consultarAPI}></Btn>
      {mostrarComponente
    }
    </div>

    
    
  );

}

export default App;
