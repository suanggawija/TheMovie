import React from 'react'
import ImageThumb from '../../assets/images/thumb.webp'
import { IoCaretForwardCircle, IoDownloadOutline  } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Benners = () => {
  return (
    <NavLink to={"/detailMovie"}>
      <div className='w-full h-[580px] overflow-hidden rounded-2xl relative'>
          <img src={ImageThumb} alt="Benner" className='w-full h-full object-cover'/>
          <div className='w-full absolute bottom-0 left-0 bg-gradient-to-t from-black p-5'>
            <div className='flex gap-3'>
              <p className='px-3 py-1 bg-black rounded-full text-white text-sm bg-opacity-60'>Fantasy</p>
              <p className='px-3 py-1 bg-black rounded-full text-white text-sm bg-opacity-60'>Drama</p>
            </div>
            <h1 className='text-3xl text-white font-semibold my-3'>Monster University</h1>
            <p className='text-gray-100 text-sm w-1/2'>Monsters University adalah sebuah film komedi animasi komputer 3D Amerika Serikat yang diproduksi oleh Pixar Animation Studios dan dirilis oleh Walt Disney Pictures.</p>
            <div className='flex gap-3 mt-3 mb-5'>
              <button className='text-gray-800 text-lg font-bold bg-white hover:bg-black hover:bg-opacity-60 hover:text-white transition-all duration-100 rounded-full px-4 py-2 flex items-center gap-2'><IoCaretForwardCircle/>Watch Now</button>
              {/* <button className='text-white text-lg font-bold bg-black bg-opacity-60 hover:bg-opacity-100 transition-all duration-300  rounded-full px-4 py-2 flex items-center gap-2'>Download <IoDownloadOutline/></button> */}
            </div>
          </div>
      </div>
    </NavLink>
  )
}

export default Benners