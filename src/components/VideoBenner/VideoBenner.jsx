import React, { useState } from 'react'
import ImageThumb from '../../assets/images/thumb.webp'
import { IoCaretForwardCircle} from "react-icons/io5";
import { AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike, AiOutlineComment  } from "react-icons/ai";
import YoutubePlayer from '../YoutubePlayer/YoutubePlayer';

const VideoBenner = (props) => {
  const [playVideo, setPlayVideo] = useState(false)

  const videoOnClik = () => {
    setPlayVideo(true)
  }
  // console.log(props)
  return (
    <div>
      {!playVideo ? (
        <div className='w-full h-[480px] overflow-hidden rounded-2xl relative'>
            <img src={props.image} alt="Benner" className='w-full h-full object-cover'/>
            <div className='w-full  h-full absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black p-5'>
            <div className='flex w-full h-full justify-center items-center'>
                <button onClick={videoOnClik} className="text-7xl text-white hover:text-gray-200 transition-all divide-purple-300"><IoCaretForwardCircle/></button>
            </div>
            </div>
        </div>
      ) : (
        <div className='w-full h-[480px] overflow-hidden rounded-2xl'>
            <YoutubePlayer videoLink={props.videoLink}/>
        </div>
      )}
        <div className='flex gap-3 text-white mt-5'>
            <div className='w-[100px] py-1 flex gap-2 justify-center items-center text-xl border border-gray-500 rounded-full'><AiOutlineLike/>13</div>
            <div className='w-[100px] py-1 flex gap-2 justify-center items-center text-xl border border-gray-500 rounded-full'><AiOutlineDislike/>4</div>
            <div className='w-[100px] py-1 flex gap-2 justify-center items-center text-xl border border-gray-500 rounded-full'><AiOutlineComment/>7</div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default VideoBenner