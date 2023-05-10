import React from 'react'
import github from "../assets/github.png"
import web from "../assets/website.png"
import link from "../assets/linkedin.png"
import email from"../assets/email.png"



const Footer = () => {
  return (
    <div className='footer-con'>
      <div className='footer-items'>
      <img src={github} alt="" className='footer-image'></img>
      <img src={email} alt="" className='footer-image'></img>
      <img src={link} alt="" className='footer-image'></img>
      <img src={web} alt="" className='footer-image' color="white"></img>
      </div>
    </div>
  )
}

export default Footer