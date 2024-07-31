// import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './Components/Landingpage/Home';
// import Loader from './Components/Utils/Loader';
// import Navbar from './Components/Header/Navbar';
// import Contact from './Components/ContactUsPage/Contact'

// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false);
//     }, 10000); // Adjust the timeout duration as needed
//   }, []);

//   return (
//     <BrowserRouter>
//       {loading ? (
//         <Loader />
//       ) : (
//         <>
//           <Navbar />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </>
//       )}
//     </BrowserRouter>
//   );
// }

// export default App;


// import React from 'react';
// import './App.css'; 

// const App = () => {
//   return (
//     <>
//     <div className="relative h-screen  px-8 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/Images/hero.png")' }}>
//       <Navbar />
//       <HeroSection />
//     </div>
//     </>
//   );
// };

// const Navbar = () => {
//   return (
//     <nav className="flex justify-between items-center  py-6">
//       <div className="flex items-center">
//         <img src="/Images/apple.png" alt="Logo" className="h-8" />
//       </div>
//       <ul className="hidden md:flex space-x-6 items-center">
//         <li><a href="#services" className="text-black">Services</a></li>
//         <li><a href="#projects" className="text-black">Clients Projects</a></li>
//         <li><a href="#contact" className="bg-blue-500 text-white py-2 px-4 rounded-3xl">Contact Us</a></li>
//       </ul>
//     </nav>
//   );
// };

// const HeroSection = () => {
//   return (
//     <section className="flex flex-col items-center justify-center text-center h-full ">
//       <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-black">Creating New Realities</h1>
//       <p className="mt-4 text-md md:text-lg lg:text-xl text-black">
//         Streamlining Development and Operations.<br />
//         Creating New Realities.
//       </p>
//       <a href="#start" className="mt-8 bg-blue-500 text-white py-3 px-6 rounded-3xl">Start your site</a>
//       <div className="absolute bottom-10 w-full flex justify-between items-center text-black px-8">
//         <div className="text-left">
//           <p>info@thealisolutions.</p>
//         </div>
//         <div className="text-center">
//           <p>+35 365 8953 23</p>
//         </div>
//         <div className="text-right">
//         <p>Social</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default App;


// import React, { useState } from 'react';
// import './App.css';
// import Footer from './Components/Footerpage/Footer'
// const App = () => {
//   return (
//     <>
//       <div className="relative h-[50rem] px-8 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/Images/hero.png")' }}>
//         <Navbar />
//         <HeroSection />
//       </div>
//       <Footer className="mt-24"/>
//     </>
//   );
// };

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <nav className="flex justify-between items-center py-6">
//         <div className="flex items-center">
//           <img src="/Images/logo111.png" alt="Logo" className="h-8" />
//         </div>
//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}></path>
//             </svg>
//           </button>
//         </div>
//         <ul className="hidden md:flex space-x-6 items-center">
//           <li><a href="#services" className="text-black">Services</a></li>
//           <li><a href="#projects" className="text-black">Clients Projects</a></li>
//           <li><a href="#contact" className="bg-blue-500 text-white py-2 px-4 rounded-3xl">Contact Us</a></li>
//         </ul>
//       </nav>

//       {/* Mobile menu */}
//       <div className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
//         <button onClick={() => setIsOpen(false)} className="text-black p-4 focus:outline-none">
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//           </svg>
//         </button>
//         <ul className="flex flex-col space-y-6 p-6">
//           <li><a href="#services" className="text-black">Services</a></li>
//           <li><a href="#projects" className="text-black">Clients Projects</a></li>
//           <li><a href="#contact" className="bg-blue-500 text-white py-2 px-4 rounded-3xl">Contact Us</a></li>
//         </ul>
//       </div>
//     </>
//   );
// };

// const HeroSection = () => {
//   return (
//     <section className="flex flex-col items-center justify-center text-center h-full px-4 sm:px-6 lg:px-8">
//       <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-black">Creating New Realities</h1>
//       <p className="mt-4 text-md md:text-lg lg:text-xl text-black">
//         Streamlining Development and Operations.<br />
//         Creating New Realities.
//       </p>
//       <a href="#start" className="mt-8 bg-blue-500 text-white py-3 px-6 rounded-3xl">Start your site</a>
//       <div className="absolute bottom-10 w-full flex flex-col md:flex-row justify-between items-center text-black px-4 sm:px-8">
//         <div className="text-left mb-4 md:mb-0">
//           <p>info@thealisolutions.com</p>
//         </div>
//         <div className="text-center mb-4 md:mb-0">
//           <p>+91-93940-20606</p>
//         </div>
//         <div className="text-right">
//           <p>Social</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default App;














// import React, { useState, useEffect } from 'react';
// import './App.css';
// import Footer from './Components/Footerpage/Footer';

// const App = () => {
//   return (
//     <>
//       <div className="relative h-[50rem] px-8 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/Images/hero.png")' }}>
//         <Navbar />
//         <HeroSection />
//       </div>
//       <Footer className="mt-24"/>
//     </>
//   );
// };

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scroll, setScroll] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScroll(window.scrollY > 0);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <nav className={`fixed top-0 left-0 w-full z-10 flex justify-between items-center py-6 transition-colors duration-300 ${scroll ? 'bg-[#eaeff0]' : 'bg-transparent'} px-8`}>
//         <div className="flex items-center">
//           <img src="/Images/logo111.png" alt="Logo" className="h-8" />
//         </div>
//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}></path>
//             </svg>
//           </button>
//         </div>
//         <ul className="hidden md:flex space-x-6 items-center">
//           <li><a href="#services" className="text-black">Services</a></li>
//           <li><a href="#projects" className="text-black">Clients Projects</a></li>
//           <li><a href="#contact" className="bg-blue-500 text-white py-2 px-4 rounded-3xl">Contact Us</a></li>
//         </ul>
//       </nav>

//       {/* Mobile menu */}
//       <div className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
//         <button onClick={() => setIsOpen(false)} className="text-black p-4 focus:outline-none">
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//           </svg>
//         </button>
//         <ul className="flex flex-col space-y-6 p-6">
//           <li><a href="#services" className="text-black">Services</a></li>
//           <li><a href="#projects" className="text-black">Clients Projects</a></li>
//           <li><a href="#contact" className="bg-blue-500 text-white py-2 px-4 rounded-3xl">Contact Us</a></li>
//         </ul>
//       </div>
//     </>
//   );
// };

// const HeroSection = () => {
//   return (
//     <section className="flex flex-col items-center justify-center text-center h-full px-4 sm:px-6 lg:px-8">
//       <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-black">Creating New Realities</h1>
//       <p className="mt-4 text-md md:text-lg lg:text-xl text-black">
//         Streamlining Development and Operations.<br />
//         Creating New Realities.
//       </p>
//       <a href="#start" className="mt-8 bg-blue-500 text-white py-3 px-6 rounded-3xl">Start your site</a>
//       <div className="absolute bottom-10 w-full flex flex-col md:flex-row justify-between items-center text-black px-4 sm:px-8">
//         <div className="text-left mb-4 md:mb-0">
//           <p>info@thealisolutions.com</p>
//         </div>
//         <div className="text-center mb-4 md:mb-0">
//           <p>+91-93940-20606</p>
//         </div>
//         <div className="text-right">
//           <p>Social</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default App;














import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './Components/Footerpage/Footer';
// import Services from './Components/Services';
// import FAQ from './Components/FAQ';

import Service from './Components/Servicepage/Service';
import Faq from './Components/Faqpage/Faq';
const App = () => {
  return (
    <>
      <div className="relative h-[50rem] px-8 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/Images/hero.png")' }}>
        <Navbar />
        <HeroSection />
      </div>
      <Service/>
      <Faq />
      <Footer className="mt-24" />
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-10 flex justify-between items-center py-6 transition-colors duration-300 ${scroll ? 'bg-[#eaeff0]' : 'bg-transparent'} px-8`}>
        <div className="flex items-center">
          <img src="/Images/logo111.png" alt="Logo" className="h-8" />
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}></path>
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex space-x-6 items-center">
          <li><a href="#services" className="text-black">Services</a></li>
          <li><a href="#projects" className="text-black">Clients Projects</a></li>
          <li><a href="#contact" className="bg-blue-500 text-white py-2 px-4 rounded-3xl">Contact Us</a></li>
        </ul>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <button onClick={() => setIsOpen(false)} className="text-black p-4 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <ul className="flex flex-col space-y-6 p-6">
          <li><a href="#services" className="text-black">Services</a></li>
          <li><a href="#projects" className="text-black">Clients Projects</a></li>
          <li><a href="#contact" className="bg-blue-500 text-white py-2 px-4 rounded-3xl">Contact Us</a></li>
        </ul>
      </div>
    </>
  );
};

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center h-full px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-black">Creating New Realities</h1>
      <p className="mt-4 text-md md:text-lg lg:text-xl text-black">
        Streamlining Development and Operations.<br />
        Creating New Realities.
      </p>
      <a href="#start" className="mt-8 bg-blue-500 text-white py-3 px-6 rounded-3xl">Start your site</a>
      <div className="absolute bottom-10 w-full flex flex-col md:flex-row justify-between items-center text-black px-4 sm:px-8">
        <div className="text-left mb-4 md:mb-0">
          <p>info@thealisolutions.com</p>
        </div>
        <div className="text-center mb-4 md:mb-0">
          <p>+91-93940-20606</p>
        </div>
        <div className="text-right">
          <p>Social</p>
        </div>
      </div>
    </section>
  );
};

export default App;
