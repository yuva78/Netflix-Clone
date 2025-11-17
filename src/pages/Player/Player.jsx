import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'

const Player = () => {

    const [apiData, setApiData] = useState({
      name: "",
      key: "",
      published_at: "",
      typeof: "",
    })

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTgwYWNkMWM5NzZiMzFmNWVjZjlmMDI2YWZjMGY1OCIsIm5iZiI6MTc2MzM4MDM0My44MjA5OTk5LCJzdWIiOiI2OTFiMGM3NzdkZDk4ZTAyOGM1MmVhMWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zK3S8envLZId2vaqeIyJhFMeej2WSGjUeKKsVvgWA9U'
  }
};

useEffect(()=>{
  fetch('https://api.themoviedb.org/3/movie/594767/videos?language=en-US', options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));
},[])



  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" />
      <iframe width='90%' height='90%'
      src={`https://www.youtube.com/embed/${apiData.key}`} 
      title='trailer' frameBorder= '0' allowFullScreen ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div> 
  )
}

export default Player
