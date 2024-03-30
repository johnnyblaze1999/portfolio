import React from 'react'
import EducationItem from './EducationItem'

const data = [
    {
        year: 2017,
        degree: 'Highschool Diploma',
        school: 'Eleanor Roosevelt Highschool',
        duration: 'June 2017',
    },
    {
        year: 2021,
        degree: 'Associate of Science in Computer Science',
        school: 'Norco College',
        duration: 'February 2018 - June 2021',
        details: 'Graduated with great distinction. GPA 3.9'
    },
    {
        year: 2024,
        degree: 'Bachelor of Science in Computer Science',
        school: 'California State University, Fullerton',
        duration: 'August 2021 - May 2024',
        details: 'Graduated with GPA 3.6'
    }
]

function Education() {
  return (
    <div id='education' className='max-w-[1040px] m-auto md:pl-20 p-4 pt-16'>
        <h1 className=' pb-6 text-4xl font-bold text-center text-[#001b5e]'>Education</h1>
        {data.map((item, idx) => (
            <EducationItem
                key={idx}
                year={item.year}
                degree={item.degree}
                school={item.school}
                duration={item.duration}
                details={item.details}
            />
        ))}
    </div>
  )
}

export default Education