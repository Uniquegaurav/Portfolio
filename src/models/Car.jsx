
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import carScene from "../assets/3d/chinese_flying_car.glb";

export function Car(props) {
  const { nodes, materials } = useGLTF(carScene);
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.Araba}
            position={[589.291, 2577.41, -1344.867]}
            rotation={[-1.783, 0.17, 0.036]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.Araba}
            position={[-560.84, 1766.281, -1530.253]}
            rotation={[0, 0.466, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_2.geometry}
            material={materials.Araba}
            position={[0, 1120.979, -395.735]}
            rotation={[-0.537, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_3.geometry}
            material={materials.Araba}
            position={[381.78, 1055.072, -297.591]}
            rotation={[2.156, -1.117, 3.03]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_4.geometry}
            material={materials.Araba}
            position={[-380.589, 1055.072, -297.591]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_5.geometry}
            material={materials.Araba}
            position={[0, 705.68, -318.538]}
            rotation={[-1.038, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_6.geometry}
            material={materials.Araba}
            position={[5.613, 703.863, -331.296]}
            rotation={[-1.038, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_7.geometry}
            material={materials.Araba}
            position={[193.58, 784.486, 51.002]}
            rotation={[-Math.PI, 1.259, Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_8.geometry}
            material={materials.Araba}
            position={[-188.194, 784.486, 59.708]}
            rotation={[0, 1.214, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_9.geometry}
            material={materials.Araba}
            position={[0, 645.046, 60.322]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_10.geometry}
            material={materials.Araba}
            position={[0, 785.368, 83.255]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_11.geometry}
            material={materials.Araba}
            position={[382.231, 876.382, -218.014]}
            rotation={[0, 0.271, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_12.geometry}
            material={materials.Araba}
            position={[-368.392, 876.382, -187.007]}
            rotation={[0, -0.337, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_13.geometry}
            material={materials.Araba}
            position={[231.791, 982.878, 23.559]}
            rotation={[-Math.PI / 2, 0, 0.237]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_14.geometry}
            material={materials.Araba}
            position={[-230.909, 982.878, 23.716]}
            rotation={[-Math.PI / 2, 0, -0.197]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_15.geometry}
            material={materials.Araba}
            position={[0, 826.105, -176.569]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_16.geometry}
            material={materials.Araba}
            position={[0, 1227.605, -1420.448]}
            rotation={[-1.808, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_17.geometry}
            material={materials.Araba}
            position={[0, 705.68, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("../assets/3d/chinese_flying_car.glb");
