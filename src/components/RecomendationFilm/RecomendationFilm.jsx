import React, { useState, useEffect } from 'react'
import CardFilm from '../CardFilm/CardFilm'
// import MonsterUnivercityImage from '../../assets/images/thumb.webp'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const RecomendationFilm = () => {
  const [post, setPost] = useState([]);
  const navigate = useNavigate()

  const handleDetailMovie = (id) => {
    navigate(`/detailMovie/${id}`)
  }

  const getPostAPI = () => {
    axios.get("http://localhost:3000/posts")
      .then((res) => setPost(res.data))
  }

  useEffect(() => {
    getPostAPI();
  }, [])
  return (
    <div>
      <div className="text-gray-200 text-xl font-semibold mt-10 mb-5">
        Trending Movie
      </div>
      <div className="grid grid-cols-5 gap-5">
        {post.map((post) => {
          return (
            <CardFilm
              key={post.id}
              id={post.id}
              image={post.image} // URL gambar dari API
              title={post.title}
              detailMovie={handleDetailMovie}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RecomendationFilm