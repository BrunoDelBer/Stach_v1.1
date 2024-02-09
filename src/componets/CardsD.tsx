import React from 'react'
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { GiJerusalemCross } from "react-icons/gi";

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
      <a href=""><FaTwitterSquare size={45} color='lighblue'/></a>
      <a href=""><FaFacebookSquare size={45}/></a>
      <a href=""><FaLinkedin size={45} color='black' /></a>
    </div>
  </div>
  )
}

export default CardsD