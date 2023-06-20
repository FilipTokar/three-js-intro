import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import { MeshWobbleMaterial } from "@react-three/drei";

function BlueprintMesh({ position, args, color, speed }) {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.005));

  const [expand, setExpand] = useState(false);
  const [hover, sethover] = useState(false);

  return (
    <mesh
      onClick={() => setExpand(!expand)}
      onPointerOver={() => sethover(true)}
      onPointerOut={() => sethover(false)}
      position={position}
      scale={expand ? 1.4 : 1}
      ref={mesh}
      castShadow
    >
      <boxGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        attach="material"
        color={hover ? "purple" : color}
        speed={speed}
        factor={0.5}
      />
    </mesh>
  );
}

export default BlueprintMesh;
