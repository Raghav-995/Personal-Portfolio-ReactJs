import React from "react";
import styled from "styled-components";
import { Zoom } from "react-awesome-reveal";

const Section = styled.section`
  padding: 80px 20px;
  max-width: 1100px;
  margin: auto;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 60px;
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 30px;
  border-left: 3px solid #e5e7eb;
`;

const Card = styled.div`
  position: relative;
  margin-bottom: 50px;
  padding-left: 30px;
`;

const Dot = styled.span`
  position: absolute;
  left: -11px;
  top: 6px;
  width: 16px;
  height: 16px;
  background: #2563eb;
  border-radius: 50%;
`;

const Role = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 6px;
`;

const Company = styled.p`
  font-weight: 600;
  color: #2563eb;
`;

const Duration = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
  margin-bottom: 14px;
`;

const List = styled.ul`
  padding-left: 18px;
`;

const Item = styled.li`
  margin-bottom: 10px;
  line-height: 1.6;
  color: #536480;
`;

const ExperienceSection = () => {
  return (
    <Section id="experience">
        <Zoom>
      <Title>Work <span className="green">Experience</span></Title>
    </Zoom>
      <Timeline>
        {/* CDAC */}
        <Card>
          <Dot />
          <Role>Project Engineer</Role>
          <Company>CDAC</Company>
          <Duration>Jan 2025 – Present</Duration>
          <List>
            <Item>
              Built scalable Spring Boot microservices for a national public-service
              platform serving <strong>50K+ monthly users</strong>.
            </Item>
            <Item>
              Improved <strong>P95 API latency by ~60%</strong> by redesigning caching
              and query patterns; secured APIs using JWT & Spring Security.
            </Item>
            <Item>
              Implemented Docker & Kubernetes-based deployments enabling
              <strong> zero-downtime releases</strong>.
            </Item>
            <Item>
              Integrated Redis caching, reducing DB load by <strong>60%</strong> and
              lowering latency from ~450ms to ~180ms.
            </Item>
            <Item>
              Managed OpenStack infrastructure for national ISEA–MeitY cybersecurity
              virtual lab environments.
            </Item>
          </List>
        </Card>

        {/* NextAstra */}
        <Card>
          <Dot />
          <Role>Full Stack Developer</Role>
          <Company>NextAstra Technologies</Company>
          <Duration>Jul 2024 – Jan 2025</Duration>
          <List>
            <Item>
              Developed a production-grade healthcare web app using
              <strong> React, TypeScript, Spring Boot, and MySQL</strong>.
            </Item>
            <Item>
              Designed REST APIs for appointment scheduling and user management
              with role-based access control.
            </Item>
            <Item>
              Collaborated using Git workflows, contributing to features,
              bug fixes, and code reviews.
            </Item>
          </List>
        </Card>

        {/* IGrand */}
        <Card>
          <Dot />
          <Role>Software Engineer Intern</Role>
          <Company>IGrand IT Solutions</Company>
          <Duration>Dec 2023 – Jun 2024</Duration>
          <List>
            <Item>
              Worked on full-stack feature development across multiple projects
              with senior engineers.
            </Item>
            <Item>
              Improved backend throughput by <strong>~15%</strong> using efficient
              MySQL indexing and query optimization.
            </Item>
            <Item>
              Gained hands-on experience in REST API design, debugging,
              and production issue resolution.
            </Item>
          </List>
        </Card>
      </Timeline>
    </Section>
  );
};

export default ExperienceSection;
