import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Lattice() {
  const points: THREE.Vector3[] = [];
  const edges: [THREE.Vector3, THREE.Vector3][] = [];
  const numPoints = 20; // Reduced number of points
  const boundingBox = 8; // Space in which points can be distributed
  const minDistance = 3; // Minimum distance between connected points
  const maxDistance = 6; // Maximum distance between connected points

  // Create random points within the bounding box
  for (let i = 0; i < numPoints; i++) {
    const x = (Math.random() - 0.5) * boundingBox * 2;
    const y = (Math.random() - 0.5) * boundingBox * 2;
    const z = (Math.random() - 0.5) * boundingBox * 2;
    points.push(new THREE.Vector3(x, y, z));
  }

  // Create edges between points within distance threshold
  const connectedPoints = new Set<number>();

  // First pass: create edges within the distance threshold
  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    points.forEach((otherPoint, j) => {
      if (i !== j) {
        const distance = point.distanceTo(otherPoint);
        if (distance >= minDistance && distance <= maxDistance) {
          edges.push([point, otherPoint]);
          connectedPoints.add(i);
          connectedPoints.add(j);
        }
      }
    });
  }

  // Second pass: connect isolated points to their nearest neighbor
  points.forEach((point, i) => {
    if (!connectedPoints.has(i)) {
      let nearestDistance = Infinity;
      let nearestIndex = -1;

      points.forEach((otherPoint, j) => {
        if (i !== j) {
          const distance = point.distanceTo(otherPoint);
          if (distance < nearestDistance) {
            nearestDistance = distance;
            nearestIndex = j;
          }
        }
      });

      if (nearestIndex !== -1) {
        edges.push([point, points[nearestIndex]]);
        connectedPoints.add(i);
        connectedPoints.add(nearestIndex);
      }
    }
  });

  const latticeRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (latticeRef.current) {
      const rotationSpeed = 0.3;
      latticeRef.current.rotation.y += rotationSpeed * 0.01;
    }
  });

  return (
    <group ref={latticeRef}>
      {/* Nodes */}
      {points.map((point, index) => (
        <mesh key={`point-${index}`} position={point}>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshStandardMaterial
            color="#d1a3ff" // Changed to a lighter purple
            emissive="#a57cd9" // Changed to a lighter purple
            emissiveIntensity={0.3}
          />
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

        // Calculate the rotation to align the cylinder with the edge direction
        const quaternion = new THREE.Quaternion();
        quaternion.setFromUnitVectors(
          new THREE.Vector3(0, 1, 0),
          direction.clone().normalize()
        );

        return (
          <mesh
            key={`edge-${index}`}
            position={position}
            quaternion={quaternion}
          >
            <cylinderGeometry args={[0.05, 0.05, length, 8]} />
            <meshStandardMaterial
              color="#8800ff" // Changed to purple
              transparent
              opacity={0.6}
              emissive="#4400aa" // Changed to a darker purple
              emissiveIntensity={0.2}
            />
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
        camera={{ position: [20, 20, 20], fov: 45 }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <Lattice />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
