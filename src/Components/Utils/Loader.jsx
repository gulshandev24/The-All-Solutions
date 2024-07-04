import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import 'tailwindcss/tailwind.css';
import './Loader.css';

const getRandomEdgePosition = () => {
  const sign = Math.random() < 0.5 ? -1 : 1;
  return [
    Math.random() * 20 * sign,
    Math.random() * 10 * sign,
    0,
  ];
};
const getCenterPosition = (letters) => {
  const screenWidth = window.innerWidth;
  const baseSpacing = screenWidth <= 640 ? 0.3 : 0.6; 
  const totalWidth = letters.length * baseSpacing;
  const startPosition = -totalWidth / 2;

  return letters.map((_, i) => [startPosition + i * baseSpacing, 0, 0]);
};

const AnimatedLetter = ({ letter, position, targetPosition, delay, duration, onComplete, letterIndex }) => {
  const ref = useRef();
  const [startTime, setStartTime] = useState(null);
  const [fontSize, setFontSize] = useState(window.innerWidth <= 640 ? 0.3 : 1);
  const [hasBounced, setHasBounced] = useState(false);  

  useEffect(() => {
    const handleResize = () => {
      setFontSize(window.innerWidth <= 640 ? 0.3 : 1);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    if (!startTime) {
      setStartTime(elapsed);
    } else {
      const t = Math.min((elapsed - startTime - delay) / duration, 1);
      ref.current.position.lerpVectors(
        new THREE.Vector3(...position),
        new THREE.Vector3(...targetPosition),
        t
      );

     
      ref.current.setRotationFromEuler(new THREE.Euler(0, 0, 0));

   
      if (t === 1 && !hasBounced) {
        setHasBounced(true); 
      }
      if (hasBounced) {
        
        const bounceAmplitude = 0.2; 
        const bounceFrequency = 5; 
        ref.current.position.y = targetPosition[1] + Math.sin(elapsed * bounceFrequency + letterIndex * 0.2) * bounceAmplitude;
      }

      if (t === 1 && onComplete) {
        onComplete();
      }
    }
  });

  return (
    <Text
      ref={ref}
      fontSize={fontSize} 
      position={position}
      maxWidth={2}
      lineHeight={1}
      letterSpacing={0.02}
      textAlign="center"
      color="#ffffff" 
      className={`animated-letter ${hasBounced ? 'bounce' : ''}`} 
    >
      {letter}
    </Text>
  );
};

const Loader = () => {
  const navigate = useNavigate();
  const letters = "TheAllSolutions".split("");
  const initialPositions = letters.map(getRandomEdgePosition);
  const [targetPositions, setTargetPositions] = useState(getCenterPosition(letters));
  const [allComplete, setAllComplete] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setTargetPositions(getCenterPosition(letters));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [letters]);

  useEffect(() => {
    if (allComplete) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [allComplete, navigate]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 via-black to-gray-900 z-50 overflow-hidden">
      <Canvas className="absolute top-0 left-0 w-full h-full" camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <spotLight position={[-10, 10, -10]} angle={0.3} />
        <OrbitControls enableZoom={false} enablePan={false} />
        {letters.map((letter, i) => (
          <AnimatedLetter
            key={i}
            letter={letter}
            position={initialPositions[i]}
            targetPosition={targetPositions[i]}
            delay={i * 0.1}
            duration={3.5}
            onComplete={() => {
              if (i === letters.length - 1) {
                setAllComplete(true);
              }
            }}
            letterIndex={i}  
          />
        ))}
      </Canvas>

      <div className="absolute bottom-10 flex flex-col items-center">
        <p className="text-white text-lg md:text-xl lg:text-2xl animate-bounce">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
