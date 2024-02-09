import React from 'react'

interface Props{
    name:string,
    imgDir:string
    date:string
}

const Cards = ({name,imgDir,date}:Props) => {
  return (
    <div className="card " style = {{width:"18rem", height:"20rem", margin:"0 0 2rem 0"}}>
  <img src={imgDir} className="card-img-top" alt="..."  style ={{height:"16rem"}} />
  <div className="card-body">
    <p className="card-title text-center" style={{fontSize:"1.25rem"}}>{name}</p>
    <p className='card-date text-center fechas'> {date}</p>
  </div>
</div>
  )
}

export default Cards