import React from 'react'
import CardFilm from '../CardFilm/CardFilm'
import MoanaImage from '../../assets/images/moana.webp'
import MonsterUnivercityImage from '../../assets/images/thumb.webp'
import InsideOut2 from '../../assets/images/insideOut2.webp'

const RecomendationFilm = () => {
  return (
    <div>
        <div className='text-gray-200 text-xl font-semibold mt-10 mb-5'>Trending Movie</div>
        <div className='grid grid-cols-5 gap-5'>
            <CardFilm image={MonsterUnivercityImage} title={"Monster University"}/>
            <CardFilm image={MoanaImage} title={"Moana"}/>
            <CardFilm image={InsideOut2} title={"Inside Out 2"}/>
            <CardFilm image={MonsterUnivercityImage} title={"Monster University"}/>
            <CardFilm image={MoanaImage} title={"Moana"}/>
            <CardFilm image={InsideOut2} title={"Inside Out 2"}/>
            <CardFilm image={MonsterUnivercityImage} title={"Monster University"}/>
            <CardFilm image={MoanaImage} title={"Moana"}/>
            <CardFilm image={InsideOut2} title={"Inside Out 2"}/>
            <CardFilm image={InsideOut2} title={"Inside Out 2"}/>
        </div>
    </div>
  )
}

export default RecomendationFilm