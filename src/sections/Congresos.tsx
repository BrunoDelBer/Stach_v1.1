import React from 'react'
import Cards from '../componets/Cards'

import Lsthac from "D:/GitHub/sthac/sthac/src/assets/logoSTH.png";

const Congresos = () => {
  return (
    <section className="page-section gray_background" id="congresos">
    <div id="congresoContainer">
      <div id="text-center">
        <h2 className="section-heading text-uppercase">Congresos</h2>
        <h3 className="section-subheading"> congresos hechos por FER</h3>
      </div>
      <div className="row row-cols-2-center row-cols-md-2 g-4 justify-content-md-center">
        <div className="col">
          <Cards name="Congreso de Educación" imgDir="src/assets/Congreso_3.jpg" date="March 2024"></Cards>
        </div>
        <div className="col">
          <Cards name="Congreso de Fisica" imgDir="src/assets/Congreso_1.jpg" date="June 2024"></Cards>
        </div>
        <div className="col">
          <Cards name="Congreso de Móscu " imgDir="src/assets/Congreso_2.jpg" date="July 2024"></Cards>
        </div>
        <div className="col">
          <Cards name="Congreso de Constantinopla" imgDir="src/assets/Congreso_3.jpg" date="August 2024"></Cards>
        </div>
    </div>

    </div>

  </section>
  )
}

export default Congresos