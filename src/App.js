import './App.css';
import { Canvas, useThree }from 'react-three-fiber'
import * as THREE from 'three'
import { Suspense } from 'react';
import Orbit from './components/Orbit';
import Model from './components/Model';
import Floor from './components/Floor';
import Bulb from './components/Bulb';
import ModelKey from './components/ModelArray';

const handelePointerDown = e => {
  console.log(e)
}

function App() {

  return (
    <div style={{height: '100vh', width: '100vw'}}>
      <div style={{position: 'absolute', zIndex: 1}}>
        <div onPointerDown={handelePointerDown}
          style={{
            background:'blue',
            height: 50,
            width: 50
          }}
          ></div>
        <div
          style={{
            background:'yellow',
            height: 50,
            width: 50
          }}
        ></div>
        <div
          style={{
            background:'green',
            height: 50,
            width: 50
          }}
        ></div>
      </div>
      
        <Canvas 
          shadowMap
          style={{background: 'black'}} 
          camera={{position: [4,6,4]}}
        >
          <ambientLight intensity={[0.2]} />
          <Bulb position={[2,9,0]}/>
          <Suspense fallback={null}>
            <Model path='/Cotton Candy/Buggy Guy/_Buggy Guy.gltf'
              scale={new Array(3).fill(0.1)}
              position={[0,0.6,0]}
            />
          </Suspense>
          <Orbit />
          <axesHelper args={[5]}/>
          <Floor />
        </Canvas>
    </div>
  );
}

export default App;
