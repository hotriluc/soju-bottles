import { Center, Loader, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Lights from "./components/scene/Lights";
import { Bottle } from "./components/scene/Bottle";
import ReflectiveFloor from "./components/scene/ReflectiveFloor";
import { Suspense } from "react";

const App = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 2, 3.2] }}>
        <OrbitControls />
        <Lights />

        <Suspense fallback={null}>
          <Center>
            <Bottle position={[1, 0, 0]} capColor={"#078700"} />

            <Bottle position={[-2, 0, -0.5]} capColor={"#b10000"} />
            <Bottle position={[-1, 0, -1.5]} capColor={"#860082"} />
            <Bottle position={[0, 0, -2.5]} capColor={"#63ff00"} />
            <Bottle position={[1, 0, -3.5]} capColor={"#ff6900"} />

            {/* #ff6900 */}
            <ReflectiveFloor />
          </Center>
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default App;
