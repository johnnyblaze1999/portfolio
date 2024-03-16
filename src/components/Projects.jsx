import React from 'react'
import ProjectItem from './ProjectItem'
import placeholderImg from '../assets/placeholder.png'

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
        <p className='py-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={placeholderImg} title = 'Personal Portfolio'/>
            <ProjectItem img={placeholderImg} title = 'Unity Game'/>
            <ProjectItem img={placeholderImg} title = 'Fullyhack Chrome Extension'/>
            <ProjectItem img={placeholderImg} title = 'BotPress Chatbot'/>
            <ProjectItem img={placeholderImg} title = 'School Database'/>
            <ProjectItem img={placeholderImg} title = 'Hotel Webpage'/>
        </div>
    </div>
  )
}

export default Projects