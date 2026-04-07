import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

function SteamParticle({ delay = 0 }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = ((state.clock.elapsedTime + delay) % 3) / 3;
    ref.current.position.y = t * 2;
    ref.current.position.x = Math.sin(t * Math.PI * 2 + delay) * 0.15;
    ref.current.scale.setScalar(Math.sin(t * Math.PI) * 0.1);
    (ref.current.material as THREE.MeshStandardMaterial).opacity = Math.sin(t * Math.PI) * 0.3;
  });

  return (
    <mesh ref={ref} position={[0, 0.8, 0]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshStandardMaterial color="#f5e6d0" transparent opacity={0} />
    </mesh>
  );
}

function Cup() {
  const groupRef = useRef<THREE.Group>(null);

  const cupGeometry = useMemo(() => {
    const points = [];
    for (let i = 0; i < 20; i++) {
      const t = i / 19;
      const radius = 0.35 + Math.sin(t * Math.PI * 0.5) * 0.15;
      points.push(new THREE.Vector2(radius, t * 0.8 - 0.4));
    }
    return new THREE.LatheGeometry(points, 32);
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef}>
        <mesh geometry={cupGeometry} castShadow>
          <meshStandardMaterial
            color="#f5e6d0"
            roughness={0.2}
            metalness={0.1}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Coffee liquid */}
        <mesh position={[0, 0.35, 0]}>
          <circleGeometry args={[0.42, 32]} />
          <meshStandardMaterial
            color="#3c1518"
            roughness={0.1}
            metalness={0.3}
            rotation-x={-Math.PI / 2}
          />
        </mesh>

        {/* Handle */}
        <mesh position={[0.55, 0.1, 0]} rotation={[0, 0, Math.PI / 6]}>
          <torusGeometry args={[0.15, 0.03, 8, 16, Math.PI]} />
          <meshStandardMaterial color="#f5e6d0" roughness={0.2} />
        </mesh>

        {/* Steam */}
        {[0, 0.5, 1, 1.5, 2, 2.5].map((delay, i) => (
          <SteamParticle key={i} delay={delay} />
        ))}
      </group>
    </Float>
  );
}

export default function CoffeeCup3D() {
  return (
    <div className="w-full h-[300px]">
      <Canvas
        camera={{ position: [0, 0.5, 2.5], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 5, 3]} intensity={0.8} color="#f5e6d0" />
        <pointLight position={[-2, 1, 2]} intensity={0.3} color="#d4a24e" />
        <Cup />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
