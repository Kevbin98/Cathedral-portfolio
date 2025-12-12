import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { IoVolumeMediumSharp, IoVolumeMute } from "react-icons/io5";
import { content } from "../Content/content";
import ProjectCard from "../Components/ProjectCard";
import Water from "../assets/WaterVisualizer.png";

const Projects = () => {
  return (
    <Main>
      <h1>Projects</h1>
      <Grid>
        <ProjectCard
          image={Water}
          title='Water Audio Visaulizer'
          tech='three.js'
        />
      </Grid>
    </Main>
  );
};

const Main = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Grid = styled(motion.div)``;

export default Projects;
