import React from 'react'

const About = () => {
  return (
    <div id='about' className='hero min-h-screen bg-base-200'>
      <div className="hero-content lg:flex lg:flex-row-reverse lg:items-center lg:justify-around p-10">
        <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl lg:mb-0 mb-10" />
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-4">Box Office News!</h1>
          <p className="py-6 mb-4">Stay updated with the latest news from the world of cinema. Get insights, reviews, and more right here.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default About
