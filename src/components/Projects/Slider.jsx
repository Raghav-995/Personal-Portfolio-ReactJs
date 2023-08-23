import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
	{
        img : "https://user-images.githubusercontent.com/139675343/255162144-4a98fec6-36c6-4c57-8861-b8989b761858.png",
        disc : "Animal Webapp using ReactJs"
    },
    {
        img : "https://user-images.githubusercontent.com/139675343/253793118-7d8b5bfe-edb8-4476-afdf-75b3c62f72d0.png",
        disc : "Emotion Based Movies and Music Recommendation project using Python,Flask,Html,Css."
    },
    
    {
        img : "https://user-images.githubusercontent.com/139675343/256592491-f6540e39-d93c-42db-9d2f-94806ade0c9a.png",
        disc : "Driving Site Using HTML,CSS,JS"
    },
    {
        img : "https://user-images.githubusercontent.com/139675343/260385119-5806f379-a3e2-4b4d-97eb-4894e58b402f.png",
        disc : "Python Converter!"
    },
    {
        img : "https://res.cloudinary.com/ghazni/image/upload/v1661323979/Yt-portfolio/ui1_n3uiaz.png",
        disc : "Building Portfolio Reactjs"
    }
];

var settings = {
    className: "center",
    
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`