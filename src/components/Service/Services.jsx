import React from "react";
import {SiFlutter } from "react-icons/si";
import { FiCodesandbox } from "react-icons/fi";
import { FaPython } from "react-icons/fa";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">Work</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={FaPython}
            title={"Python"}
            disc={`I learned python programming language and many of it's frameworks like flask,django,pandas,matplotlib etc. `}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"Full Stack Developer"}
            disc={`I am currently learning and building projects using Nodejs-Expressjs-Reactjs-Mongodb which is MERN Stack`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={SiFlutter}
            title={"Flutter Beginner"}
            disc={`I am entuastic guy prefer to work and also versatile. So I started learning flutter from scratch and trying to build projects.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
