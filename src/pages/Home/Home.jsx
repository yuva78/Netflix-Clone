import React from 'react'
import './Home.css'
import NavBar from '../../components/NavBar/NavBar.jsx'
import wed_banner from '../../assets/wed-banner.jpg'
import wed_title from '../../assets/download.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/Titlecards.jsx'
import Footer from '../../components/Footer/Footer.jsx'

const Home = () => {
  return (
    <div className ='home'>
      <NavBar/>
      <div className="wed">
        <img src={wed_banner} alt='' className='banner-img' />
        <div className="wed-caption">
            <img src={wed_title} alt='' className='caption-img' />
            <p>A dark, quirky take on the Addams Family’s daughter, as she navigates life at Nevermore Academy while solving mysteries and embracing her psychic powers.</p>
            <div className="wed-btns">
                <button className='btn'> <img src={play_icon} alt=''  />Play</button>
                <button className='btn dark-btn'> <img src={info_icon} alt='' /> More Info </button>
            </div>
            <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"}  />
        <TitleCards title={"Upcoming"} category={"upcoming"}  />
        <TitleCards title={"Top Picks for You"} category ={"now_playing"}  />
      </div>  
      <Footer/>
    </div>
  )
}

export default Home
