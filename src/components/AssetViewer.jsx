import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { XR, createXRStore, XROrigin, useXR } from '@react-three/xr';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';

// Actual model loading component
function Model({ modelPath }) {
  const { scene } = useGLTF(modelPath);
  // You might need to clone the scene if you reuse it to avoid issues with disposal
  return <primitive object={scene.clone()} dispose={null} position={[0.0, 0.0, -0.5]} scale={1.0} />;
  // Adjust scale based on your model's original size, e.g., scale={0.01}
}

function XRButtonListener() {
  const { session } = useXR();
  React.useEffect(() => {
    if (!session) return;
    let ended = false;
    const checkButtons = () => {
      if (!session || ended) return;
      for (const inputSource of session.inputSources) {
        if (inputSource && inputSource.gamepad && inputSource.gamepad.buttons) {
          // Press 'B' or 'Y' button to exit XR
          if (inputSource.gamepad.buttons[5]?.pressed) {
            session.end();
            ended = true;
            return;
          }
        }
      }
      if (!ended) {
        session.requestAnimationFrame(checkButtons);
      }
    };
    session.requestAnimationFrame(checkButtons);
    return () => {
      ended = true;
    };
  }, [session]);
  return null;
}

const AssetViewer = ({ modelPath }) => {
  const xrStore = createXRStore();
  return (
    <div style={{ height: '300px', width: '100%', background: '#111', borderRadius: '8px', marginBottom: '15px', position: 'relative', touchAction: 'none' }}>
      <Canvas
        gl={{ physicallyCorrectLights: true }} // For more realistic lighting with XR
        onCreated={({ gl }) => {
          // Ensure WebGL context is compatible with WebXR
          // This is often handled by R3F/XR, but good to be aware of
        }}
        shadows // Enable shadows
        camera={{fov: 75, aspect: 1, near: 0.01, far: 1000, position: [0.0, 0.0, 0.0]}} // Adjust camera position & FOV as needed
        style={{ borderRadius: '8px' }}
      >
        <XR store={xrStore}>
          <XROrigin position={[0, -1.2, 0]} />
          <XRButtonListener />
          <ambientLight intensity={0.7} />
          <directionalLight
            castShadow
            position={[8, 10, 5]} // Adjusted light position
            intensity={1.2}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <pointLight position={[-8, -5, -5]} intensity={0.6} color="#ffdab9" /> {/* Softer point light */}
          <Suspense fallback={null}> {/* Simple fallback, consider a <Loader /> from drei */}
            <Model modelPath={modelPath} />
            <Environment preset="city" /> {/* Environment lighting and background */}
          </Suspense>
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            minDistance={0} // Adjust as needed
            maxDistance={15} // Adjust as needed
            target={[0.0, 0.0, -0.5]} // Center the controls around your model's typical origin
          />
        </XR>
      </Canvas>
      <button
        onClick={() => {
          xrStore.enterVR();
        }}
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20%",
          fontSize: "12px",
        }}
      >
        VR
      </button>
      <button
        onClick={() => {
          xrStore.enterAR();
        }}
        style={{
          position: "absolute",
          bottom: "20px",
          left: "60%",
          fontSize: "12px",
        }}
      >
        AR
      </button>
    </div>
  );
};

export default AssetViewer;
