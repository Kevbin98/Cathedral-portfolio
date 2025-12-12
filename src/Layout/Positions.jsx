import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Positions = ({ setTarget }) => {
  return (
    <Main>
      <Border>
        <NavText whileHover={{ color: "#fff1c2" }}>Previous</NavText>
        <Center>Positions</Center>
        <NavText
          onClick={() => setTarget("position1")}
          whileHover={{ color: "#fff1c2" }}
        >
          Next
        </NavText>
      </Border>
    </Main>
  );
};

const Main = styled(motion.div)`
  position: fixed;
  bottom: 2%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(20, 15, 10, 0.35);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(200, 185, 120, 0.4);
  border-radius: 10px;
  width: 360px;
  display: flex;
  padding: 5px;
  justify-content: space-between;
  @media (max-width: 600px) {
    width: 70vw;
    bottom: 0;
  }
`;

const Border = styled(motion.div)`
  width: 100%;
  min-height: 60px;

  border: 30px solid transparent;
  border-image: url("/textures/vintageborder.svg") 250 fill stretch;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
`;

const Center = styled(motion.div)`
  font-size: 1.3rem;
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const NavText = styled(motion.div)`
  cursor: pointer;
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export default Positions;
