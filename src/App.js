import './App.scss';
import React from 'react';
import { Canvas } from 'react-three-fiber';

function App() {
  return (
    <>
    <Canvas>
      <mesh>
        <boxBufferGeometry attach="geometry" args={[1,1,1]}/>
        
      </mesh>
    </Canvas>
    </>
  );
}

export default App;
