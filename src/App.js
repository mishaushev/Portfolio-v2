import './App.css';
import { Canvas }from 'react-three-fiber'
import { Suspense } from 'react';
import Orbit from './components/Orbit';
import Model from './components/Model';
import Box from './components/Box';
import Floor from './components/Floor';
import Bulb from './components/Bulb';

function App() {

  return (
    <div style={{height: '100vh', width: '100vw'}}>
      <Canvas 
        shadowMap
        style={{background: 'black'}} 
        camera={{position: [4,6,4]}}
      >
        <ambientLight intensity={[0.4]} />
        <Bulb position={[0,3,0]}/>
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
