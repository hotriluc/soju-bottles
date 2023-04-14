import { Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Lights from "./components/scene/Lights";
import { Model } from "./components/scene/Model";
import ReflectiveFloor from "./components/scene/ReflectiveFloor";

const App = () => {
  return (
    <Canvas camera={{ position: [0, 0, 2.2] }}>
      <OrbitControls />

      <Center>
        <Lights />
        <Model />
        <ReflectiveFloor />
      </Center>
    </Canvas>
  );
};

export default App;
