import React from 'react'
import Youtube from 'react-youtube'

const YoutubePlayer = () => {
  const opts = {
    height: '480',
    width: '1050',
    playerVars: {
      autoplay: 1, // Auto play saat video dimuat
    },
  };
  return (
    <div className='w-full h-full'>
        <Youtube videoId='xBzPioph8CI' className='flex justify-center items-center' opts={opts} onReady={onPlayerReady}/>
    </div>
  )
}

const onPlayerReady = (event) => {
  console.log('Player is ready');
  event.target.pauseVideo();
};

export default YoutubePlayer