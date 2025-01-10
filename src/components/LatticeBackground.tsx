import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Lattice() {
  const points = [];
  const edges = [];
  const gridSize = 3;
  const spacing = 2;

  // Create points in a 3D grid
  for (let x = -gridSize; x <= gridSize; x++) {
    for (let y = -gridSize; y <= gridSize; y++) {
      for (let z = -gridSize; z <= gridSize; z++) {
        points.push(new THREE.Vector3(x * spacing, y * spacing, z * spacing));
      }
    }
  }

  // Create edges between adjacent points
  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    points.forEach((otherPoint, j) => {
      if (i !== j) {
        const distance = point.distanceTo(otherPoint);
        if (distance <= spacing * 1.1) {
          edges.push([point, otherPoint]);
        }
      }
    });
  }

  const latticeRef = useRef<THREE.Group>(null);

  useFrame(({ mouse }) => {
    if (latticeRef.current) {
      const rotationSpeed = 0.3;
      latticeRef.current.rotation.y += rotationSpeed * 0.01;
      latticeRef.current.rotation.x = (mouse.y * Math.PI) / 8;
      latticeRef.current.rotation.z = (mouse.x * Math.PI) / 8;
    }
  });

  return (
    <group ref={latticeRef}>
      {/* Nodes */}
      {points.map((point, index) => (
        <mesh key={`point-${index}`} position={point}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#00ff88" />
        </mesh>
      ))}

      {/* Edges */}
      {edges.map(([start, end], index) => {
        const direction = new THREE.Vector3().subVectors(end, start);
        const length = direction.length();
        const position = new THREE.Vector3().addVectors(
          start,
          direction.multiplyScalar(0.5)
        );

        return (
          <mesh key={`edge-${index}`} position={position}>
            <cylinderGeometry args={[0.02, 0.02, length, 8]} />
            <meshStandardMaterial color="#00aa88" />
            <group rotation={[Math.PI / 2, 0, 0]}>
              <group
                quaternion={new THREE.Quaternion().setFromUnitVectors(
                  new THREE.Vector3(0, 1, 0),
                  direction.normalize()
                )}
              />
            </group>
          </mesh>
        );
      })}
    </group>
  );
}

export default function LatticeBackground() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        background: "linear-gradient(to bottom, #000510, #002030)",
      }}
    >
      <Canvas
        camera={{ position: [15, 15, 15], fov: 50 }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Lattice />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
