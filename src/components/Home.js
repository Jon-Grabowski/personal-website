import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'


function Home() {


return (
    <div className='md:container md:mx-auto border flex items-center justify-center min-h-screen' >

      <div className='w-80 mx-5'>
        <img 
          src="../images/IMG_1908_CROPPED.jpg"
          className='rounded-full border-4 border-black'
        />
      </div>

      <div className='border'>
        <div className='text-top inline-block'>
          <span className='text-9xl font-bold inline-block align-bottom'>J</span>
          <span className="text-8xl font-bold border-b-2 inline-block align-top">on Grabowski</span>
        </div>
        <div className='ps-7'>
          <p>Description blah blah blah....</p>
        </div>
        <div className='flex items-center justify-center'>
          <Link 
            activeClass="active"
            to="mystory"
            spy={true}
            smooth={true}
            offset={1}
            duration={1300} className='p-3 font-bold'>
            My Story</Link>
          <Link 
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={1}
            duration={1200} className='p-3 font-bold'>
            Projects</Link>
          <Link 
            activeClass="active"
            to="music"
            spy={true}
            smooth={true}
            offset={1}
            duration={1000} className='p-3 font-bold'>
            Music</Link>
          <Link 
            activeClass="active"
            to="art"
            spy={true}
            smooth={true}
            offset={1}
            duration={750} className='p-3 font-bold'>
            Art</Link>
        </div>
      </div>

    </div>
)
}

export default Home
