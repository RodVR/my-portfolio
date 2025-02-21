import React from 'react'
import './skills.css'
import JavaScript from '../../assets/js.png'
import Java from '../../assets/java.png'
import ReactIMG from '../../assets/react.png'
import Book from '../../assets/book.png'
import HTML from '../../assets/html.png'
import CSSImg from '../../assets/css.png'
import SQL from '../../assets/sql.png'
import Spring from '../../assets/spring.png'
import GIT from '../../assets/git.png'
import REST from '../../assets/rest.png'

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">About Me</span>
      <span className="skillDesc">I started working in customer service in places like supermarkets and as a security guard, but after a while I finally decided to follow my passion as a Software Engineer. I chose to specialize at Code for All_, where I completed the fullstack bootcamp on December 20th, 2024, which lasted 14 weeks. I am currently looking for my first opportunity in the field and strengthening my knowledge by developing projects in Java and JavaScript. I am always willing to learn something new and face new challenges.
      </span>
      <div className="skillBars">
        <div className='skillBar'>
          <img src={JavaScript} alt="" className="skillBarImg" />
          <div className='skillBarText'>
            <h2>JavaScript</h2>
            <p>Currently working on various projects to strengthen my JavaScript skills and build dynamic, interactive web applications.</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={Java} alt="" className="skillBarImg" />
          <div className='skillBarText'>
            <h2>Java</h2>
            <p>Enhancing my Java skills through hands-on projects to develop efficient software solutions.</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={ReactIMG} alt="" className="skillBarImg" />
          <div className='skillBarText'>
            <h2>React</h2>
            <p>Currently building projects using React, including this website, to create modern, responsive user interfaces. </p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={Book} alt="" className="skillBarImg" />
          <div className='skillBarText'>
            <h2>Continuous Learner</h2>
            <p>I am always eager to learn new technologies and expand my skill set!</p>
          </div>
        </div>
        <div className='skillBar' id="skillBox">
        <img src={HTML} alt="" className="skillBoxImg" />
        <img src={CSSImg} alt="" className="skillBoxImg" />
        <img src={SQL} alt="" className="skillBoxImg" />
        <img src={Spring} alt="" className="skillBoxImg" />
        <img src={GIT} alt="" className="skillBoxImg" />
        <img src={REST} alt="" className="skillBoxImg" />
        </div>
      </div>
    </section>
  )
}

export default Skills
