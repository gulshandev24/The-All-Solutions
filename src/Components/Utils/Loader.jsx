import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Text } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import Particles from 'react-tsparticles';
import * as THREE from 'three';
import 'tailwindcss/tailwind.css';
import './Loader.css';

// Function to generate a random edge position for letters
const getRandomEdgePosition = () => {
  const sign = Math.random() < 0.5 ? -1 : 1;
  return [
    Math.random() * 20 * sign,
    Math.random() * 10 * sign,
    0,
  ];
};

// Animated letter component with text color and movement effects
const AnimatedLetter = ({ letter, position, targetPosition, delay, duration }) => {
  const ref = useRef();
  const [startTime, setStartTime] = useState(null);

  // Calculate the font size based on the window width
  const [fontSize, setFontSize] = useState(window.innerWidth <= 640 ? 0.5 : 1);
  
  useEffect(() => {
    const handleResize = () => {
      setFontSize(window.innerWidth <= 640 ? 0.5 : 1);
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

      // Add a color animation effect
      const colorProgress = Math.min(t * 2, 1);
      ref.current.color = new THREE.Color(`hsl(${colorProgress * 360}, 100%, 50%)`);
    }
  });

  return (
    <Text
      ref={ref}
      fontSize={fontSize} // Use dynamic font size based on window width
      position={position}
      maxWidth={2}
      lineHeight={1}
      letterSpacing={0.02}
      textAlign="center"
      color="#ffffff" // Ensure the text color is white
      className="animated-letter"
    >
      {letter}
    </Text>
  );
};

const Loader = () => {
  const navigate = useNavigate();
  const letters = "TheAllSolutions".split("");
  const initialPositions = letters.map(getRandomEdgePosition);
  const targetPositions = letters.map((_, i) => [-4 + i * 0.6, 0, 0]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 via-black to-gray-900 z-50 overflow-hidden">
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
              bounce: true,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 100,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
        className="absolute top-0 left-0 w-full h-full"
      />

      <Canvas className="absolute top-0 left-0 w-full h-full" camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <spotLight position={[-10, 10, -10]} angle={0.3} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
        <Stars />
        {letters.map((letter, i) => (
          <AnimatedLetter
            key={i}
            letter={letter}
            position={initialPositions[i]}
            targetPosition={targetPositions[i]}
            delay={i * 0.01} // Delay each letter's animation
            duration={2} // Duration of the animation
          />
        ))}
      </Canvas>
    </div>
  );
};

export default Loader;




























































































































































// import React from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, Stars } from '@react-three/drei';
// import Particles from 'react-tsparticles';
// import 'tailwindcss/tailwind.css';

// const RotatingBox = () => {
//   const boxRef = React.useRef();
//   const sphereRef = React.useRef();
//   useFrame(({ clock }) => {
//     const a = clock.getElapsedTime();
//     // Rotate the box and sphere for added animation
//     if (boxRef.current) {
//       boxRef.current.rotation.x = a * 0.5;
//       boxRef.current.rotation.y = a * 0.3;
//     }
//     if (sphereRef.current) {
//       sphereRef.current.rotation.x = a * 0.4;
//       sphereRef.current.rotation.y = a * 0.2;
//     }
//   });

//   return (
//     <>
//       <mesh ref={boxRef} position={[-1, 0, 0]}>
//         <boxGeometry args={[2, 2, 2]} />
//         <meshStandardMaterial color="#ff4500" />
//       </mesh>
//       <mesh ref={sphereRef} position={[1, 0, 0]}>
//         <sphereGeometry args={[1, 32, 32]} />
//         <meshStandardMaterial color="#00bfff" />
//       </mesh>
//     </>
//   );
// };

// const Loader = () => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 overflow-hidden">
//       <Particles
//         id="tsparticles"
//         options={{
//           background: {
//             color: {
//               value: "#000",
//             },
//           },
//           fpsLimit: 60,
//           interactivity: {
//             events: {
//               onClick: {
//                 enable: true,
//                 mode: "push",
//               },
//               onHover: {
//                 enable: true,
//                 mode: "repulse",
//               },
//               resize: true,
//             },
//             modes: {
//               bubble: {
//                 distance: 400,
//                 duration: 2,
//                 opacity: 0.8,
//                 size: 40,
//               },
//               push: {
//                 quantity: 4,
//               },
//               repulse: {
//                 distance: 200,
//                 duration: 0.4,
//               },
//             },
//           },
//           particles: {
//             color: {
//               value: "#ffffff",
//             },
//             links: {
//               color: "#ffffff",
//               distance: 150,
//               enable: true,
//               opacity: 0.5,
//               width: 1,
//             },
//             collisions: {
//               enable: true,
//             },
//             move: {
//               direction: "none",
//               enable: true,
//               outMode: "bounce",
//               random: false,
//               speed: 2,
//               straight: false,
//               bounce: true,
//             },
//             number: {
//               density: {
//                 enable: true,
//                 value_area: 800,
//               },
//               value: 80,
//             },
//             opacity: {
//               value: 0.5,
//             },
//             shape: {
//               type: "circle",
//             },
//             size: {
//               random: true,
//               value: 5,
//             },
//           },
//           detectRetina: true,
//         }}
//         className="absolute top-0 left-0 w-full h-full"
//       />

//       <Canvas
//         className="
//           absolute top-0 left-0 w-full h-full
//           sm:h-[50vh]
//           md:h-[75vh]
//           lg:h-[100vh]
//         "
//         camera={{ position: [0, 0, 5], fov: 50 }}
//       >
//         <ambientLight intensity={0.6} />
//         <pointLight position={[10, 10, 10]} intensity={1} />
//         <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
//         <Stars />
//         <RotatingBox />
//       </Canvas>
//     </div>
//   );
// }

// export default Loader;






// import React, { useRef, useState, useEffect } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, Stars, Text } from '@react-three/drei';
// import { useNavigate } from 'react-router-dom';
// import Particles from 'react-tsparticles';
// import * as THREE from 'three';
// import 'tailwindcss/tailwind.css';

// const getRandomEdgePosition = () => {
//   const sign = Math.random() < 0.5 ? -1 : 1;
//   return [
//     Math.random() * 20 * sign,
//     Math.random() * 10 * sign,
//     0,
//   ];
// };

// const AnimatedLetter = ({ letter, position, targetPosition, delay, duration }) => {
//   const ref = useRef();
//   const [startTime, setStartTime] = useState(null);

//   useFrame(({ clock }) => {
//     const elapsed = clock.getElapsedTime();
//     if (!startTime) {
//       setStartTime(elapsed);
//     } else {
//       const t = Math.min((elapsed - startTime - delay) / duration, 1);
//       ref.current.position.lerpVectors(
//         new THREE.Vector3(...position),
//         new THREE.Vector3(...targetPosition),
//         t
//       );
//     }
//   });

//   return (
//     <Text ref={ref} fontSize={1} color="#ffffff" position={position}>
//       {letter}
//     </Text>
//   );
// };

// const Loader = () => {
//   const navigate = useNavigate();
//   const letters = "TheAllSolutions".split("");
//   const initialPositions = letters.map(getRandomEdgePosition);
//   const targetPositions = letters.map((_, i) => [-4 + i * 0.6, 0, 0]);

//   // useEffect(() => {
//   //   setTimeout(() => {
//   //     navigate("/landing");
//   //   }, 5000); // Redirect to landing page after 5 seconds
//   // }, [navigate]);

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 via-black to-gray-900 z-50 overflow-hidden">
//       <Particles
//         id="tsparticles"
//         options={{
//           background: {
//             color: {
//               value: "transparent",
//             },
//           },
//           fpsLimit: 60,
//           interactivity: {
//             events: {
//               onClick: {
//                 enable: true,
//                 mode: "push",
//               },
//               onHover: {
//                 enable: true,
//                 mode: "repulse",
//               },
//               resize: true,
//             },
//             modes: {
//               bubble: {
//                 distance: 400,
//                 duration: 2,
//                 opacity: 0.8,
//                 size: 40,
//               },
//               push: {
//                 quantity: 4,
//               },
//               repulse: {
//                 distance: 200,
//                 duration: 0.4,
//               },
//             },
//           },
//           particles: {
//             color: {
//               value: "#ffffff",
//             },
//             links: {
//               color: "#ffffff",
//               distance: 150,
//               enable: true,
//               opacity: 0.5,
//               width: 1,
//             },
//             collisions: {
//               enable: true,
//             },
//             move: {
//               direction: "none",
//               enable: true,
//               outMode: "bounce",
//               random: false,
//               speed: 2,
//               straight: false,
//               bounce: true,
//             },
//             number: {
//               density: {
//                 enable: true,
//                 value_area: 800,
//               },
//               value: 100,
//             },
//             opacity: {
//               value: 0.5,
//             },
//             shape: {
//               type: "circle",
//             },
//             size: {
//               random: true,
//               value: 5,
//             },
//           },
//           detectRetina: true,
//         }}
//         className="absolute top-0 left-0 w-full h-full"
//       />

//       <Canvas className="absolute top-0 left-0 w-full h-full" camera={{ position: [0, 0, 10], fov: 50 }}>
//         <ambientLight intensity={0.6} />
//         <pointLight position={[10, 10, 10]} intensity={1.5} />
//         <spotLight position={[-10, 10, -10]} angle={0.3} />
//         <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
//         <Stars />
//         {letters.map((letter, i) => (
//           <AnimatedLetter
//             key={i}
//             letter={letter}
//             position={initialPositions[i]}
//             targetPosition={targetPositions[i]}
//             delay={i * 0.1} // Delay each letter's animation
//             duration={2} // Duration of the animation
//           />
//         ))}
//       </Canvas>
//     </div>
//   );
// };

// export default Loader;









// import React, { useRef, useState, useEffect } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, Stars, Text } from '@react-three/drei';
// import { useNavigate } from 'react-router-dom';
// import Particles from 'react-tsparticles';
// import * as THREE from 'three';
// import 'tailwindcss/tailwind.css';

// // Function to generate a random edge position for letters
// const getRandomEdgePosition = () => {
//   const sign = Math.random() < 0.5 ? -1 : 1;
//   return [
//     Math.random() * 20 * sign,
//     Math.random() * 10 * sign,
//     0,
//   ];
// };

// // Animated letter component with text color and movement effects
// const AnimatedLetter = ({ letter, position, targetPosition, delay, duration }) => {
//   const ref = useRef();
//   const [startTime, setStartTime] = useState(null);

//   useFrame(({ clock }) => {
//     const elapsed = clock.getElapsedTime();
//     if (!startTime) {
//       setStartTime(elapsed);
//     } else {
//       const t = Math.min((elapsed - startTime - delay) / duration, 1);
//       ref.current.position.lerpVectors(
//         new THREE.Vector3(...position),
//         new THREE.Vector3(...targetPosition),
//         t
//       );
//       const colorProgress = Math.min(t * 3, 1);
//       ref.current.color = new THREE.Color(`hsl(${colorProgress * 360}, 100%, 50%)`);

//       // Add scale effect for a more dynamic animation
//       ref.current.scale.set(1 + 0.5 * (1 - Math.abs(0.5 - t) * 2), 1 + 0.5 * (1 - Math.abs(0.5 - t) * 2), 1);
//     }
//   });

//   return (
//     <Text
//       ref={ref}
//       fontSize={1} // Default size
//       position={position}
//       maxWidth={2}
//       lineHeight={1}
//       letterSpacing={0.02}
//       textAlign="center"
//       // Apply responsive text size directly in the JSX
//       style={{
//         fontSize: window.innerWidth <= 640 ? '0.5em' : '1em',
//       }}
//       className="animated-letter"
//     >
//       {letter}
//     </Text>
//   );
// };

// const Loader = () => {
//   const navigate = useNavigate();
//   const letters = "theallsolutions".split("");
//   const initialPositions = letters.map(getRandomEdgePosition);
//   const targetPositions = letters.map((_, i) => [-4 + i * 0.6, 0, 0]);



//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 overflow-hidden">
//       <Particles
//         id="tsparticles"
//         options={{
//           background: {
//             color: {
//               value: "transparent",
//             },
//           },
//           fpsLimit: 60,
//           interactivity: {
//             events: {
//               onClick: {
//                 enable: true,
//                 mode: "push",
//               },
//               onHover: {
//                 enable: true,
//                 mode: "repulse",
//               },
//               resize: true,
//             },
//             modes: {
//               bubble: {
//                 distance: 400,
//                 duration: 2,
//                 opacity: 0.8,
//                 size: 40,
//               },
//               push: {
//                 quantity: 4,
//               },
//               repulse: {
//                 distance: 200,
//                 duration: 0.4,
//               },
//             },
//           },
//           particles: {
//             color: {
//               value: "#ffffff",
//             },
//             links: {
//               color: "#ffffff",
//               distance: 150,
//               enable: true,
//               opacity: 0.5,
//               width: 1,
//             },
//             collisions: {
//               enable: true,
//             },
//             move: {
//               direction: "none",
//               enable: true,
//               outMode: "bounce",
//               random: false,
//               speed: 2,
//               straight: false,
//               bounce: true,
//             },
//             number: {
//               density: {
//                 enable: true,
//                 value_area: 800,
//               },
//               value: 100,
//             },
//             opacity: {
//               value: 0.5,
//             },
//             shape: {
//               type: "circle",
//             },
//             size: {
//               random: true,
//               value: 5,
//             },
//           },
//           detectRetina: true,
//         }}
//         className="absolute top-0 left-0 w-full h-full"
//       />

//       <Canvas className="absolute top-0 left-0 w-full h-full" camera={{ position: [0, 0, 10], fov: 50 }}>
//         <ambientLight intensity={0.6} />
//         <pointLight position={[10, 10, 10]} intensity={1.5} />
//         <spotLight position={[-10, 10, -10]} angle={0.3} />
//         <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
//         <Stars />
//         {letters.map((letter, i) => (
//           <AnimatedLetter
//             key={i}
//             letter={letter}
//             position={initialPositions[i]}
//             targetPosition={targetPositions[i]}
//             delay={i * 0.2} // Increased delay for a more dramatic effect
//             duration={0.8} // Duration of the animation
//           />
//         ))}
//       </Canvas>
//     </div>
//   );
// };

// export default Loader;















