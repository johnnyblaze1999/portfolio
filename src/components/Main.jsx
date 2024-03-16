import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left' src='https://images.unsplash.com/photo-1622819584099-e04ccb14e8a7?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-center text-4xl font-bold text-gray-800'>
                    My name is <span className=' rounded-xl bg-white shadow-md pl-2 pb-2'><TypeAnimation
                    sequence={[
                        'Kevin Nguyen',
                        5000, 
                        'An Nguyen',
                        5000
                    ]}
                    wrapper="span"
                    speed={25}
                    style={{ fontSize: '1em', display: 'inline-block' }}
                    repeat={Infinity}
                    /></span>
                    
                </h1>
                <h2 className='flex sm:text-3xl text-2xl pt-6 text-gray-800'>
                    I'm a Software Engineer
                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-24'>
                    <a href='https://github.com/johnnyblaze1999' target='_blank' rel='noopener noreferrer'>
                        <FaGithub className='cursor-pointer p-2 hover:scale-110 rounded-xl ease-out duration-150' size={50}/>
                    </a>
                    <a href='https://www.linkedin.com/in/kevinnguyennorco/' target='_blank' rel='noopener noreferrer'>
                        <FaLinkedinIn className='cursor-pointer p-2 hover:scale-110 rounded-xl ease-out duration-150' size={50}/>
                    </a>
                </div>
            </div>

        </div>
           
    </div>
  )
}

export default Main
