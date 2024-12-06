import React from 'react'
import { Benners, RecomendationFilm } from '../../components'
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <main>
        <Helmet>
          <title>TheMovie</title>
          <meta
            name="The Movie"
            content="Trensings Movie, Film, and Amimation"
          />
        </Helmet>
        <Benners/>
        <RecomendationFilm/>
    </main>
  )
}

export default Home