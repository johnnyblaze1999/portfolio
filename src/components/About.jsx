import React from 'react'
import profileImg from '../assets/profilePic.jpg'
import { Fade } from 'react-awesome-reveal'

const About = () => {
  return (
    <div id='about' className='hero bg-base-200 max-w-[1040px] mx-auto py-16'>
      <div className="hero-content lg:flex lg:items-center lg:justify-around p-10 bg-slate-100 rounded-2xl">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-[#001b5e] mb-4">About Me</h1>
          <p className="pt-6 px-3">Hi there 👋</p>
          <Fade>
            <p className="py-6 px-3">My name is Kevin Nguyen, and my Vietnamese name is An Nguyen. I was born and raise in Vietnam, and I am a graduate Software Engineering student at CSUF. I have a solid foundation in computer science and hands-on experience in various projects, and I thrive on tackling challenges headfirst. I love solving problems and working with others.</p>
            <p className="px-3 mb-4">P.S.: Check out my resume to see more of what I can do. Feel free to contact me using the form below or via email and text. I would love to contribute my talents to your success! </p>
          </Fade>
          
          <a href='https://1drv.ms/b/s!ApNBbePuQfbA8UG5y_vXPsHt8hM1?e=Euwpnb' target='_blank' rel='noopener norefererrer'>
            <button className="btn btn-primary bg-black text-white p-2 ml-3 mb-6 rounded-md transition hover:scale-110">
              My Resume
            </button>
          </a>
          
        </div>
        <Fade>
          <img src={profileImg} className="max-w-xs md:max-w-sm rounded-full mb-10 mx-auto hover:shadow-inner hover:shadow-emerald-400" />

        </Fade>
        
      </div>
    </div>
  )
}

export default About