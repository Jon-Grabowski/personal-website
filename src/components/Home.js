import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-scroll'
import { useInView } from 'react-intersection-observer'


function Home({setHomeLinksVisable}) {
  const { ref: homeLinksRef, inView } = useInView();

  useEffect(()=>{
    setHomeLinksVisable(inView)
  }, [inView])


  return (
      <div className='lg:flex items-center justify-center min-h-screen text-gray-200' id='home'>

        <div className='w-80 lg:mb-20 mx-auto lg:mx-0 text-center' id='home-image'>
          <img 
            src="../images/IMG_1908_CROPPED.jpg"
            className='rounded-full border-2 border-blue-500'
          />
        </div>

        <div className='mb-20 px-16 py-7 border-t-4 border-b-4 border-blue-500 rounded text-center' id='home-name'>
          <div className=''>
            
            <p className="text-5xl md:text-6xl lg:text-8xl font-bold"><span className='text-6xl md:text-7xl lg:text-9xl'>J</span>on Grabowski</p>
          </div>
          <div className='ps-7'>
            <p>Description blah blah blah....</p>
          </div>
          <div className='flex items-center justify-center' ref={homeLinksRef}>
            <Link 
              activeClass="active"
              to="mystory"
              spy={true}
              smooth={true}
              offset={1}
              duration={1300} className='p-3 font-bold hover:bg-opacity-50 hover:cursor-pointer hover:bg-blue-700 rounded'>
              My Story</Link>
            <Link 
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={1}
              duration={1200} className='p-3 font-bold hover:bg-opacity-50 hover:cursor-pointer hover:bg-blue-700 rounded'>
              Projects</Link>
            <Link 
              activeClass="active"
              to="music"
              spy={true}
              smooth={true}
              offset={1}
              duration={1000} className='p-3 font-bold hover:bg-opacity-50 hover:cursor-pointer hover:bg-blue-700 rounded'>
              Music</Link>
            <Link 
              activeClass="active"
              to="art"
              spy={true}
              smooth={true}
              offset={1}
              duration={750} className='p-3 font-bold hover:bg-opacity-50 hover:cursor-pointer hover:bg-blue-700 rounded'>
              Art</Link>
          </div>
        </div>

      </div>
  )
}

export default Home
