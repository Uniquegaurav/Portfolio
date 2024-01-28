import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import skyScene from "../assets/3d/winter.glb";

// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export function Winter({ isRotating }) {
const { nodes, materials } = useGLTF(skyScene);
const skyRef = useRef();
  useFrame((_, delta) => {
    if (isRotating && skyRef.current) {
      skyRef.current.rotation.y += 0.25 * delta; // Adjust the rotation speed as needed
    }
  });

  return (
    <group ref={skyRef} dispose={null}>
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.Fairytale_Garden_Background_0.geometry}
        material={materials.Background}
        scale={0.5}
      />
    </group>
  );
}
useGLTF.preload(skyScene);