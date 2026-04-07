import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Bean({ position = [0, 0, 0] as [number, number, number], scale = 1, speed = 1 }) {
  const meshRef = useRef<THREE.Mesh>(null);

  const beanShape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.5);
    shape.bezierCurveTo(0.4, -0.5, 0.5, -0.2, 0.5, 0);
    shape.bezierCurveTo(0.5, 0.2, 0.4, 0.5, 0, 0.5);
    shape.bezierCurveTo(-0.4, 0.5, -0.5, 0.2, -0.5, 0);
    shape.bezierCurveTo(-0.5, -0.2, -0.4, -0.5, 0, -0.5);

    const extrudeSettings = {
      depth: 0.3,
      bevelEnabled: true,
      bevelSegments: 12,
      steps: 2,
      bevelSize: 0.15,
      bevelThickness: 0.1,
    };

    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh
        ref={meshRef}
        geometry={beanShape}
        position={position}
        scale={scale}
        castShadow
      >
        <MeshDistortMaterial
          color="#6f4a2e"
          roughness={0.3}
          metalness={0.1}
          distort={0.05}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function CreviceLine({ position = [0, 0, 0] as [number, number, number], scale = 1 }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.3;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={ref} position={position} scale={scale}>
        <boxGeometry args={[0.03, 0.6, 0.5]} />
        <meshStandardMaterial color="#2d1f14" roughness={0.8} />
      </mesh>
    </Float>
  );
}

function Particles() {
  const count = 50;
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
        ],
        speed: Math.random() * 0.5 + 0.1,
        scale: Math.random() * 0.02 + 0.01,
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const dummy = new THREE.Object3D();
    particles.forEach((p, i) => {
      dummy.position.set(
        p.position[0] + Math.sin(state.clock.elapsedTime * p.speed) * 0.5,
        p.position[1] + Math.cos(state.clock.elapsedTime * p.speed * 0.7) * 0.5,
        p.position[2]
      );
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshStandardMaterial color="#d4a24e" emissive="#d4a24e" emissiveIntensity={0.5} transparent opacity={0.6} />
    </instancedMesh>
  );
}

export default function CoffeeBean3D() {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#f5e6d0" />
        <pointLight position={[-3, -3, 2]} intensity={0.5} color="#d4a24e" />
        <spotLight position={[0, 5, 0]} intensity={0.8} color="#c9a882" angle={0.5} penumbra={0.5} />

        <Bean position={[0, 0, 0]} scale={1.8} speed={1} />
        <CreviceLine position={[0, 0, 0.25]} scale={1.8} />

        <Bean position={[-2.5, 1.5, -2]} scale={0.6} speed={0.7} />
        <Bean position={[2.5, -1, -3]} scale={0.5} speed={1.3} />
        <Bean position={[-1.5, -2, -1.5]} scale={0.4} speed={0.9} />

        <Particles />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
