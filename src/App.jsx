import {
  Center,
  Loader,
  OrbitControls,
  PresentationControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Lights from "./components/scene/Lights";
import ReflectiveFloor from "./components/scene/ReflectiveFloor";
import { Suspense } from "react";
import { Perf } from "r3f-perf";
import Bottles from "./components/scene/Bottles";

const App = () => {
  return (
    <>
      <Canvas dpr={[1, 1.5]} camera={{ position: [-3.5, 1, 2.8] }}>
        <Perf position="top-left" />
        <OrbitControls
          minDistance={3}
          maxDistance={10}
          minAzimuthAngle={-Math.PI / 2}
          maxAzimuthAngle={Math.PI / 3}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          enablePan={false}
        />
        <Lights />

        <Suspense fallback={null}>
          <Center>
            {/* <PresentationControls global snap={true}> */}
            <Bottles />
            {/* </PresentationControls> */}
            <ReflectiveFloor />
          </Center>
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default App;
