import React from 'react'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left' src='https://images.unsplash.com/photo-1622819584099-e04ccb14e8a7?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>
                    My name is Kevin Nguyen
                </h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
                    I'm a Software Engineer
                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-24'>
                    <FaGithub className='cursor-pointer' size={20}/>
                    <FaLinkedinIn className='cursor-pointer' size={20}/>
                </div>
            </div>

        </div>
           
    </div>
  )
}

export default Main