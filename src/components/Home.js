import React from 'react'
import { NavLink } from 'react-router-dom'


function Home() {


return (
    <div className='md:container md:mx-auto border flex items-center justify-center mt-40'>

      <div className='w-80 mx-5'>
        <img 
          src="../images/IMG_1908_CROPPED.jpg"
          className='rounded-full border-4 border-black'
        />
      </div>

      <div>
        <div className='text-top inline-block'>
          <span className='text-9xl font-bold inline-block align-bottom'>J</span>
          <span className="text-8xl font-bold border-b-2 inline-block align-top">on Grabowski</span>
        </div>
        <div className='ps-7'>
          <p>Description blah blah blah....</p>
        </div>
        <div>
          <p className='ps-7'>DIV FOR LINKS</p>
        </div>
      </div>

    </div>
)
}

export default Home
