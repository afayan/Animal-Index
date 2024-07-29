import React, { useEffect, useState } from "react";
import { GrPrevious , GrNext } from "react-icons/gr";
import "../src/carousel.css";

function Carousel() {

 
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState('animate')
  const [carouselData, setCarD] = useState([
    {
      text: "World's Largest Animal Database",
      image: "/main.jpg",
    },
    {
      text: "Add animals to expand the database",
      image: "/carousel2.jpg",
    },
    {
      text: "Open Source",
      image: "/carousel3.jpg",
    },
    {
      text: "Everything Wildlife.",
      image: "/carousel4.jpg",
    },
  ]);
  console.log(index);

  const headings = [
    '<h1 className={`carText`}>Worlds largest database</h1>',
    '<h1 className={`carText`}>Worlds largest animals</h1>',
    '<h1 className={`carText`}>Worlds largest shit</h1>',
    '<h1 className={`carText`}>Worlds largest geen</h1>',
  ]

  // useEffect(() => {
  //   setAnimate('');

  //   setTimeout(()=>{
  //     setAnimate('animate')
  //   },20)
  // }, [index]);

  function handleNext() {
    setIndex((c) => (c === carouselData.length - 1 ? 0 : c + 1));
    setAnimate(a=>'animateOut')

    setTimeout(()=>{
      setAnimate(a=>'animate')
    },50)
  }

  function handlePre() {
    setIndex((c) => (c === 0 ? carouselData.length - 1 : c - 1));
    setAnimate('')

    setAnimate(a=>'animateOut')

    setTimeout(()=>{
      setAnimate(a=>'animate')
    },50)
  }




  return (
    <div className="cBody">

    <h1 className={`carText ${animate}`}>{carouselData[index].text}</h1>

      <div className="carouselLarge" >
        {carouselData.map((element) => {
          return (
            <>
              <img key={element.text} style={{translate : `${-100 * index}%`}} className="carousel" src={element.image} alt="carousel" />
            </>
          );
        })}
      </div>

      <button className="carouselButtons" id="next" onClick={() => handleNext()}>
      <GrNext />

      </button>
      <button className="carouselButtons" id="pre" onClick={() => handlePre()}>
      <GrPrevious />
      </button>
    </div>
  );
}

export default Carousel;
