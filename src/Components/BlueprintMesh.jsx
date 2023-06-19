import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'

function BluepringMesh({position}) {
    const mesh = useRef(null)
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.005))
  return (
    <mesh position={position} ref={mesh}>
        <boxGeometry attach="geometry" args={[1,1,1]}/>
        <meshStandardMaterial attach="material" color="pink"/>
    </mesh>
  )
}

export default BluepringMesh
