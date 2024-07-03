
import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import Particles from 'react-tsparticles';
import 'tailwindcss/tailwind.css';

const Hero = () => {
  return (
    
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white p-4 overflow-hidden">
      {/* <Particles
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
      /> */}

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold text-center relative z-10"
      >
        Take your business online & thrive!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-4 text-lg md:text-2xl text-center relative z-10"
      >
        Streamlined Rightway to boost productivity and elevate your business.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-8 flex space-x-4 relative z-10"
      >
        {/* <button className="px-6 py-2 bg-blue-500 rounded-full text-white">Get free website</button> */}
        <button
  className="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
>
  Get Started
</button>
        <button className="px-6 py-2 bg-transparent border-2 border-white rounded-full text-white">See our plans</button>
      </motion.div>
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls enableZoom={false} />
          <Suspense fallback={null}>
            <Sphere visible args={[1, 100, 200]} scale={2.5}>
              <MeshDistortMaterial
                color="#8352FD"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Hero;






























































// import React, { Suspense } from 'react';
// import { motion } from 'framer-motion';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
// import 'tailwindcss/tailwind.css';

// const Hero = () => {
//   return (
//     <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white p-4 overflow-hidden">
//       <motion.h1
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="text-5xl md:text-7xl font-bold text-center relative z-10"
//       >
//         Take your business online & thrive!
//       </motion.h1>
//       <motion.p
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 0.5 }}
//         className="mt-4 text-lg md:text-2xl text-center relative z-10"
//       >
//         Streamlined Rightway to boost productivity and elevate your business.
//       </motion.p>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 1 }}
//         className="mt-8 flex space-x-4 relative z-10"
//       >
//         <button className="px-6 py-2 bg-blue-500 rounded-full text-white">Get free website</button>
//         <button className="px-6 py-2 bg-transparent border-2 border-white rounded-full text-white">See our plans</button>
//       </motion.div>
//       <div className="absolute top-0 left-0 w-full h-full z-0">
//         <Canvas className="z-0">
//           <ambientLight intensity={0.5} />
//           <pointLight position={[10, 10, 10]} />
//           <OrbitControls enableZoom={false} />
//           <Suspense fallback={null}>
//             <Sphere visible args={[1, 100, 200]} scale={2.5}>
//               <MeshDistortMaterial
//                 color="#8352FD"
//                 attach="material"
//                 distort={0.5}
//                 speed={2}
//               />
//             </Sphere>
//           </Suspense>
//         </Canvas>
//       </div>
//     </div>
//   );
// };

// export default Hero;






















// import React from 'react';
// import { motion } from 'framer-motion';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Stars } from '@react-three/drei';
// import Particles from 'react-tsparticles';
// import hero from '../../Assests/Image/hero.png';
// import 'tailwindcss/tailwind.css';

// const Hero = () => {
//   return (
//     <div className=" flex flex-col items-center justify-center min-h-screen bg-black text-white p-4 overflow-hidden">
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

//       <motion.h1
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="text-5xl md:text-7xl font-bold text-center relative z-10"
//       >
//         Take your business online & thrive!
//       </motion.h1>
//       <motion.p
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 0.5 }}
//         className="mt-4 text-lg md:text-2xl text-center relative z-10"
//       >
//         Streamlined Rightway to boost productivity and elevate your business.
//       </motion.p>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 1 }}
//         className="mt-8 flex space-x-4 relative z-10"
//       >
//         <button className="px-6 py-2 bg-blue-500 rounded-full text-white">Get free website</button>
//         <button className="px-6 py-2 bg-transparent border-2 border-white rounded-full text-white">See our plans</button>
//       </motion.div>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 1.5 }}
//         className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10"
//       >
//         <img src={hero} alt="Design 1" className="w-full h-auto" />
//         <img src={hero} alt="Design 1" className="w-full h-auto" />
//         <img src={hero} alt="Design 1" className="w-full h-auto" />
//         <img src={hero} alt="Design 1" className="w-full h-auto" />
//       </motion.div>

//       <Canvas className="absolute top-0 left-0 w-full h-full">
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <OrbitControls />
//         <Stars />
//         <mesh>
//           <boxGeometry args={[1, 1, 1]} />
//           <meshStandardMaterial color="orange" />
//         </mesh>
//       </Canvas>
//     </div>
//   );
// }

// export default Hero;







