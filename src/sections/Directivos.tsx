import React from 'react'
import CardsD from '../componets/CardsD'

const Directivos = () => {
  return (
    <section className="page-section gray_background" id="Directivos">
        <div id="text-center">
            <h2 className="section-heading text-uppercase">Directivos</h2>
            <h3 className="section-subheading">Conoce más sobre lo que hacemos</h3>
        </div>
        <div className="row row-cols-2 row-cols-md-4 g-6 directivos" >
            <div className='col'>
                <CardsD name='GranaGOD' puesto='el Viejon'></CardsD>
            </div>
            <div className='col'>
                <CardsD name='El Fernando' puesto='el Chingon'></CardsD>
            </div>
            <div className='col'>
                <CardsD name='Pedro' puesto='el Creyente'></CardsD>
            </div>
            <div className='col'>
                <CardsD name='Ulisexxx' puesto='el CEO del SEX'></CardsD>
            </div>
        </div>
        <p className='mesa_directiva'>La mesa directiva tiene vigencia hasta el 31 de diciembre del 2135</p>
      
  </section>
  )
}

export default Directivos