

import { useGLTF } from '@react-three/drei'
import { MeshToonMaterial } from 'three';
import portalVertexShader from '../shaders/portal.vertex.glsl'
import portalFragmentShader from '../shaders/portal.fragment.glsl'
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Bridge = (props) =>  {
  const { nodes } = useGLTF('./model/bridge.glb');
  const portalRef = useRef();

  useFrame(({ clock }) => {
    if(portalRef.current)
      portalRef.current.material.uniforms.uTime.value = clock.getElapsedTime();;
  });
  
  const material = new MeshToonMaterial({ color: '#9ca0a6' });


  return (
    <group {...props} dispose={null} >
      
      <mesh position={[ -2, 0,-81]} ref={portalRef} >
        <circleGeometry args={[6,32]} />
        <shaderMaterial
          vertexShader={portalVertexShader}
          fragmentShader={portalFragmentShader}
          uniforms={{ uTime: { value: 0 } }}
        />
      </mesh>
      
      <mesh name="Building001" geometry={nodes.Building001.geometry} material={material} />
      <mesh name="Ring001" geometry={nodes.Ring002.geometry} material={material} />
      <mesh name="Tower" geometry={nodes.Tower.geometry} material={material} />
      <mesh name="Bfidge" geometry={nodes.Bfidge.geometry} material={material} />
      <mesh name="Mush003" geometry={nodes.Mush003.geometry} material={material} />
      <mesh name="Mush004" geometry={nodes.Mush004.geometry} material={material} />
      <mesh name="Building" geometry={nodes.Building.geometry} material={material} />
      <mesh name="Ring" geometry={nodes.Ring001.geometry} material={material} />
      <mesh name="Ring" geometry={nodes.Building004.geometry} material={material} />
      <mesh name="Building002" geometry={nodes.Building002.geometry} material={material} />
      <mesh name="Mush008" geometry={nodes.Mush008.geometry} material={material} />
      <mesh name="Mush007" geometry={nodes.Mush007.geometry} material={material} />
      <mesh name="Mush009" geometry={nodes.Mush009.geometry} material={material} />
      <mesh name="Mush006" geometry={nodes.Mush006.geometry} material={material} />
      <mesh name="Tower001" geometry={nodes.Tower001.geometry} material={material} />
      <mesh name="Circle011" geometry={nodes.Circle011.geometry} material={material} />
      <mesh name="Mush001" geometry={nodes.Mush001.geometry} material={material} />
      <mesh name="Mush002" geometry={nodes.Mush002.geometry} material={material} />
      <mesh name="Building003" geometry={nodes.Building003.geometry} material={material} />
      <mesh name="Mush005" geometry={nodes.Mush005.geometry} material={material} />
      <mesh name="Mush" geometry={nodes.Mush.geometry} material={material} />
      <mesh name="Circle013" geometry={nodes.Circle013.geometry} material={material} />
      {/* <mesh name="Circle014" geometry={nodes.Circle014.geometry} material={portalMaterial} /> */}
      <mesh name="Ring003" geometry={nodes.Ring003.geometry} material={material} />
    </group>
  )
}

useGLTF.preload('./model/bridge.glb');

export default Bridge;
