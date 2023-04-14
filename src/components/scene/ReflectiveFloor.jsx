import { MeshReflectorMaterial } from "@react-three/drei";

const ReflectiveFloor = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[50, 50]} />
      <MeshReflectorMaterial
        blur={[300, 100]}
        resolution={2048}
        mixBlur={1}
        mixStrength={50}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1}
        color="#050505"
        metalness={0.6}
        roughness={1}
      />
    </mesh>
  );
};

export default ReflectiveFloor;
