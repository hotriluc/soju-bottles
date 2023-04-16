import { useHelper } from "@react-three/drei";
import { useRef } from "react";

import * as THREE from "three";

const Lights = () => {
  const spotLightRef = useRef();
  const directionalLightRef = useRef();

  useHelper(spotLightRef, THREE.SpotLightHelper);
  useHelper(directionalLightRef, THREE.DirectionalLightHelper);

  return (
    <>
      <ambientLight />
      <spotLight
        ref={spotLightRef}
        penumbra={1}
        angle={0.35}
        castShadow
        position={[4 * 3, 8 * 3, 0]}
        intensity={15}
        shadow-bias={-0.001}
        shadow-mapSize={[256, 256]}
      />
    </>
  );
};

export default Lights;
