import React, { useEffect, useState } from "react";
import '../src/carousel.css'

function Carousel() {
  
  const [index, setIndex] = useState(0);
  const [carouselData, setCarD] = useState([
    {
      text: "World's Largest Animal Database",
      image: "/main.jpg",
    },
    {
      text: "Add animals to expand the database",
      image: "/herb.jpg",
    },
    {
      text: "Open Source",
      image: "/amphi.jpg",
    },
  ])
  console.log(index);
  
  useEffect(()=>{
    console.log("Index changed");
  },[index])

  function handleNext() {
    setIndex(c=> c === carouselData.length - 1? 0 : c + 1 )
  }

  function handlePre() {
    setIndex(c=> c === 0 ? carouselData.length - 1: c - 1 )

  }

  return (
    <div>
      <h1 className="carText">{carouselData[index].text}</h1>
      <img className="carousel" src={carouselData[index].image} alt="carousel" />
      <button className="carouselButtons" id="pre" onClick={()=>handleNext()}>Pre</button>
      <button className="carouselButtons" id="next" onClick={()=>handlePre()}>Next</button>
    </div>
  );
}

export default Carousel;
