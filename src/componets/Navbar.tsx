import React from 'react'

import Logo from "D:/GitHub/sthac/sthac/src/assets/react.svg";
import Lsthac from "D:/GitHub/sthac/sthac/src/assets/logoSTH.png";


interface Props{
    children: string
}

const Navbar = ({children} : Props ) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
      <img src={Logo} alt="Lsthac" width="40" height="34" className="d-inline-block align-text-top "/>
        {children}
      </a>
      <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbar">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Nosotros</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Congresos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Proyectos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Directivos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar