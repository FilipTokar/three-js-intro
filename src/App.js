import './App.scss';
import React from 'react';
import { Canvas } from 'react-three-fiber';
import BlueprintMesh from './Components/BlueprintMesh';

function App() {
  
  return (
    <>
    <Canvas legacy={true} camera={{position: [-5,2, 10], fov:60}}> 
      <ambientLight intensity={0.3}/>
      <BlueprintMesh position={[0,1,0]}/>
      <BlueprintMesh position={[-2,1,-5]}/>
      <BlueprintMesh position={[5,1,-2]}/>
    </Canvas>
    </>
  );
}

export default App;
