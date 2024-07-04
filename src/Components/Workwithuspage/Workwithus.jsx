import React from 'react';
import LogoSlider from './LogoSlider';

function Workwithus() {
  return (
    <div className="App min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 py-0">
      <header className="text-center w-full max-w-screen-lg mx-auto">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-8 text-blue-600">
          Industry leaders trust all Solution to grow their Business
        </h1>
        <LogoSlider />
      </header>
    </div>
  );
}

export default Workwithus;
