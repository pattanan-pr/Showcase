import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
// import {
//   EffectComposer,
//   DepthOfField,
//   Bloom,
//   ChromaticAberration,
// } from "@react-three/postprocessing";
// import { BlendFunction } from "postprocessing";
import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import "./style.css";


function CarShow() {
  return (
    <>
      <OrbitControls 
        target={[0, 0.35, 0]}
        maxPolarAngle={1.45}
      />

      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

     <mesh>
      <boxGeometry args={[1,1,1]}/>
      <meshBasicMaterial color={'pink'} />
    </mesh>
    </>
  );
}

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow />
      </Canvas>
    </Suspense>
  );
}

export default App;