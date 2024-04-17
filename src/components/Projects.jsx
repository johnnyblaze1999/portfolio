import React from 'react'
import ProjectItem from './ProjectItem'
import placeholderImg from '../assets/placeholder.png'
import gradebookImg from '../assets/gradebookProject.png'
import aichatbotImg from '../assets/aichatbotProject.png'
import portfolioImg from '../assets/portfolio.png'
import chromeExtensionImg from '../assets/chromeExtension.png'
import hotelWebImg from '../assets/hotelWebpage.png'
import unityImg from '../assets/unityGame.png'
import { Fade } from 'react-awesome-reveal';

/** import propertyImg from '../assets/property.jpg'
import cryptoImg from '../assets/crypto.jpg'
import netflixImg from '../assets/netflix.jpg'
import twitchImg from '../assets/twitch.jpg'**/

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <Fade direction='down' triggerOnce>
          <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
              Projects
          </h1>
        </Fade>
        <Fade direction='up' triggerOnce>
          <p className='text-center text-lg py-8'>
            Here are some of the projects that I've done over the years, including what I have learned in class and my personal projects. Feel free to check around for more projects in my Github repo.
          </p>
        </Fade>
        
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={portfolioImg} title = 'Personal Portfolio' description='My personal portfolio webpage showcasing my skills, experiences, and projects.' url='https://johnnyblaze1999.github.io/portfolio' tools='ReactJS, Vite, TailwindCSS'/>
            <ProjectItem img={unityImg} title = 'Unity Game' description='A fun desktop game where the player dodges incoming projectiles and survive under the time limit.' url='/' tools='Unity, C#'/>
            <ProjectItem img={chromeExtensionImg} title = 'Fullyhack Chrome Extension' description="A chrome extension that return the weather status in real-time base on the given city's name. This is a 24h project for FullyHack" url='https://github.com/Fullyhacks2024/Fullyhacks_Project' tools='HTML, CSS, Javascript'/>
            <ProjectItem img={aichatbotImg} title = 'BotPress Chatbot' description="AI Chatbot that use a given dataset along with clever prompt engineering to assist customers for a quicker and better customer service." url='https://github.com/johnnyblaze1999/CapstonePrototype' tools='Javascript, BotPress, AI'/>
            <ProjectItem img={gradebookImg} title = 'Gradebook Database' description="Database system designed to assist professors and students on keeping track of their courses, grades, class's session, and standing status." url='https://github.com/johnnyblaze1999/Gradebook-database' tools='MySQL, OpenOffice, HTML, CSS, PHP'/>
            <ProjectItem img={hotelWebImg} title = 'Hotel Webpage' description="A simple styled Hotel website to support guests on seeking information and hotel's schedule." url='https://github.com/johnnyblaze1999/hotel-project' tools='HTML, CSS'/>
        </div>
    </div>
  )
}

export default Projects