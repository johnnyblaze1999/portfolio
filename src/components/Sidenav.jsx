import React, {useState} from 'react';
import {AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail} from 'react-icons/ai';
import {BsPerson} from 'react-icons/bs';

const Sidenav = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        console.log('state Change');
    }

  return (
    <div>
        <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
        {
          nav ? (
            <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
              <a href="#main" className='w-[75%] flex justify-center items-center border-b-4 border-emerald-300 rounded-lg hover:border-r-4 hover:shadow-inner hover:shadow-emerald-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150'>
                <AiOutlineHome size={20}/>
                <span className='pl-4'>Home</span>
              </a>
              <a href="#projects" className='w-[75%] flex justify-center items-center border-b-4 border-emerald-300 rounded-lg hover:border-r-4 hover:shadow-inner hover:shadow-emerald-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150'>
                <AiOutlineProject size={20}/>
                <span className='pl-4'>Projects</span>
              </a>
              <a href="#main" className='w-[75%] flex justify-center items-center border-b-4 border-emerald-300 rounded-lg hover:border-r-4 hover:shadow-inner hover:shadow-emerald-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150'>
                <BsPerson size={20}/>
                <span className='pl-4'>Resume/CV</span>
              </a>
              <a href="#contact" className='w-[75%] flex justify-center items-center border-b-4 border-emerald-300 rounded-lg hover:border-r-4 hover:shadow-inner hover:shadow-emerald-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150'>
                <AiOutlineMail size={20}/>
                <span className='pl-4'>Contacts</span>
              </a>
            </div>
          )
          : (
            ''
          )
        }

        <div className='md:block hidden fixed top-[35%] z-10'>
          <div className='flex flex-col'>
            <a href="#main" className='bg-white m-2 p-4 border-b-4 border-emerald-300 cursor-pointer hover:border-r-4 hover:shadow-emerald-200 hover:scale-110  ease-in duration-150'>
              <AiOutlineHome size={20}/>
            </a>
            <a href="#projects" className='bg-white m-2 p-4 border-b-4 border-emerald-300 cursor-pointer hover:border-r-4 hover:shadow-emerald-200 hover:scale-110  ease-in duration-150'>
              <AiOutlineProject size={20}/>
            </a>
            <a href="#main" className='bg-white m-2 p-4 border-b-4 border-emerald-300 cursor-pointer hover:border-r-4 hover:shadow-emerald-200 hover:scale-110  ease-in duration-150'>
              <BsPerson size={20}/>
            </a>
            <a href="#contact" className='bg-white m-2 p-4 border-b-4 border-emerald-300 cursor-pointer hover:border-r-4 hover:shadow-emerald-200 hover:scale-110  ease-in duration-150'>
              <AiOutlineMail size={20}/>
            </a>
          </div>
        </div>
    </div>
  )
}

export default Sidenav;