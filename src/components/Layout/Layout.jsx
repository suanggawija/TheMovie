import React from 'react'
import Aside from '../Aside/Aside'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex'>
        <div className='z-20'>
          <Aside/>
        </div>
        <div className='z-10'>
          <Header/>
        </div>
        <div className='w-1/6'></div>
        <div className='w-5/6 mt-14 p-5 ml-5 z-0'>
            <Outlet/>
        </div>

    </div>
  )
}

export default Layout