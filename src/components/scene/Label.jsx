import { useGLTF } from "@react-three/drei";
import React from "react";
import * as THREE from "three";

const Label = ({ map }) => {
  const { nodes } = useGLTF("/soju.glb");
  map.flipY = false;
  map.wrapS = THREE.RepeatWrapping;
  map.wrapT = THREE.RepeatWrapping;

  return (
    <mesh
      geometry={nodes.Label.geometry}
      position={[0, 1.86, 0]}
      rotation-y={-Math.PI / 4}
      scale={1.01}
    >
      <meshBasicMaterial map={map} side={THREE.DoubleSide} />
    </mesh>
  );
};

export default Label;
