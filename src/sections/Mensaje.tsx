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
        <div className='d-flex flex-row justify-content-center flex-wrap'>
          <div className='' style={{margin:"0 2rem 0 0"}}>
            <div className="mb-3">
              {/* <label htmlFor="name" className="form-label">Escribe tu nombre:</label> */}
              <input type="text" className="form-control" id="name" placeholder="Ingrese su nombre" style={{height:"3rem", width:"35rem",marginBottom:"3rem"}}/>
            </div>
            <div className="mb-3">
                {/* <label htmlFor="Email1" className="form-label">Correo Electronico</label> */}
                <input type="email" className="form-control" id="Email1" aria-describedby="emailHelp" placeholder="Ingrese su Correo electronico" style={{height:"3rem", width:"35rem", marginBottom:"3rem"}} />
            </div>
            <div className="mb-3">
              {/* <label htmlFor="number" className="form-label">escribe tu número</label> */}
              <input type="text" className="form-control" id="name" placeholder="Ingrese su número de Telefono" style={{height:"3rem", width:"35rem"}}/>
            </div>
          </div>
           <div className='' style={{margin:"0 0 0 2rem"}}>
              <div className="mb-3">
              {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">Escribe tu mensaje aqui</label> */}
              <textarea className="form-control" id="exampleFormControlTextarea1" style={{height:"15rem", width:"40rem"}} placeholder='escriba su mensaje aqui'></textarea>
            </div>
          </div> 
        </div>
        <div className='d-flex justify-content-center'>
          <button type="submit" className="btn btn-primary boton-msn">Submit</button>
        </div>
          
      </form>
    </div> 
  </section>
  )
}

export default Mensaje