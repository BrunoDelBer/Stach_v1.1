import React from 'react'

interface Props{
    name:string,
    puesto: string,
   
   
}

const CardsD = ({name,puesto}:Props) => {
  return (
    <div className="card border-light h-100" style = {{width:"18rem"}}>
    {/* <img src={imgDir} className="card-img-top" alt="..." /> */}
    <div className="card-body">
    <h5 className="card-title">{name}</h5>
      <p className="card-text">{puesto}</p>
    </div>
  </div>
  )
}

export default CardsD