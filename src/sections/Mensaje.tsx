import React from 'react'

const Mensaje = () => {
  return (
    <section className="page-section" id="congresos">
      <div id='container-m'>
      <div id="text-center">
        <h2 className="section-heading text-uppercase">ConTáctanos</h2>
        <h3 className="section-subheading"> Para Servir a la madre Patria</h3>
      </div>
      <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">escribe tu nombre</label>
            <input type="text" className="form-control" id="name" placeholder="Ingrese su nombre" />
          </div>
          <div className="mb-3">
              <label htmlFor="Email1" className="form-label">Correo Electronico</label>
              <input type="email" className="form-control" id="Email1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="number" className="form-label">escribe tu número</label>
            <input type="text" className="form-control" id="name" placeholder="Ingrese su número de Telefono" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Escribe tu mensaje aqui</label>
            <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div> 
  </section>
  )
}

export default Mensaje