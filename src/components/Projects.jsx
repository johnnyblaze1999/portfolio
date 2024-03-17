import React from 'react'
import ProjectItem from './ProjectItem'
import placeholderImg from '../assets/placeholder.png'
import gradebookImg from '../assets/gradebookProject.png'
import aichatbotImg from '../assets/aichatbotProject.png'

/** import propertyImg from '../assets/property.jpg'
import cryptoImg from '../assets/crypto.jpg'
import netflixImg from '../assets/netflix.jpg'
import twitchImg from '../assets/twitch.jpg'**/

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
            Projects
        </h1>
        <p className='text-center py-8'>
            Here are the projects that I've done over the years
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={placeholderImg} title = 'Personal Portfolio' description='My personal portfolio webpage showcasing my skills, experiences, and projects.'/>
            <ProjectItem img={placeholderImg} title = 'Unity Game' description='A fun desktop game where the player dodges incoming projectiles and survive under the time limit.'/>
            <ProjectItem img={placeholderImg} title = 'Fullyhack Chrome Extension' description="A chrome extension that return the weather status in real-time base on the given city's name."/>
            <ProjectItem img={aichatbotImg} title = 'BotPress Chatbot' description="AI Chatbot that use a given dataset along with clever prompt engineering to assist customers for a quicker and better customer service."/>
            <ProjectItem img={gradebookImg} title = 'Gradebook Database' description="Database system designed to assist professors and students on keeping track of their courses, grades, class's session, and standing status."/>
            <ProjectItem img={placeholderImg} title = 'Hotel Webpage' description="A simple styled Hotel website to support guests on seeking information and hotel's schedule."/>
        </div>
    </div>
  )
}

export default Projects