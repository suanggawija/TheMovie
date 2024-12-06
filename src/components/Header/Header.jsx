import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaSearch, FaBell, FaUser, FaBars} from "react-icons/fa";

const Header = () => {
  return (
    <header className='w-full fixed flex p-5 jus bg-gradient-to-b from-black'>
      <span className='w-1/6'></span>
      <nav className='w-5/6 mr-5 px-5 flex gap-3 text-gray-300 justify-between '>
          <NavLink className="flex justify-center items-center bg-slate-900 w-12  rounded-2xl"><FaBars/></NavLink>
          <input type="text" className='bg-gray-900 w-full px-5 py-2 border-transparent rounded-2xl focus:outline-none ' placeholder={"Search"}/>
          <NavLink className="flex justify-center items-center bg-slate-900 w-12  rounded-2xl"><FaBell/></NavLink>
          <NavLink className="flex justify-center items-center bg-slate-900 w-12  rounded-2xl"><FaUser /></NavLink>
      </nav>
    </header>
  )
}

export default Header