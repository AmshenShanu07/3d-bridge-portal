import React, { useEffect, useRef } from "react";
import * as THREE from "three";

import {
  Cloud,
  Clouds,
  Gltf,
  GradientTexture,
  Text,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import Portal from "./Portal";
import { EffectComposer, Noise } from '@react-three/postprocessing';

const Experience = () => {
  const { camera, scene  } = useThree();

  useEffect(() => {
    const onMouseMove = (e) => {
      const xPos = e.clientX / innerWidth - 0.5;
      const yPos = e.clientY / innerHeight - 0.5;

      const crntDir = new THREE.Vector3();
      crntDir.applyQuaternion(camera.quaternion);
      camera.lookAt(new THREE.Vector3(xPos * 10, -yPos * 10, -100));
    };

    addEventListener("mousemove", onMouseMove);
    () => removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <>
      <ambientLight intensity={2} color={"lightblue"} />
      <directionalLight intensity={5} position={[3, 10, 10]} />

      <Text position-z={23} anchorX="center" anchorY="middle" >
        Portal Bridge
      </Text>

      <EffectComposer>
        <Noise opacity={0.2} />
      </EffectComposer>

      <mesh position={[0, 0, -50]}>
        <sphereGeometry args={[200, 32]} />
        <meshBasicMaterial side={THREE.DoubleSide}>
          <GradientTexture
            stops={[0, 0.3, 1]}
            colors={["#000000", "#ffc996", "#ffa14a"]}
            size={1024}
          />
        </meshBasicMaterial>
      </mesh>

      <Clouds material={THREE.MeshBasicMaterial} position={[0, -10, 20]}>
        <Cloud seed={1} scale={2} volume={5} color="#ffeeb0" position-y={17} />
        <Cloud segments={40} bounds={[-5, 2, 2]} volume={10} color="#ffeeb0" />
      </Clouds>

      <Portal />
      <Gltf src="./model/ring.glb" scale={1.2} position={[0, 0, -10]} />
    </>
  );
};

export default Experience;
