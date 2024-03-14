import { createRoot } from "react-dom/client";
import "./ThreejsTest.css";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls, MarchingCubes, Stats } from "@react-three/drei";

// import Stats from "three/addons/libs/stats.module.js";

// import { GUI } from "three/addons/libs/lil-gui.module.min.js";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import { MarchingCubes } from "three/addons/objects/MarchingCubes.js";
import {
  ToonShader1,
  ToonShader2,
  ToonShaderHatching,
  ToonShaderDotted,
} from "three/addons/shaders/ToonShader.js";

let container, stats;

let camera, scene, renderer;

let materials, current_material;

let light, pointLight, ambientLight;

let effect, resolution;

let effectController;

let time = 0;

const clock = new THREE.Clock();

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

export default function ThreejsTest(props) {
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <div className="ThreejsTest_container">
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
