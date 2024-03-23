import React, { useState } from 'react';
import { sliderItems } from '../../data';
import image1 from '../../assets/image1.jpg';
import '../../assets/pink-324175_1280.jpg';
import './slider.css';

export const Slider = () => {
  const [slideIndex,setSlideIndex] = useState(0);
  const handleClick = (direction) =>{
    if(direction==="left"){
      setSlideIndex(slideIndex>0?slideIndex-1:2)
    }
  }
    return (
        <>
        <div className="slider">
        <div className='container'>
        <div className="wrapper" slideIndex={slideIndex} style={{ transform: `translateX(${slideIndex * -50}vw)` }}>
          {sliderItems.map((item) => (
            <div className="slide">
              <div className="imgContainer" onClick={() => handleClick("left")}>
                <img className="image" src={item.img} alt="not available" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <p style={{ fontStyle: 'italic' }}> slide &gt;&gt;</p>
      <div className="sidebarItem">
        <div className="Info">
        The recognition was helpful for the brand in terms of getting the word out to a newer audience and get more press attention.” UR Siddharth Pursuing master’s in design engineering He is currently pursuing his master’s in design engineering at Harvard University. He was one of the top three KC Mahindra fellows to fund his education, a scholarship granted by the KC Mahindra Education Trust. At Harvard, Siddharth is at the helm of pioneering startups, collaborating with co-founders from Harvard and MIT. One of his startups is a semi-finalist in the Harvard Innovation Labs
        </div>
      <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
          </div>
        </div>
</div>
        </>    
           
  )
}

