// Heart1.jsx
import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Heart1() {
  const gltf = useGLTF('/3dmodels/heart-model-1.glb');
  return <primitive object={gltf.scene} />;
}