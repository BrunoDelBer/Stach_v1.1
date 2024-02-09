import React from 'react';
import { FaCircleQuestion } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='container-f'>
      <div className='row '>
        <div className="col text-start">
          <p>Copyright © Science Tech & Humanities 2035</p>
        </div>
        <div className="col text-center text-uppercase d-flex justify-content-center">
          <a href=""><AiFillTwitterCircle size={40} color='black' style={{margin:"0 1rem 0 0"}}/></a>
          <a href=""><FaCircleQuestion size={40} color='black'/></a>
          <a href=""><FaLinkedin size={40} color='black'style={{margin:"0 0 0 1rem"}}/> </a>
        </div> 
        <div className='col text-end'>
         <a className="" href="#asociate">Privacy Policy </a>
          <a className="" href="#asociate">Terms of Use</a>
        </div>   
      </div>
    </footer> 
  )
}

export default Footer