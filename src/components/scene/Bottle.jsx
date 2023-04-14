import React, { useRef } from "react";
import * as THREE from "three";

import {
  MeshTransmissionMaterial,
  shaderMaterial,
  useGLTF,
} from "@react-three/drei";
import { useControls } from "leva";
import { extend, useFrame } from "@react-three/fiber";

import liquidVertexMaterial from "../../materials/liquid/vertex.glsl";
import liquidFragmentMaterial from "../../materials/liquid/fragment.glsl";

const LiquidMaterial = shaderMaterial(
  {
    uTime: 0,
    uDecreaseVolume: 0.0,
  },
  liquidVertexMaterial,
  liquidFragmentMaterial
);
extend({ LiquidMaterial });

export function Bottle(props) {
  const liquidRef = useRef();
  const { nodes, materials } = useGLTF("/soju.glb");

  const { decreaseVolume } = useControls({
    decreaseVolume: { min: 0, max: 2.5, step: 0.1, value: 0 },
  });
  //66ff00
  const bottleConfig = useControls("Bottle", {
    color: "#ffffff",

    transmission: { value: 1, min: 0, max: 1 },
    clearcoat: { value: 1, min: 0, max: 1 },
    thickness: { value: 0, min: 0, max: 1 },
    roughness: { value: 0, min: 0, max: 1 },
    ior: { value: 1.5, min: 1, max: 5, step: 0.01 },
  });

  const capConfig = useControls("Cap", {
    color: "red",
    roughness: { value: 0.26, min: 0, max: 1 },
    metalness: { value: 1, min: 0, max: 1 },
  });

  useFrame((state) => {
    const et = state.clock.getElapsedTime();
    liquidRef.current.uTime = et;
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bottle.geometry}
        position={[0, 1.86, 0]}
      >
        <MeshTransmissionMaterial {...bottleConfig} />
      </mesh>
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials["Bottle Material"]}
        position={[0, 2.72, 0]}
        rotation={[Math.PI, -0.06, Math.PI]}
        scale={0.38}
      />

      <mesh
        geometry={nodes.Liquid.geometry}
        position={[0, 1.25, 0]}
        scale={0.99}
      >
        <liquidMaterial
          ref={liquidRef}
          transparent
          uDecreaseVolume={decreaseVolume}
          side={THREE.BackSide}
        />
      </mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cap.geometry}
        position={[0, 2.9, 0]}
        scale={0.97}
      >
        <meshStandardMaterial {...capConfig} color={props.capColor} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/soju.glb");
