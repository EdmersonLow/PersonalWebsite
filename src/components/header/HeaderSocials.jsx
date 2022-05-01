import React from 'react'
import { BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


export const HeaderSocials = () => {
  return (
  <div className="header__socials">
      <a href="http://linkedin.com/in/edmersonlow" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/edmersonlow" target="_blank"><BsGithub/></a>
      <a href="http://instagram.com/edmersonlow" target="_blank"><BsInstagram/></a>
  </div>
  )
}
