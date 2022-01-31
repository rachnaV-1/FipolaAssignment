import * as React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Categories.css";

import Slider from "react-slick";

export default function Categories() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div className='category'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_au3NaAD4XrxFVBIxqUW5OguHD8pkpCB1ow&usqp=CAU' alt='Chicken'></img>
        <label>Chicken</label>
      </div>
      <div className='category'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5VU-rt2MXRdzTl3MWtvUKpwacOckAaPWH4w&usqp=CAU' alt='Seafood'></img>
        <label>Seafood</label>
      </div>
      <div className='category'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmieJ0Ivq3ZvEKr48i5DwSD5APLbhGnTU-Pg&usqp=CAU' alt='lamb & goat'></img>
        <label>Lamb & Goat</label>
      </div>
      <div className='category'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRfHku7JfReiCSXUPAu3l9LiqR5cOJiSDozg&usqp=CAU' alt='Cold cuts'></img>
        <label>Cold Cuts</label>
      </div>
      <div className='category'>
        <h3>Chicken</h3>
      </div>
      <div className='category'>
        <h3>Seafood</h3>
      </div>
    </Slider>
  );
}
