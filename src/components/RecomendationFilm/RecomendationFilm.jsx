import React, { useState, useEffect } from 'react'
import CardFilm from '../CardFilm/CardFilm'
// import MonsterUnivercityImage from '../../assets/images/thumb.webp'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const RecomendationFilm = () => {
  const [post, setPost] = useState([]);
  const navigate = useNavigate()
  const [movie, setMovie] = useState([])

  const handleDetailMovie = (id) => {
    navigate(`/detailMovie/${id}`)
  }

  const getMovieAPI = () => {
    axios.get("http://127.0.0.1:8000/api/movies")
      .then((res) => setMovie(res.data))
  }

  useEffect(() => {
    getMovieAPI();
  }, [])
  return (
    <div>
      <div className="text-gray-200 text-xl font-semibold mt-10 mb-5">
        Trending Movie
      </div>
      <div className="grid grid-cols-5 gap-5">
        {movie.map((movie) => {
          return (
            <CardFilm
              key={movie.id}
              id={movie.id}
              image={movie.image}
              title={movie.title}
              detailMovie={handleDetailMovie}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RecomendationFilm