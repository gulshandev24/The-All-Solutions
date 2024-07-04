import React from 'react';
import 'tailwindcss/tailwind.css';
import './LogoSlider.css';

const logos = [
  { src: '/Images/apple.png', alt: 'apple' },
  { src: '/Images/facebook.png', alt: 'facebook' },
  { src: '/Images/google.png', alt: 'Google' },
  { src: '/Images/hitachi.png', alt: 'hitachi' },
  { src: '/Images/ibm.png', alt: 'ibm' },
  { src: '/Images/microsoft.png', alt: 'mcirosoft' },
  { src: '/Images/stripe.png', alt: 'stripe' },
  { src: '/Images/uber.png', alt: 'uber' },
];

const LogoSlider = () => {
  return (
    <div className="overflow-hidden py-8">
      <div className="flex animate-marquee space-x-8 items-center" onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'} onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}>
        {logos.concat(logos).map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.alt} className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto" />
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
