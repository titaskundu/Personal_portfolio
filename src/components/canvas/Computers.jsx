import {Suspense,useEffect,useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls,Preload,useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = () => {
  const computer= useGLTF("./headphones/scene.gltf");
  
  return (
    <mesh>
      <hemisphereLight intensity={0.15}
      groundColor="black"/>
      <pointLight intensity={1}/>
      <primitive object={computer.scene}
       scale={6}
       position={[0.1, -3.7, -1.5]}
       rotation={[-0.09,-3,-0.06]} />
    </mesh>
  );
};
const ComputersCanvas =()=>{
  return (
    <Canvas
     frameloop="demand"
     shadows
     camera={{position:[25,3,10], fov:25}}
     gl={{preserveDrawingBuffer:true}}>
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
          enableZoom={false}
          autoRotate
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
          autoRotateSpeed={10}
          
          />
        <Computers/>
      </Suspense>
      <Preload all/>
    </Canvas>
  );
};

export default ComputersCanvas;