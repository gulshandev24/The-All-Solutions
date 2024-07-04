import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDAnimation = () => {
  const mountRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Setup Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);
    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    // Setup Canvas for background illustration and wave flow
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;

    // Draw background illustration (replace with your own design)
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, width, height);

    // Add wave flow animation (replace with your own animation logic)
    let phase = 0;
    const waveAnimation = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#000080';

      const amplitude = 50;
      const frequency = 0.01;
      const yOffset = height / 2;

      ctx.beginPath();
      ctx.moveTo(0, yOffset);
      for (let x = 0; x < width; x += 10) {
        const y = Math.sin(x * frequency + phase) * amplitude + yOffset;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.fill();

      phase += 0.1;
      requestAnimationFrame(waveAnimation);
    };

    waveAnimation();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
    </div>
  );
};

export default ThreeDAnimation;


// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// const ThreeDAnimation = () => {
//   const mountRef = useRef(null);
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     let width = window.innerWidth;
//     let height = window.innerHeight;

//     // Setup Three.js scene
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ antialias: true });

//     renderer.setSize(width, height);
//     mountRef.current.appendChild(renderer.domElement);

//     // Add background plane with texture
//     const planeGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
//     const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, side: THREE.DoubleSide });
//     const plane = new THREE.Mesh(planeGeometry, planeMaterial);
//     plane.rotation.x = -Math.PI / 2; // Rotate to lay flat
//     plane.position.y = -50; // Lower position to act as ground
//     scene.add(plane);

//     // Add a rotating cube
//     const cubeGeometry = new THREE.BoxGeometry(50, 50, 50);
//     const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
//     const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
//     cube.position.set(0, 25, 0); // Position cube above ground
//     scene.add(cube);

//     // Add ambient light to scene
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//     scene.add(ambientLight);

//     // Add directional light for shadows
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
//     directionalLight.position.set(200, 200, 100);
//     scene.add(directionalLight);

//     camera.position.set(0, 100, 200); // Position camera

//     const animate = () => {
//       requestAnimationFrame(animate);
//       cube.rotation.x += 0.01;
//       cube.rotation.y += 0.01;
//       renderer.render(scene, camera);
//     };

//     animate();

//     // Setup Canvas for background illustration
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     canvas.width = width;
//     canvas.height = height;

//     // Draw background gradient
//     const gradient = ctx.createLinearGradient(0, 0, width, height);
//     gradient.addColorStop(0, '#1c3c7e');
//     gradient.addColorStop(1, '#0077ff');
//     ctx.fillStyle = gradient;
//     ctx.fillRect(0, 0, width, height);

//     const handleResize = () => {
//       width = window.innerWidth;
//       height = window.innerHeight;
//       camera.aspect = width / height;
//       camera.updateProjectionMatrix();
//       renderer.setSize(width, height);

//       canvas.width = width;
//       canvas.height = height;

//       // Redraw background gradient on resize
//       const gradient = ctx.createLinearGradient(0, 0, width, height);
//       gradient.addColorStop(0, '#1c3c7e');
//       gradient.addColorStop(1, '#0077ff');
//       ctx.fillStyle = gradient;
//       ctx.fillRect(0, 0, width, height);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       mountRef.current.removeChild(renderer.domElement);
//     };
//   }, []);

//   return (
//     <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
//       <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />
//     </div>
//   );
// };

// export default ThreeDAnimation;


















