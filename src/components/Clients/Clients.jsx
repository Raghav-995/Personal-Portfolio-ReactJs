import React, { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import ClientSlider from './ClientSlider';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from 'react-awesome-reveal';

let clients = [
    {
        name : "BHARAT Engineering College",
        position : "B.Tech Computer Sceince and Engineering,Hyderabad",
        img_url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP4LkNbmNz6s7F_CSzlrGGuBrWdG0K0RuEDA&usqp=CAU",
        stars : 3,
        disc : `I have successfully graduated and completed my B-tech in CSE by scoring 70%. I have learnt Python, MySql, DSA,Java, OS, Compiler Design etc.`
    },
    {
        name : "Narayana Junior College",
        position : "State board of Intermediate,Hyderabad",
        img_url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0PcMWZtTLrb_JPKtrrzxBcQOrdr1Ymqlg0g&usqp=CAU",
        stars : 4,
        disc : `I have successfully completed my Inter by scoring 95.9% from this junior college. I have learnt Maths, Chemistry and Physics subjects etc.`
    },
    {
        name : "Lord's talent High School",
        position : "State Board Upper Primary School,Badangpet",
        img_url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3H21EZlc49601YyoinlXEx3uK9rHuHdQ4Pg&usqp=CAU",
        stars : 5,
        disc : `I have successfully completed my 10th standard by scoring 90% from this school. I have learnt Verbal Communication, Social activities etc.`
    },
    {
        name : "Self Study through Social platforms",
        position : "Reactjs,Flutter,Python and also many other things",
        img_url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHv_WahJRSQ_SSyRYned9VwGZoZyx5kgJQQ&usqp=CAU",
        stars : 5,
        disc : `I am self motivated guy and also being versatile to learn new things and can handle any situation to comethrough it and be straightforward.`
    },
]
var settings = {
    dots: true,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]}

const Clients = () => {
    const arrowRef = useRef(null);
    let clientDisc = "";
    clientDisc = clients.map((item, i) => (
        <ClientSlider item={item} key={i}/>
    ))
  return (
    <Container id='client'>
        <Slide direction="left">
            <span className="green">education</span>
            <h1>my past education</h1>
        </Slide>
        <Testimonials>
            <Slider ref={arrowRef} {...settings}>
                {clientDisc}
            </Slider>
            <Buttons>
                <button
                onClick={() => arrowRef.current.slickPrev()}
                ><IoIosArrowBack/></button>
                <button
                onClick={() => arrowRef.current.slickNext()}
                ><IoIosArrowForward/></button>
            </Buttons>
        </Testimonials>
    </Container>
  )
}

export default Clients

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width:840px){
        width: 90%;
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
    }

    h1{
        padding-top: 1rem;
        text-transform: capitalize;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #01be96;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`

const Testimonials = styled.div`
    margin-top: 2rem;
    position: relative;
`
const Buttons = styled.div`
    position: absolute;
    right: 0.7rem;
    bottom: -2rem;

    button{
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: #01be96;
        cursor: pointer;
        font-size: 1.1rem;
    }

    @media(max-width:530px){
        display: none;
    }
`