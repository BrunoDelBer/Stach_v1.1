import React from 'react'


import Lsthac from "D:/GitHub/sthac/Stach_v1.1/src/assets/react.svg";


interface Props{
    children: string
}

const Navbar = ({children} : Props ) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container-fluid">
      <a className="navbar-brand navbar-dark bg-dark" href="#">
      <img src="src\assets\logoSTH.png" alt="Lsthac" width="40" height="34" className="d-inline-block align-text-top "/>
        {children}
      </a>
      <button className="navbar-toggler navbar-dark bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbar">
        <ul className="navbar-nav ms-auto navbar-dark bg-dark">
          <li className="nav-item navbar-dark bg-dark">
            <a className="nav-link active navbar-dark bg-dark" aria-current="page" href="#">Nosotros</a>
          </li>
          <li className="nav-item navbar-dark bg-dark">
            <a className="nav-link" href="#">Congresos</a>
          </li>
          <li className="nav-item navbar-dark bg-dark">
            <a className="nav-link" href="#">Proyectos</a>
          </li>
          <li className="nav-item navbar-dark bg-dark">
            <a className="nav-link" href="#">Directivos</a>
          </li>
          <li className="nav-item navbar-dark bg-dark">
            <a className="nav-link" href="#">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar