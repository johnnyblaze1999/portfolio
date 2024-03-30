import React from 'react'
import { Slide } from 'react-awesome-reveal'

const EducationItem = ({year, degree, school, duration, details}) => {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
        <li className='mb-10 ml-4'>
            <div className='absolute w-3 h-3 bg-[#D4A09F] rounded-full mt-1.5 -left-1.5 border-white'/>
            <Slide direction='right' triggerOnce>
                <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                    <span className='inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md'>{year}</span>
                    <span className='text-lg font-semibold text-[#809D9D]'>{degree}</span>
                    <span className='my-1 text-sm font-normal leading-none text-stone-400'><b>{school}</b>{" || "}{duration}</span>
                </p>
                <p className='my-2 text-base font-normal text-stone-500'>{details}</p>
            </Slide>
        </li>
    </ol>
  )
  
}

export default EducationItem