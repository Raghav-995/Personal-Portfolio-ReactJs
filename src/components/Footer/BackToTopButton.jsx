import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: none;
  background: #2563eb;
  color: white;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.35);
  opacity: ${(props) => (props.visible ? "1" : "0")};
  pointer-events: ${(props) => (props.visible ? "auto" : "none")};
  transition: all 0.3s ease;
  z-index: 1000;

  &:hover {
    transform: translateY(-4px);
    background: #1d4ed8;
  }
`;

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button onClick={scrollToTop} visible={visible}>
      ↑
    </Button>
  );
};

export default BackToTopButton;
