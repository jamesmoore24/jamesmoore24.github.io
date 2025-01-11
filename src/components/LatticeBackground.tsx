import { useRef, useEffect } from "react";
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

  // Add mouse position and interaction state
  const mousePosition = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (isDragging.current) {
        // Calculate mouse movement delta
        const deltaX =
          (event.clientX / window.innerWidth) * 2 -
          1 -
          previousMousePosition.current.x;
        const deltaY =
          -((event.clientY / window.innerHeight) * 2 - 1) -
          previousMousePosition.current.y;

        // Update target rotation based on drag movement
        targetRotation.current.x += deltaY * 2;
        targetRotation.current.y += deltaX * 2;
      }

      // Update mouse positions
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
      previousMousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    const handleMouseDown = () => {
      isDragging.current = true;
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // Create random points within the bounding box
  for (let i = 0; i < numPoints; i++) {
    const x = (Math.random() - 0.5) * boundingBox * 3;
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
      if (!isDragging.current) {
        // Auto-rotate when not being dragged
        targetRotation.current.x +=
          (mousePosition.current.y * 1.0 - targetRotation.current.x) * 0.05;
        targetRotation.current.y +=
          (mousePosition.current.x * 1.0 - targetRotation.current.y) * 0.05;
      }

      // Apply the rotations
      latticeRef.current.rotation.x = targetRotation.current.x;
      latticeRef.current.rotation.y =
        targetRotation.current.y + (isDragging.current ? 0 : 0.003); // Only auto-rotate when not dragging
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
      className="w-full h-full opacity-0 animate-fade-in"
      style={{ animationDelay: "1800ms", animationFillMode: "forwards" }}
    >
      <Canvas camera={{ position: [20, 20, 20], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <Lattice />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
