import "./App.scss";
import React from "react";
import { Canvas } from "react-three-fiber";
import BlueprintMesh from "./Components/BlueprintMesh";
import { SoftShadows, OrbitControls } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas legacy={true} camera={{ position: [-5, 2, 10], fov: 60 }} shadows>
        <SoftShadows
          opacity={0.2}
          width={1024}
          height={1024}
          blur={2}
          bias={-0.0001}
        />
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize={[1024, 1024]}
          shadow-radius={8}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <group>
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
          >
            <planeGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity={0.3} />
          </mesh>
          <BlueprintMesh
            position={[0, 1, 0]}
            args={[3, 2, 1]}
            color="blue"
            speed={2}
          />
          <BlueprintMesh position={[-2, 1, -5]} color="red" speed={5} />
          <BlueprintMesh position={[5, 1, -2]} color="hotpink" speed={5} />
        </group>

        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
