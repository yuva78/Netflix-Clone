import React from 'react'
import './Home.css'
import NavBar from '../../components/NavBar/NavBar.jsx'
import wed_banner from '../../assets/wed-banner.jpg'
import wed_title from '../../assets/wed-title.png'

const Home = () => {
  return (
    <div className ='home'>
      <NavBar/>
      <div className="hero">
        <img src={wed_banner} alt='' className='banner-img' />
        <div className="hero-captiob">
            <img src={wed_title} alt='' className='caption-img' />
            <p>A dark, quirky take on the Addams Family’s daughter, as she navigates life at Nevermore Academy while solving mysteries and embracing her psychic powers.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
