import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {

return (
    <div className='flex justify-between border-b py-1 backdrop-opacity-20 backdrop-invert bg-black/10'>
        <div>
            <NavLink to="/" className='pe-4'>Home</NavLink>
        </div>
        <div className=''>
            <NavLink to="/story" className='pe-4'>My Story</NavLink>
            <NavLink to="/projects" className='pe-4'>Projects</NavLink>
            <NavLink to="/music" className='pe-4'>Music</NavLink>
            <NavLink to="/art" className='pe-4'>Art</NavLink>
        </div>
        <div>

        </div>
    </div>
)
}

export default NavBar
