import React, { useLayoutEffect, useRef, useState } from "react";

import * as THREE from "three";
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette, Glitch } from '@react-three/postprocessing';
import { GlitchMode } from "postprocessing";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls, OrthographicCamera, Environment } from "@react-three/drei";

import "./index.css";
import LOGO_MODEL from "../../Assets/Models/capsule.glb";

const LogoPill = () => {
  const [mouse, setMouse] = useState([0, 0]);

  const onMove = (e) => {
    const canvasBounds = e.target.getBoundingClientRect();
    const mouseX = e.clientX - canvasBounds.left;
    const mouseY = e.clientY - canvasBounds.top;
  
    if (mouseX >= 0 && mouseX <= canvasBounds.width && mouseY >= 0 && mouseY <= canvasBounds.height) {
      setMouse([(mouseX / canvasBounds.width) * 2 - 1, -(mouseY / canvasBounds.height) * 2 + 1]);
    }
  };

  const Model = () => {
    const model = useGLTF(LOGO_MODEL);
    const modelRef = useRef();

    useLayoutEffect(() => {
      const box = new THREE.Box3().setFromObject(modelRef.current);
      const center = box.getCenter(new THREE.Vector3());

      modelRef.current.position.set(-center.x, -center.y, -center.z);
    }, [model]);

    return (
      <group ref={modelRef}>
        <primitive object={model.scene} />
      </group>
    );
  };

  const CameraControls = () => {
    const { gl, camera } = useThree();

    useFrame(() => {
        if (window.innerWidth >= 690) {
            camera.position.x += mouse[0] * 0.15;
            camera.position.y += -mouse[1] * 0.15;
        
            // Limit camera movement along x-axis
            if (camera.position.x > 20) {
              camera.position.x = 20;
            } else if (camera.position.x < -20) {
              camera.position.x = -20;
            }
        
            // Limit camera movement along y-axis
            if (camera.position.y > 20) {
              camera.position.y = 20;
            } else if (camera.position.y < -20) {
              camera.position.y = -20;
            }
        
            camera.lookAt(new THREE.Vector3(0, 0, 0));
        }
    });
  
    return null;
  };

  return (
    <>
      <Canvas id="logo-canvas" onMouseMove={onMove} camera={{ position: [0, 0, 30]}}>
        <Model />
        <Environment preset="sunset" />
        <CameraControls />
        <OrbitControls enableZoom={false}/>
        <EffectComposer>
            <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.5} />
            <Noise opacity={1} />
            <Vignette eskil={true} offset={0} darkness={1} />
            {/* <Glitch duration={[0.1, 0.2]} mode={GlitchMode.SPORADIC} ratio={0.85}/> */}
        </EffectComposer>
      </Canvas>
    </>
  );
};

export default LogoPill;