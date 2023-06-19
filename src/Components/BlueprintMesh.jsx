import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'

function BluepringMesh({position, args, color}) {
    const mesh = useRef(null)
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.005))
  return (
    <mesh position={position} ref={mesh} castShadow>
        <boxGeometry attach="geometry" args={args}/>
        <meshStandardMaterial attach="material" color={color}/>
    </mesh>
  )
}

export default BluepringMesh
