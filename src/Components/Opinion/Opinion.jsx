import React, { useState } from 'react';
import './Opinion.css';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';
import next from '../../assets/next-icon.png';
import back from '../../assets/back-icon.png';

const Opinion = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      img: user_1,
      name: 'Emily Williams',
      location: 'Edusity, USA',
      text: 'Choosing to pursue my degree at Edusity was one of the best decisions I\'ve ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.'
    },
    {
      img: user_2,
      name: 'William Jackson',
      location: 'Edusity, USA',
      text: 'Choosing to pursue my degree at Edusity was one of the best decisions I\'ve ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.'
    },
    {
      img: user_3,
      name: 'Emily Williams',
      location: 'Edusity, USA',
      text: 'Choosing to pursue my degree at Edusity was one of the best decisions I\'ve ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.'
    },
    {
      img: user_4,
      name: 'William Jackson',
      location: 'Edusity, USA',
      text: 'Choosing to pursue my degree at Edusity was one of the best decisions I\'ve ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.'
    }
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="titles">
      <p>TESTIMONIALS</p>
      <h2>What Student Says</h2>
      <div className="two_atTheTime">

      <button className="prev" onClick={handlePrevClick}>
          <img src={back} alt="" />
         </button>
      <div className="slider">
        
        <div className="sliding_show" style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
          {cards.map((card, index) => (
            <div className="card" key={index}>
              <div className="image">
                <img src={card.img} alt="" />
              </div>
              <div className="user_info">
                <h3>{card.name}</h3>
                <span>{card.location}</span>
              </div>
              <div className="text">
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>

      <button className="next" onClick={handleNextClick}>
          <img src={next} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Opinion;
