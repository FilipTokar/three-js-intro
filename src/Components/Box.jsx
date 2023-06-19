import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'

function Box() {
    const mesh = useRef(null)
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  return (
    <mesh ref={mesh}>
        <boxGeometry attach="geometry" args={[1,1,1]}/>
        <meshStandardMaterial attach="material"/>
      </mesh>
  )
}

export default Box
