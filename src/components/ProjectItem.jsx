import React from 'react'

const ProjectItem = ({img, title, description}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-tr from-gray-400 to-emerald-400 hover:scale-110'>
        <img src={img} alt='/' className='rounded-xl object-cover h-96 w-96 group-hover:opacity-10 '/>
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
                {title}
                <details className="rounded-lg hover:cursor-pointer" open>
                  <summary className="text-sm select-none">
                    Details
                  </summary>
                  <div className="mt-1 text-sm">
                    {description}
                  </div>
                </details>
            </h3>
        </div>
    </div>
  )
}

export default ProjectItem