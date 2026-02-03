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
        img : "data:image/png;base64,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",
        disc : "Real Time Code Sharing App"
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