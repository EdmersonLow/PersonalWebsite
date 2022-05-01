import React from 'react'
import './about.css'
import ME  from '..//..//assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'

import {VscFolderLibrary} from 'react-icons/vsc'


export const  About = () => {
  return (
    <section id="about">
        <h5 >Get To Know</h5>
        <h2> ABOUT ME </h2>
    
    <div className="container about__container">
        <div className="about__me">
            <div className="about_me-image">
                <img src={ME} alt="About Image"/>
            </div>
        </div>

        <div className="about__content">
            <div className="about__cards">
                <article className='about__card'>
                <FaAward className='about__icon'/>
                    <h5>Experience</h5>
                    <small>UpComing Summer Internship</small>
                </article>
                
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>2 Completed</small>
            </article>
          </div>

          <p>
           Currently a Freshman majoring in Information Engineering and Media with a minor in Business in Nanyang Technological University, Singapore 
          </p>

          <a href="#contact" className='btn btn-primary'>UP COMING </a>
        </div>
      </div>
    </section>
  )
}
