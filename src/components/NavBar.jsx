import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Auth'

const NavBar = () => {
    const auth = useAuth()
    return (
<nav className="flex items-center justify-between flex-wrap bg-pink-500 p-3">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    <span className="font-semibold text-xl tracking-tight">DTD</span>
  </div>
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
        {
         !auth.user &&(
      <NavLink to="/"  className=" block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Home
      </NavLink>
        )
      }
      <NavLink to="/profile" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Profile
      </NavLink>
      {
        !auth.user &&(
      <NavLink to="/login" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white pl-4">
        Login
      </NavLink>

        )
      }
    </div>
    
  </div>
</nav>
    )
}

export default NavBar
