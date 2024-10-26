import * as THREE from 'three';
import { useScroll } from '@react-three/drei';
import { useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

const curvePoints = [
  [0.00, 0.40, 26.33],
  [0.00, 0.40, 21.87],
  [3.31, 1.53, 5.64],
  [3.49, 1.53, 2.34],
  [3.32, 1.55, -0.96],
  [1.66, 1.88, -14.43],
  [1.46, 1.92, -17.72],
  [1.57, 1.84, -21.00],
  [2.38, 0.69, -30.00],
  [2.62, 0.03, -34.78],
  [2.80, -0.49, -39.15],
  [1.41, -1.14, -48.29],
  [-1.75, -1.07, -60.83],
  [-2.21, -1.64, -76.27],
];



const MyCurve = () => {
  const { camera } = useThree();
  const scroll = useScroll();

  const points = new THREE.CatmullRomCurve3(
    curvePoints.map(p => new THREE.Vector3(p[0], p[1], p[2]))
  );

  const curve = useMemo(() => points.getPoints(1000),[]);

  const geometry = new THREE.BufferGeometry().setFromPoints( curve );
  const material = new THREE.LineBasicMaterial( { color: 0xff0000 } );


  useFrame(() => {

    const { offset } = scroll

    const pos = Math.floor(offset  * curve.length)
    const curvePoint = curve[pos];

    if(curve.length - 5 < pos || !curvePoint ) return;

    camera.position.set(curvePoint.x, curvePoint.y + 0.3, curvePoint.z + 3);
    
  })

  return (
    <>
      {/* <line material={material} geometry={geometry} /> */}
    </>
  )
  
}

export default MyCurve