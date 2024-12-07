import React, { useState } from 'react'
import { IoCaretForwardCircle} from "react-icons/io5";
import { AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike, AiOutlineComment  } from "react-icons/ai";
import YoutubePlayer from '../YoutubePlayer/YoutubePlayer';
import axios from 'axios';

const VideoBenner = (props) => {
  const [playVideo, setPlayVideo] = useState(false)
  // const [like, setLike] = useState(props.like || 0);
  // const [dislike, setDislike] = useState(props.dislike || 0);
  // const [userLike, setUserLike] = useState(false)
  // const [userDislike, setUserDislike] = useState(false)

  const videoOnClik = () => {
    setPlayVideo(true)
  }

  // const updateLikes = (newLikes, newDislikes) => {
  //   axios.patch(`http://localhost:3000/posts/${props.id}`, {
  //     like: newLikes,
  //     dislike: newDislikes
  //   }).then(() => {
  //     setLike(newLikes)
  //     setDislike(newDislikes)
  //   }).catch((err) => console.error("Error Likes/Dislikes", err))
  // }

  // const handleLike = () => {
  //   if(!userLike) {
  //     setUserLike(true)
  //     setUserDislike(false)
  //     updateLikes(like + 1, userDislike ? dislike - 1 : dislike)
  //   }else{
  //     setUserLike(false)
  //     updateLikes(like -1, dislike)
  //   }
  // }

  // const handleDislike = () => {
  //   if (!userDislike) {
  //     setUserDislike(true);
  //     setUserLike(false);
  //     updateLikes(userLike ? like - 1 : like, dislike + 1);
  //   } else {
  //     setUserDislike(false);
  //     updateLikes(like, dislike - 1);
  //   }
  // }


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
            <YoutubePlayer youtubevideoid={props.youtubevideoid}/>
        </div>
      )}
        <div className='flex gap-3 text-white mt-5'>
          {/* <button 
            onClick={handleLike}
            className='w-[100px] py-1 flex gap-2 justify-center items-center text-xl border border-gray-500 rounded-full'>
            {userLike ? <AiFillLike /> : <AiOutlineLike />}{like}
          </button>
          <button
            onClick={handleDislike}
            className='w-[100px] py-1 flex gap-2 justify-center items-center text-xl border border-gray-500 rounded-full'>
            {userDislike ? <AiFillDislike /> : <AiOutlineDislike />}{dislike}
          </button> */}
            <div className='w-[100px] py-1 flex gap-2 justify-center items-center text-xl border border-gray-500 rounded-full'><AiOutlineComment/>7</div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default VideoBenner