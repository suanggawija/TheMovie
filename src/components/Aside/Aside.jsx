import React from 'react'
import { NavLink } from 'react-router-dom'
import { TiHome, TiPuzzle, TiHeart, TiChartArea} from "react-icons/ti";

const Aside = () => {
  const getNavLinkClass = (isActive) => 
    isActive ? 
        "p-3 flex items-center gap-3 bg-cyan-500 border border-cyan-500 rounded-2xl "
        :
        "p-3 flex items-center gap-3 hover:text-cyan-300 border border-transparent hover:border-cyan-300 rounded-2xl transition-all duration-300"
  return (
    <aside className=' mx-5 py-5 w-1/6 flex fixed h-full '>
        <div className='bg-gray-900 text-white rounded-2xl flex flex-col w-full items-center font-semibold'>
            <NavLink 
                to={"/"} 
                className="flex items-center gap-2 text-2xl mt-8 mb-6">
                    <TiChartArea className='text-cyan-300'/>
                    <div>
                        <span className='text-cyan-300 font-bold'>The</span>
                        Movie
                    </div>
            </NavLink>
            <ul className='w-full px-4 flex flex-col gap-2 text-lg'>
                <li><NavLink to={"/"} className={({isActive}) => getNavLinkClass(isActive)}><TiHome/> Home</NavLink></li>
                <li><NavLink to={"/explore"} className={({isActive}) => getNavLinkClass(isActive)}><TiPuzzle/> Explore</NavLink></li>
                <li><NavLink to={"/favorite"} className={({isActive}) => getNavLinkClass(isActive)}><TiHeart/> Favorite</NavLink></li>
            </ul>
        </div>
    </aside>
    // <aside className="bg-gray-800 text-white w-1/6 h-full fixed top-0 left-0 flex flex-col items-center py-5">
    //     <div className="text-center mb-10">
    //         <h1 className="text-2xl font-bold text-cyan-300">PrimeVision</h1>
    //     </div>
    //     <ul className="w-full px-4 flex flex-col gap-4">
    //         <li><NavLink to="/" className={({ isActive }) => getNavLinkClass(isActive)}><TiHome /> Home</NavLink></li>
    //         <li><NavLink to="/explore" className={({ isActive }) => getNavLinkClass(isActive)}><TiPuzzle /> Explore</NavLink></li>
    //         <li><NavLink to="/favorite" className={({ isActive }) => getNavLinkClass(isActive)}><TiHeart /> Favorite</NavLink></li>
    //     </ul>
    // </aside>
  )
}

export default Aside