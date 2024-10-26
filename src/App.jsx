import './App.css'
import { Suspense } from 'react'
import Experience from './Experience'
import { Canvas } from '@react-three/fiber'
import { ScrollControls } from '@react-three/drei'

function App() {

  return (
    <Suspense fallback={<></>}>
      <Canvas camera={{ fov: 80  }} >
        <ScrollControls pages={4} damping={0.5} >
          <Experience/>
        </ScrollControls>
      </Canvas>
    </Suspense>
  )
}

export default App
