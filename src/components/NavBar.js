import React from 'react'
import { Link } from 'react-scroll'

function NavBar() {

return (
    <nav className='flex justify-between border-b py-1 bg-white sticky top-0'>
        <div>
        <Link 
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={1}
                duration={750} className='pe-3 font-bold'>
                Home</Link>
        </div>
        <div className=''>
            <Link 
                activeClass="active"
                to="mystory"
                spy={true}
                smooth={true}
                offset={1}
                duration={750} className='p-3 font-bold'>
                My Story</Link>
            <Link 
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={1}
                duration={750} className='p-3 font-bold'>
                Projects</Link>
            <Link 
                activeClass="active"
                to="music"
                spy={true}
                smooth={true}
                offset={1}
                duration={750} className='p-3 font-bold'>
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
        <div>

        </div>
    </nav>
)
}

export default NavBar
