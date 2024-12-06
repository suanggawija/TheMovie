import React from 'react'
import { VideoBenner } from '../../components'

const DetailMovie = () => {
  return (
    <div>
        <VideoBenner/>
        <h1 className='my-5 text-white text-5xl font-semibold'>Monster University</h1>
        <div className='flex gap-3'>
            <p className='px-3 py-1 bg-white rounded-full text-black text-sm bg-opacity-60'>Fantasy</p>
            <p className='px-3 py-1 bg-white rounded-full text-black text-sm bg-opacity-60'>Drama</p>
            <p className='px-3 py-1 bg-white rounded-full text-black text-sm bg-opacity-60'>Fantasy</p>
            <p className='px-3 py-1 bg-white rounded-full text-black text-sm bg-opacity-60'>Drama</p>
        </div>
        <p className='text-gray-100 text-sm w-1/2 mt-5'>Monsters University adalah sebuah film komedi animasi komputer 3D Amerika Serikat yang diproduksi oleh Pixar Animation Studios dan dirilis oleh Walt Disney Pictures.</p>
    </div>
  )
}

export default DetailMovie