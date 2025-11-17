import React, { useEffect, useRef, useState } from 'react'
import './Titlecards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';


const Titlecards = ({title, category}) => {

  const [apiData, setApiData] = useState([]);


  const cardsRef = useRef();

    const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTgwYWNkMWM5NzZiMzFmNWVjZjlmMDI2YWZjMGY1OCIsIm5iZiI6MTc2MzM4MDM0My44MjA5OTk5LCJzdWIiOiI2OTFiMGM3NzdkZDk4ZTAyOGM1MmVhMWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zK3S8envLZId2vaqeIyJhFMeej2WSGjUeKKsVvgWA9U'
  }
};

const handleWheel = (event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;

}

useEffect(()=>{

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));


  cardsRef.current.addEventListener('wheel', handleWheel);
},[])
  
  return (
    <div className='title-cards'>
  <h2>{title?title:"Popular on Netflix"}</h2>

  <div className="card-list" ref={cardsRef} >
    {apiData.map((card, index) => {
      return (
        <Link to={`/player/${card.id}`} className="card" key={index}>
          <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt='' />
          <p>{card.original_title}</p>
        </Link>
      );
    })}
  </div>
</div>
  );
};

export default Titlecards

