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
      <div className='md:container md:mx-auto flex items-center justify-center min-h-screen text-gray-200' id='home'>

        <div className='w-80 mx-5 mb-20'>
          <img 
            src="../images/IMG_1908_CROPPED.jpg"
            className='rounded-full border-2 border-blue-500'
          />
        </div>

        <div className='mb-20 px-16 py-7 border-t-4 border-b-4 border-blue-500 rounded'>
          <div className='text-top inline-block'>
            <span className='text-9xl font-bold inline-block align-bottom'>J</span>
            <span className="text-8xl font-bold border-b-2 border-purple-700 inline-block align-top">on Grabowski</span>
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
