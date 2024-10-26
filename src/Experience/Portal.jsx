import{ useRef } from "react";
import Bridge from "./Bridge";
import * as THREE from "three";
import MyCurve from "./MyCurve";

import { GradientTexture, MeshPortalMaterial } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';

const Portal = () => {
  const portalRef = useRef(null);

  useFrame(({ camera }) => {

    if(camera.position.z < 3) {
      portalRef.current.blend = 1;
    }
    
    if(camera.position.z > 3 && portalRef.current.blend !== 0) {
      portalRef.current.blend = 0;
    }

  });

  return (
    <mesh>
        <circleGeometry args={[10,32]} />
        <MeshPortalMaterial transparent={0} blend={0} ref={portalRef} >
          <group>
            <mesh position={[0, 0, -50]}>
              <sphereGeometry args={[100,32]}  />
              <meshBasicMaterial side={THREE.DoubleSide}>
                <GradientTexture
                  stops={[0, 0.3, 1]}
                  colors={["#000000", "#00368c", "#75e3ff"]}
                  size={1024}
                />
              </meshBasicMaterial>
            </mesh>

            <ambientLight intensity={2} color={"lightblue"} />
            <directionalLight
              intensity={2}
              position={[3, 10, 10]}
            />

            <Bridge/>
            <MyCurve />
          </group>
        </MeshPortalMaterial>
      </mesh>
  )
}

export default Portal