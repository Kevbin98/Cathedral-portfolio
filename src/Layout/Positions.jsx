import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Positions = ({ setTarget }) => {
  return (
    <Main>
      <Border>
        {/* <NavText whileHover={{ color: "#fff1c2" }}>Previous</NavText> */}
        <Center>Camera Positions</Center>
        <NavText
          // onClick={() => setTarget("position1")}
          whileHover={{ color: "#fff1c2" }}
        >
          <p onClick={() => setTarget("position1")}>1</p>
          <p onClick={() => setTarget("position2")}>2</p>
          <p onClick={() => setTarget("position3")}>3</p>
          <p onClick={() => setTarget("position4")}>4</p>
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
  width: 350px;
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
  flex-direction: column;
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
  display: flex;
  justify-content: space-around;
  width: 100%;
  font-size: 1.2rem;
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }

  p {
    transition: 0.25s ease;
  }
  p:hover {
    text-shadow: 0 0 15px rgba(255, 241, 194, 1);
    transform: translateY(-5px);
  }
`;

export default Positions;
