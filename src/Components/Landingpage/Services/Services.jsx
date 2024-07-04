import React from 'react';
import './Services.css';
import ThreeDAnimation from './ThreeDAnimation';

const images = [
    { src: '/Images/software.jpg', alt: 'Image 1' },
    { src: '/Images/software.jpg', alt: 'Image 2' },
    { src: '/Images/software.jpg', alt: 'Image 3' },

];

const ElevateBusiness = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
      <ThreeDAnimation />
      <header className="text-center w-full max-w-screen-lg mx-auto relative z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-100">
          Need a website to <span className="text-gray-400">elevate your</span> business?
        </h1>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="bg-gray-800 p-4 rounded-lg image-container"
            >
              <img src={image.src} alt={image.alt} className="h-40 sm:h-48 md:h-56 lg:h-64 w-auto object-contain pendulum" />
            </div>
          ))}
        </div>
      </header>
    </div>
  );
};

export default ElevateBusiness;
