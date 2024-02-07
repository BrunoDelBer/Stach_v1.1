import React from 'react'

interface Props{
    name:string,
    imgDir:string
    date:string
}

const Cards = ({name,imgDir,date}:Props) => {
  return (
    <div className="card h-100" style = {{width:"18rem"}}>
  <img src={imgDir} className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text text-center">{name}</p>
    <p className='card-date text-center fechas'> {date}</p>
  </div>
</div>
  )
}

export default Cards