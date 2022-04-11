import './App.css';
import { Canvas, 
  useFrame, 
  useThree, 
  extend,
  useLoader }from 'react-three-fiber'
import {useRef, Suspense } from 'react';
import { 
  OrbitControls
 } from 'three/examples/jsm/controls/OrbitControls';
extend({ OrbitControls });

const Orbit = () => {
  const { camera, gl } = useThree();
  return (
    <orbitControls args={[camera, gl.domElement]}/>
  )
}

const Box = props => {
  const ref = useRef();

  useFrame(state => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;

  })
    return(
      <mesh 
        ref={ref} 
        {...props} 
        castShadow 
        receiveShadow
      >
        <boxBufferGeometry/>
        <meshPhysicalMaterial 
          color='blue'/>
          fog={false}
      </mesh>
  )
}

const Floor = props => {
  return (
    <mesh {...props} receiveShadow>
      <boxBufferGeometry args={[10,2,10]}/>
      <meshPhysicalMaterial />
    </mesh>
  )
}

const Bulb = props => {
  return (
    <mesh {...props}>
      <pointLight castShadow/>
      <sphereBufferGeometry args={[0.2, 20, 20]}/>
      <meshPhongMaterial emissive='yellow'/>
    </mesh>
  )
}

function App() {

  return (
    <div style={{height: '100vh', width: '100vw'}}>
      <Canvas 
        shadowMap
        style={{background: 'black'}} 
        camera={{position: [3,3,3]}}
      >
        <fog attach='fog' args={['white', 1, 10]}/>
        <ambientLight intensity={[0.4]} />
        <Bulb position={[0,3,0]}/>
        <Orbit />
        <axesHelper args={[5]}/>
        <Suspense fallback={null}>
          <Box position={[0,2,0]}/>
        </Suspense>
        <Floor />
      </Canvas>
    </div>
  );
}

export default App;
