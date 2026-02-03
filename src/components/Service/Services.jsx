import React from "react";
// import {SiFlutter } from "react-icons/si";
// import { FiCodesandbox } from "react-icons/fi";
import { FaCloud, FaJava, FaPython } from "react-icons/fa";
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
            title={"Python & AI"}
            disc={`Creating Python applications, AI agents using the Flask, Pandas, Pytorch, Tensorflow, Ollama, OpenAI, Gemini apis etc. `}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FaJava}
            title={"Java Full Stack Developer"}
            disc={`I am currently working and building CyberSecurity Applications using Java Spring Boot, Reactjs, Mongodb, OpenStack Cloud, Docker, Terraform.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={FaCloud}
            title={"Cloud & Devops"}
            disc={`Creating Containers using Docker, creating Pods using the Kubernetes and deploying k8, scaling to the AWS, OpenStack cloud.`}
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
