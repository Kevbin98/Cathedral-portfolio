import { useState } from "react";
import Experience from "./Components/Experience";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import "./App.css";

function App() {
  return (
    <>
      <Canvas>
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
