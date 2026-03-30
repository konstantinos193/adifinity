"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, PerspectiveCamera } from "@react-three/drei"
import * as THREE from "three"

// Paper input stack (left side)
function PaperInput() {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group ref={groupRef} position={[-4, 0, 0]}>
      {[0, 1, 2, 3, 4].map((i) => (
        <mesh key={i} position={[0, i * 0.02, 0]} rotation={[0, 0, i * 0.05]}>
          <boxGeometry args={[1.5, 0.01, 1]} />
          <meshStandardMaterial
            color="white"
            roughness={0.8}
            metalness={0.1}
            emissive="#01FFFF"
            emissiveIntensity={0.02}
          />
        </mesh>
      ))}
      {/* Cyan edge lighting effect */}
      <mesh position={[0, 0.05, 0.51]} rotation={[Math.PI/2, 0, 0]}>
        <planeGeometry args={[1.5, 1]} />
        <meshBasicMaterial color="#01FFFF" opacity={0.3} transparent />
      </mesh>
    </group>
  )
}

// Central printing press
function PrintingPress() {
  const pressRef = useRef<THREE.Group>(null)
  const rollerRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (pressRef.current) {
      pressRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
    if (rollerRef.current) {
      rollerRef.current.rotation.x = state.clock.elapsedTime * 2
    }
  })

  return (
    <group ref={pressRef} position={[0, 0, 0]}>
      {/* Press body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 1.2, 1.5]} />
        <meshStandardMaterial
          color="#1a2a3a"
          roughness={0.3}
          metalness={0.8}
          emissive="#01A9FF"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Rotating roller */}
      <mesh ref={rollerRef} position={[0, 0.6, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 2.2, 16]} />
        <meshStandardMaterial
          color="#2a3a4a"
          roughness={0.2}
          metalness={0.9}
          emissive="#01FFFF"
          emissiveIntensity={0.15}
        />
      </mesh>
      
      {/* Energy core */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshBasicMaterial color="#01FFFF" opacity={0.8} transparent />
      </mesh>
      
      {/* Input slot */}
      <mesh position={[-1.1, 0, 0]}>
        <boxGeometry args={[0.1, 0.8, 0.6]} />
        <meshBasicMaterial color="#01FFFF" opacity={0.5} transparent />
      </mesh>
      
      {/* Output slot */}
      <mesh position={[1.1, 0, 0]}>
        <boxGeometry args={[0.1, 0.8, 0.6]} />
        <meshBasicMaterial color="#01A9FF" opacity={0.5} transparent />
      </mesh>
    </group>
  )
}

// Flying business cards (right side)
function PrintedOutput() {
  const cardsRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (cardsRef.current) {
      // Animate cards flying out in sequence
      cardsRef.current.children.forEach((card, i) => {
        const delay = i * 0.5
        const t = (state.clock.elapsedTime - delay) % 4
        if (t > 0) {
          card.position.x = 1.5 + t * 2
          card.position.y = Math.sin(t * 2) * 0.3
          card.rotation.z = t * 0.5
        }
      })
    }
  })

  return (
    <group ref={cardsRef} position={[0, 0, 0]}>
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[1.5, i * 0.3 - 0.3, 0]}>
          <boxGeometry args={[0.8, 0.5, 0.01]} />
          <meshStandardMaterial
            color="white"
            roughness={0.4}
            metalness={0.3}
            emissive="#01A9FF"
            emissiveIntensity={0.05}
          />
        </mesh>
      ))}
    </group>
  )
}

// Minimal particle system
function BackgroundParticles() {
  const particlesRef = useRef<THREE.Points>(null)
  
  const particles = useMemo(() => {
    const count = 25
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 12
      positions[i + 1] = (Math.random() - 0.5) * 6
      positions[i + 2] = (Math.random() - 0.5) * 4

      const color = new THREE.Color(i % 2 === 0 ? "#01FFFF" : "#01A9FF")
      colors[i] = color.r
      colors[i + 1] = color.g
      colors[i + 2] = color.b
    }

    return { positions, colors }
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Blueprint grid lines
function BlueprintGrid() {
  return (
    <group position={[0, -2, -2]}>
      {/* Horizontal lines */}
      {[0, 1, 2, 3].map((i) => (
        <mesh key={`h-${i}`} position={[0, 0, i * 2 - 3]}>
          <planeGeometry args={[20, 0.01]} />
          <meshBasicMaterial color="#01FFFF" opacity={0.1} transparent />
        </mesh>
      ))}
      {/* Vertical lines */}
      {[0, 1, 2, 3].map((i) => (
        <mesh key={`v-${i}`} position={[i * 6 - 9, 0, 0]} rotation={[0, Math.PI/2, 0]}>
          <planeGeometry args={[20, 0.01]} />
          <meshBasicMaterial color="#01A9FF" opacity={0.1} transparent />
        </mesh>
      ))}
    </group>
  )
}

export default function PrintsHeader() {
  return (
    <div className="w-full h-40 relative">
      <Canvas
        shadows
        camera={{ position: [0, 0, 10], fov: 45 }}
        className="absolute inset-0"
      >
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        
        {/* Professional lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.8}
          color="#01FFFF"
          castShadow
        />
        <directionalLight
          position={[-5, 3, 5]}
          intensity={0.4}
          color="#01A9FF"
        />
        <pointLight position={[0, -2, 8]} intensity={0.6} color="#01FFFF" />
        
        {/* Scene elements */}
        <BlueprintGrid />
        <BackgroundParticles />
        <PaperInput />
        <PrintingPress />
        <PrintedOutput />
        
        {/* No camera movement - professional and stable */}
      </Canvas>
      
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#07141C]/70 via-transparent to-transparent pointer-events-none" />
    </div>
  )
}
