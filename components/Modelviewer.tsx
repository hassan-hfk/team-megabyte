'use client';

import { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, useProgress, Html, Bounds, useBounds } from '@react-three/drei';
import * as THREE from 'three';

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ textAlign: 'center' }}>
        <div style={{
          width: 36, height: 36, margin: '0 auto 10px',
          border: '2px solid rgba(255,255,255,0.1)',
          borderTop: '2px solid white',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }} />
        <p style={{ fontSize: 11, letterSpacing: '0.2em', color: '#6b7280', textTransform: 'uppercase' }}>
          {Math.round(progress)}%
        </p>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    </Html>
  );
}

function AutoFitModel({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  const bounds = useBounds();
  const ref = useRef<THREE.Group>(null);

  // Tell Bounds to fit as soon as model mounts
  useFrame(() => {
    if (ref.current) {
      bounds.refresh(ref.current).fit();
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      onAfterRender={() => bounds.refresh(ref.current!).fit()}
    />
  );
}

function SpinningModel({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  const ref = useRef<THREE.Group>(null);

  // Center the model at origin
  useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();
    box.getCenter(center);
    scene.position.sub(center);
  }, [scene]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.4;
  });

  return <primitive ref={ref} object={scene} />;
}

export default function ModelViewer({ url = '/models/megabyte-v2.glb' }: { url?: string }) {
  return (
    <div style={{ width: '100%', height: '100%', background: '#0a0a0a', position: 'relative' }}>
      <Canvas gl={{ antialias: true }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight position={[-5, 3, -5]} intensity={0.4} color="#4488ff" />

        <Suspense fallback={<Loader />}>
          <Bounds fit clip observe damping={6} margin={1.5}>
            <SpinningModel url={url} />
          </Bounds>
          <Environment preset="city" />
        </Suspense>

        <OrbitControls
          makeDefault
          enableZoom={true}
          enablePan={false}
          minPolarAngle={0}
          maxPolarAngle={Math.PI}
          autoRotate={true}
          autoRotateSpeed={1.5}
        />
      </Canvas>

      <div style={{
        position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)',
        color: 'rgba(255,255,255,0.3)', fontSize: 11, letterSpacing: '0.15em',
        textTransform: 'uppercase', pointerEvents: 'none',
        display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap',
      }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"/>
        </svg>
        Drag to rotate · Scroll to zoom
      </div>
    </div>
  );
}