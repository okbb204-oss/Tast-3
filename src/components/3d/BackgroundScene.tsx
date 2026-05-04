import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, MeshDistortMaterial, Sphere, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '@/src/contexts/ThemeContext';

const Gear = ({ position, rotation, speed }: { position: [number, number, number], rotation: [number, number, number], speed: number }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.z += 0.01 * speed;
    }
  });

  return (
    <mesh position={position} rotation={rotation} ref={mesh}>
      <torusKnotGeometry args={[1, 0.3, 128, 16, 2, 3]} />
      <meshStandardMaterial color="#334155" emissive="#39FF14" emissiveIntensity={0.2} roughness={0.1} metalness={0.9} />
    </mesh>
  );
};

const FloatingObject = ({ theme }: { theme: 'dark' | 'light' }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.cos(t / 4) / 4;
      meshRef.current.rotation.y = Math.sin(t / 4) / 4;
      meshRef.current.position.y = Math.sin(t / 2) / 4;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[2, 0]} />
        {theme === 'dark' ? (
          <MeshDistortMaterial
            color="#1e293b"
            emissive="#00F3FF"
            emissiveIntensity={0.2}
            speed={2}
            distort={0.4}
            radius={1}
          />
        ) : (
          <MeshWobbleMaterial
            color="#94a3b8"
            speed={1}
            factor={0.4}
          />
        )}
      </mesh>
    </Float>
  );
};

const Particles = ({ count = 50, theme }: { count?: number, theme: 'dark' | 'light' }) => {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 20;
      p[i * 3 + 1] = (Math.random() - 0.5) * 20;
      p[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return p;
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color={theme === 'dark' ? '#39FF14' : '#2563eb'}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

export const BackgroundScene = () => {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 -z-10 bg-animated-mesh transition-colors duration-1000">
      <Canvas shadows style={{ pointerEvents: 'none' }}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
        
        <ambientLight intensity={theme === 'dark' ? 0.2 : 0.8} />
        <pointLight position={[10, 10, 10]} intensity={theme === 'dark' ? 1 : 1.5} color={theme === 'dark' ? '#00F3FF' : '#ffffff'} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={theme === 'dark' ? 1.5 : 0.5} color={theme === 'dark' ? '#39FF14' : '#ffffff'} />

        <FloatingObject theme={theme} />
        <Particles count={theme === 'dark' ? 100 : 40} theme={theme} />
        
        {theme === 'dark' && (
          <group position={[5, -3, -5]} scale={0.5}>
            <Gear position={[0, 0, 0]} rotation={[0, 0, 0]} speed={1} />
          </group>
        )}
        
        <fog attach="fog" args={[theme === 'dark' ? '#050505' : '#ffffff', 5, 20]} />
      </Canvas>
    </div>
  );
};
