import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Cylinder, Text } from '@react-three/drei';
import * as THREE from 'three';

export default function ThreeDCoin() {
  const coinRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    if (coinRef.current) {
      coinRef.current.rotation.y += delta * 1.5;
    }
  });

  return (
    <group ref={coinRef}>
      {/* Coin Body */}
      <Cylinder args={[1, 1, 0.15, 64]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial 
          color="#fbbf24" 
          metalness={0.8} 
          roughness={0.2} 
          emissive="#b45309"
          emissiveIntensity={0.2}
        />
      </Cylinder>

      {/* Coin Edge Detail */}
      <Cylinder args={[1.02, 1.02, 0.1, 64]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#d97706" metalness={1} roughness={0.1} />
      </Cylinder>

      {/* Symbol on Front */}
      <Text
        position={[0, 0, 0.08]}
        fontSize={0.8}
        color="#78350f"
        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyfAZ9hjg.ttf"
      >
        ₿
      </Text>

      {/* Symbol on Back */}
      <Text
        position={[0, 0, -0.08]}
        rotation={[0, Math.PI, 0]}
        fontSize={0.8}
        color="#78350f"
      >
        ₿
      </Text>

      {/* Lighting inside the group for local effect */}
      <pointLight position={[2, 2, 2]} intensity={1} color="#ffffff" />
    </group>
  );
}
