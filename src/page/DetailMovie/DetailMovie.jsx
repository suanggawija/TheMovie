import React, { useEffect, useState } from 'react'
import { VideoBenner } from '../../components'
import { useParams } from "react-router-dom"; 
import axios from 'axios'
import { Helmet } from 'react-helmet';

const DetailMovie = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    console.log(id)
    console.log(post)
    axios.get(`http://127.0.0.1:8000/api/movies/${id}`).then((res) => {
      setPost(res.data)
    }).catch((err) => {
      console.log("Error fatching data post" , err)
    })
  }, [id])

  if(!post) {
    return <p>loading...</p>
  }
  console.log(post.image)
  return (
    <div>
        <Helmet>
          <title>{post.title}</title>
          <meta
            name={post.title}
            content={post.description}
          />
        </Helmet>
        {/* <VideoBenner id={post.id} image={post.image} videoLink={post.youtubevideoid} like={post.like} dislike={post.dislike}/> */}
        <VideoBenner id={post.id} image={post.image} youtubevideoid={post.youtubevideoid}/>
        <h1 className='my-5 text-white text-5xl font-semibold'>{post.title}</h1>
        <div className='flex gap-3'>
            <p className='px-3 py-1 bg-white rounded-full text-black text-sm bg-opacity-60'>Fantasy</p>
            <p className='px-3 py-1 bg-white rounded-full text-black text-sm bg-opacity-60'>Drama</p>
            <p className='px-3 py-1 bg-white rounded-full text-black text-sm bg-opacity-60'>Fantasy</p>
            <p className='px-3 py-1 bg-white rounded-full text-black text-sm bg-opacity-60'>Drama</p>
        </div>
        <p className='text-gray-100 text-sm w-full mt-5 mb-12'>{post.description
        }</p>
    </div>
  )
}

export default DetailMovie