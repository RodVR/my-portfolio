import React from 'react'
import './intro.css'
import bg from '../../assets/image.png'
import btnImg from '../../assets/btnImg.png'
import {Link} from 'react-scroll'
import CV from '../../assets/CV_Rodolfo_Reis.pdf'

//USE <BR> TO BREAK LINE IF INTROPARA IS TOO LONG TO FIT OK?
const openPDF = () => {
  window.open(CV, '_blank')
}
const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Rodolfo</span><br />Junior Software Engineer</span>
            <p className="introPara">I'm a Junior Software Engineer looking for my first professional experience!</p> 
            <Link><button className="btn" onClick={openPDF}><img src={btnImg} alt="CV" className="btnImg"/>My CV</button></Link>
        </div>
        <img src={bg} alt="Profile" className='bg'/>
    </section>
  )
}

export default Intro
