import axios from 'axios';
import React, { useEffect, useState } from 'react'
import endpoints from '../services/movieServices';

const Hero = () => {
  
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios.get(endpoints.popular).then((response) => {
        console.log(response.data);
    })
  })
    return (
    <div>Hero</div>
  )
}

export default Hero