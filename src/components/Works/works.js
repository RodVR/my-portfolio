import React from 'react'
import './works.css'
import Project1 from '../../assets/boolpong.png'
import Project2 from '../../assets/blackjack.png'
import Project3 from '../../assets/linksaver.png'


const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">These are some of the projects I have worked on!</span>
      <div className="worksImgs">
        <div className='work'>
          <a href='https://catarinaccds.itch.io/bool-pong' target='_blank' rel='noreferrer'>
            <img src={Project1} alt="" className="worksImg" />
          </a>
          <h3>Boolpong</h3>
          <p>We were tasked with making a game in Java 4 weeks into the bootcamp with just 1 week to work on it alongside ongoing studies.</p>
        </div>
        <div className='work'>
          <a href='/blackjack/index.html' target='_blank' rel='noreferrer'>
          <img src={Project2} alt="" className="worksImg" />
          </a>
          <h3>Blackjack</h3>
          <p>Fun little Blackjack game I worked on using JavaScript and a deck of cards API. (Psstt.. you can play it by clicking the image)</p>
        </div>
        <div className='work'>
          <a href='https://github.com/RodVR/link-saver' target='_blank' rel='noreferrer'>
          <img src={Project3} alt="" className="worksImg" />
          </a>
          <h3>LinkSaver</h3>
          <p>Link Saver extension I made while doing the Scrimba JavaScript course. Added the individual "Copy" and "Delete" buttons myself.</p>
        </div>
      </div>
    </section>
  )
}

export default Works
