import React from 'react'
import './Home.css'
import hero from '../../assets/hero.png'
import dark_arrow from '../../assets/dark-arrow.png'
function Home() {
    return (
        <div className='hero'>
            <img src={hero} alt="" />
            <div className="container"></div>
            <div className="content">
                <h1>We Ensure better education for a better world</h1>
                <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
                <div className='button'> Explor more
                    <img src={dark_arrow} alt="" />
                </div>
            </div>


        </div>
    )
}

export default Home