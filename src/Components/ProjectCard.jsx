import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const ProjectCard = ({ image, title }) => {
  return (
    <Card>
      <Image>
        <img src={image} alt='' />
      </Image>
      <Title
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ color: "#fff1c2", scale: 1.02 }}
      >
        {title}
      </Title>
    </Card>
  );
};

const Card = styled(motion.div)`
  background: url("/textures/vintageborder.svg");
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 260px;
  overflow: hidden;
  max-width: 350px;
  gap: 20px;
  cursor: pointer;
`;

const Image = styled(motion.div)`
  width: 60%;
  /* height: 200px; */
  height: 140px;
  overflow: hidden;
  border: 3px solid rgba(200, 185, 120, 0.4);
  border-radius: 5px;
  @media (max-width: 600px) {
    margin-top: 15px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
  }
`;

const Title = styled(motion.div)`
  font-family: "Cinzel", serif;
  font-size: 1.2rem;
  color: #e8d9a8;

  text-shadow: 0 0 8px rgba(200, 185, 120, 0.5);
  margin: 0;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

export default ProjectCard;
