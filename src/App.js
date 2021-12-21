// import logo from './components/logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './components/Logo';
import Cards from './components/Cards';
import Btn from './components/Btn';



function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div className='bg-info py-5'>
      {/* <img src={logo} alt="logo" /> */}
      <Logo></Logo>    
      <Btn></Btn>
      <Cards></Cards>
    </div>
    
  );

}

export default App;
