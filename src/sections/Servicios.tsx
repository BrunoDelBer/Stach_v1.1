import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MdGroups } from "react-icons/md";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { GiScales } from "react-icons/gi";

const Servicios = () => {
  return (
    <section className="page-section" id="Servicos">
        <div id="text-center">
            <h2 className="section-heading text-uppercase">Estatutos</h2>
            <h3 className="section-subheading">Conoce más sobre lo que hacemos</h3>
        </div>
        <div id='columnas'>
            <div className='col-md-4'>
            <MdGroups size={70} />
            <h4 className='my-3'>Congresos</h4>
            <p className='text-muted'> Organizamos congresos nacionales e internacionales para 
                compartir los resultados de las nuevas investigaciones.
            </p>
        </div>
        <div className='col-md-4'>
            <BsFillRocketTakeoffFill size={70}/>
            <i className="fa fa-rocket" aria-hidden="true"></i>
            <h4 className='my-3'>Cursos y asesorias</h4>
            <p className='text-muted'> Ofrecemos cursos de actualización y regularización Académica.
            </p>
        </div>
        <div className='col-md-4'>
            <GiScales size={70}/>
            <i className="fa fa-paw" aria-hidden="true"></i>
            <h4 className='my-3'>Ciencia, Cultura y Artes</h4>
            <p className='text-muted'> Promovemos la divulgación de las artes y las ciencias.
            </p>
        </div>


        </div>
        
  </section>
  )
}

export default Servicios