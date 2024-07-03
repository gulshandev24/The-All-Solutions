// import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Stars } from '@react-three/drei';
// import Particles from 'react-tsparticles';
// import 'tailwindcss/tailwind.css';

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

//       <Canvas className="absolute top-0 left-0 w-full h-full">
//         <ambientLight intensity={0.6} />
//         <pointLight position={[10, 10, 10]} intensity={1} />
//         <OrbitControls enableZoom={false} />
//         <Stars />
//         <mesh rotation={[0.5, 0.5, 0.5]} position={[0, 0, 0]}>
//           <boxGeometry args={[2, 2, 2]} />
//           <meshStandardMaterial color="orange" />
//         </mesh>
//       </Canvas>
//     </div>
//   );
// }

// export default Loader;




// import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Stars } from '@react-three/drei';
// import Particles from 'react-tsparticles';
// import 'tailwindcss/tailwind.css';

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

//       <Canvas className="absolute top-0 left-0 w-full h-full" camera={{ position: [0, 0, 5], fov: 50 }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} intensity={1} />
//         <OrbitControls enableZoom={true} enablePan={false} autoRotate autoRotateSpeed={2} />
//         <Stars />
//         <mesh rotation={[1, 1, 1]} position={[0, 0, 0]}>
//           <boxGeometry args={[2, 2, 2]} />
//           <meshStandardMaterial color="#ff4500" />
//         </mesh>
//         <mesh rotation={[0.5, 0.5, 0.5]} position={[2, 2, 0]}>
//           <sphereGeometry args={[1, 32, 32]} />
//           <meshStandardMaterial color="#00bfff" />
//         </mesh>
//       </Canvas>
//     </div>
//   );
// }

// export default Loader;


import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Particles from 'react-tsparticles';
import 'tailwindcss/tailwind.css';

const RotatingBox = () => {
  const boxRef = React.useRef();
  const sphereRef = React.useRef();
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    // Rotate the box and sphere for added animation
    if (boxRef.current) {
      boxRef.current.rotation.x = a * 0.5;
      boxRef.current.rotation.y = a * 0.3;
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.x = a * 0.4;
      sphereRef.current.rotation.y = a * 0.2;
    }
  });

  return (
    <>
      <mesh ref={boxRef} position={[-1, 0, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#ff4500" />
      </mesh>
      <mesh ref={sphereRef} position={[1, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#00bfff" />
      </mesh>
    </>
  );
};

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 overflow-hidden">
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#000",
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
              value: 80,
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

      <Canvas
        className="
          absolute top-0 left-0 w-full h-full
          sm:h-[50vh]
          md:h-[75vh]
          lg:h-[100vh]
        "
        camera={{ position: [0, 0, 5], fov: 50 }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
        <Stars />
        <RotatingBox />
      </Canvas>
    </div>
  );
}

export default Loader;






// import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Stars } from '@react-three/drei';

// const Loader = () => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
//       <Canvas className="w-24 h-24 md:w-32 md:h-32">
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <OrbitControls enableZoom={false} />
//         <Stars />
//         <mesh rotation={[0, 0, Math.PI / 4]}>
//           <torusGeometry args={[1, 0.2, 16, 100]} />
//           <meshStandardMaterial color="orange" emissive="orange" emissiveIntensity={0.5} />
//         </mesh>
//         <mesh rotation={[0, 0, -Math.PI / 4]}>
//           <torusGeometry args={[0.8, 0.2, 16, 100]} />
//           <meshStandardMaterial color="white" emissive="white" emissiveIntensity={0.5} />
//         </mesh>
//       </Canvas>
//     </div>
//   );
// };

// export default Loader;
