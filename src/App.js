// import logo from './components/logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './components/Logo';
import Cards from './components/Cards';
import Btn from './components/Btn';
import {useEffect,useState} from 'react';



function App() {

  const [personaje,setPersonaje] = useState ({});

  useEffect(()=>{
    consultarAPI();

  },[])

  const consultarAPI =  async() =>{
const respuesta = await fetch ('https://thesimpsonsquoteapi.glitch.me/quotes');
const dato = await respuesta.json();
console.log(respuesta)
console.log(dato[0])
setPersonaje(dato[0])
  }

  return (
    <div className='bg-info py-5'>
      {/* <img src={logo} alt="logo" /> */}
      <Logo></Logo>    
      <Btn consultarAPI={consultarAPI}></Btn>
      <Cards personaje={personaje}></Cards>
    </div>
    
  );

}

export default App;
