import React from "react";
import { Bottle } from "./Bottle";

import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import Label from "./Label";

const Bottles = () => {
  const [original, strawberry, plum, grape, grapefruit, blueberry] = useLoader(
    THREE.TextureLoader,
    [
      "/ttokki_ttokki_original.jpg",
      "/ttokki_ttokki_strawberry.jpg",
      "/ttokki_ttokki_plum.jpg",
      "/ttokki_ttokki_grape.jpg",
      "/ttokki_ttokki_grapefruit.jpg",
      "/ttokki_ttokki_blueberry.jpg",
    ]
  );

  return (
    <group>
      <Bottle position={[0, 0, 2]} capColor={"#078700"}>
        <Label map={original} />
      </Bottle>
      <Bottle position={[-2.2, 0, 0]} capColor={"#b10000"}>
        <Label map={strawberry} />
      </Bottle>
      <Bottle position={[-1, 0, 0]} capColor={"#f16701"}>
        <Label map={grapefruit} />
      </Bottle>

      <Bottle position={[0.2, 0, 0]} capColor={"#1a38cb"}>
        <Label map={blueberry} />
      </Bottle>

      <Bottle position={[1.4, 0, 0]} capColor={"#63ff00"}>
        <Label map={grape} />
      </Bottle>
      <Bottle position={[2.6, 0, 0]} capColor={"#2f062d"}>
        <Label map={plum} />
      </Bottle>
    </group>
  );
};

export default Bottles;
