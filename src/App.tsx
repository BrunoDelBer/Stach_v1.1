import Navbar from "./componets/Navbar"
import './App.css'
import Boton from "./componets/Boton"
import Cards from "./componets/Cards";

import Title from "./sections/Title";
import Servicios from "./sections/Servicios";
import Congresos from "./sections/Congresos";
import Directivos from "./sections/Directivos";
import Mensaje from "./sections/Mensaje";
import Footer from "./sections/Footer";


function App() {

  function asociateAqui(){
    return console.log();
  }
  

  return (
    <div>
        <Navbar> Science Tech & Humanities </Navbar>
        <Title></Title>
        <Congresos></Congresos>
        <Servicios></Servicios>
        <Directivos></Directivos>
        <Mensaje></Mensaje>
        <Footer></Footer>
    </div>
  )
}

export default App
