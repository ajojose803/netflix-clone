import axios from 'axios';
import React, { useEffect, useState } from 'react'
import endpoints from '../services/movieServices';

const Hero = () => {
  
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios.get(endpoints.popular).then((response) => {
        const movies = response.data.results;
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];

    })
  })
    return (
    <div>Hero</div>
  )
}

export default Hero