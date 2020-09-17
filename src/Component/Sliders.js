import React, { useState } from 'react'
import '../Css/Slider.css'

function Sliders() {
  const [index,setIndex]=useState(0)
  const slideRight = () => {
    setIndex((index+1)%items.length)
  };

  const slideleft = () => {
    const nextIndex =index-1;
    if(nextIndex <0){
      setIndex(items.length-1);
    }else{
      setIndex(nextIndex);
    }
  };



const items = [
"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg",
"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_2x._CB431860450_.jpg",
"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_2x._CB432469748_.jpg",
];


  return (
    <div className="slider">
       
       <img
        className="slider_image"
        src={items[index]} />

     <button onClick={slideleft} className="sliderLeft">{"<"}</button>
       <button onClick={slideRight} className="sliderRight">{">"}</button>
      
     
    </div>
  )
}

export default Sliders
