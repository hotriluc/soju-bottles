import React, { useRef, useState } from "react";
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
    // uDecreaseVolume: 0.0,
  },
  liquidVertexMaterial,
  liquidFragmentMaterial
);
extend({ LiquidMaterial });

export function Bottle(props) {
  const liquidMaterialRef = useRef();
  const bottleRef = useRef();
  const liquidRef = useRef();
  const [hovered, setHovered] = useState(false);

  const { nodes, materials } = useGLTF("/soju.glb");
  const bottleConfig = useControls("Bottle", {
    color: "#91ff69",

    // transmission: { value: 1, min: 0, max: 1 },
    // clearcoat: { value: 1, min: 0, max: 1 },
    // thickness: { value: 0.12, min: 0, max: 1 },
    // roughness: { value: 0, min: 0, max: 1 },
    // ior: { value: 1.5, min: 1, max: 5, step: 0.01 },
  });

  const capConfig = useControls("Cap", {
    roughness: { value: 0.26, min: 0, max: 1 },
    metalness: { value: 1, min: 0, max: 1 },
  });

  useFrame((state, delta) => {
    const et = state.clock.getElapsedTime();
    liquidMaterialRef.current.uTime = et;
    bottleRef.current.position.y = THREE.MathUtils.damp(
      bottleRef.current.position.y,
      hovered ? 1 : 0,
      6,
      delta
    );
    bottleRef.current.rotation.y = THREE.MathUtils.damp(
      bottleRef.current.rotation.y,
      hovered ? -0.5 : 0,
      6,
      delta
    );
  });

  return (
    <group
      ref={bottleRef}
      {...props}
      dispose={null}
      onPointerEnter={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerLeave={() => setHovered(false)}
    >
      <mesh geometry={nodes.Bottle.geometry} position={[0, 1.86, 0]}>
        <MeshTransmissionMaterial
          {...bottleConfig}
          transmission={1}
          clearcoatMap={1}
          thickness={0.12}
          roughness={0}
          ior={1.5}
        />
      </mesh>

      <mesh
        geometry={nodes.Liquid.geometry}
        position={[0, 1.25, 0]}
        scale={0.99}
        ref={liquidMaterialRef}
      >
        <liquidMaterial transparent ref={liquidMaterialRef} />
      </mesh>

      <mesh geometry={nodes.Cap.geometry} position={[0, 2.9, 0]} scale={0.97}>
        <meshStandardMaterial {...capConfig} color={props.capColor} />
      </mesh>

      {props.children}
    </group>
  );
}

useGLTF.preload("/soju.glb");
