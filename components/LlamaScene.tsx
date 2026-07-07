"use client";
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

// Rotación fija para que la llama quede mirando de frente a la cámara
// (el .glb exportado no viene orientado hacia +Z).
const FACING_OFFSET_Y = -Math.PI / 4;

function LlamaModel() {
  const { scene } = useGLTF("/llama.glb");
  const group = useRef<THREE.Group>(null);

  // Normaliza escala y centro para que el modelo se vea consistente
  // sin importar cómo fue exportado el .glb
  const { scale, offset } = useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    const s = 5.6 / maxDim;
    return { scale: s, offset: center.multiplyScalar(-s) };
  }, [scene]);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = FACING_OFFSET_Y + Math.sin(t * 0.5) * 0.05;
    group.current.position.y = offset.y + Math.sin(t * 1.15) * 0.03;
  });

  return (
    <group ref={group} scale={scale} position={[offset.x, offset.y, offset.z]}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/llama.glb");

export default function LlamaScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.6, 7.8], fov: 30 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 2]}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={1.2} />
      <directionalLight position={[3, 4, 5]} intensity={1.8} />
      <directionalLight position={[-4, 1, -3]} intensity={0.6} color="#bc45e9" />
      <directionalLight position={[0, -2, 3]} intensity={0.4} color="#6cdcff" />
      <Suspense fallback={null}>
        <LlamaModel />
      </Suspense>
    </Canvas>
  );
}
