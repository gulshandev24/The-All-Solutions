// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../../Assests/Image/logo.jpg';

// const Navbar = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav className="bg-white shadow-md">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <div className="flex items-center">
//           <img src={logo} alt="PairBytes Logo" className="h-16 mr-2" />
//         </div>
//         <ul className="hidden lg:flex space-x-8">
//           <li><Link to="/" className="text-gray-700 text-lg hover:text-gray-900">Home</Link></li>
//           <li className="relative group">
//             <Link to="/expertise" className="text-gray-700 text-lg hover:text-gray-900">Expertise</Link>
//             <div className="absolute hidden group-hover:block bg-white shadow-md mt-1">
//               <Link to="/expertise/item1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Item 1</Link>
//               <Link to="/expertise/item2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Item 2</Link>
//             </div>
//           </li>
//           <li className="relative group">
//             <Link to="/services" className="text-gray-700 text-lg hover:text-gray-900">Services</Link>
//             <div className="absolute hidden group-hover:block bg-white shadow-md mt-1">
//               <Link to="/services/item1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Item 1</Link>
//               <Link to="/services/item2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Item 2</Link>
//             </div>
//           </li>
//           <li><Link to="/portfolio" className="text-gray-700 text-lg hover:text-gray-900">Portfolio</Link></li>
//           <li><Link to="/blog" className="text-gray-700 text-lg hover:text-gray-900">Blog</Link></li>
//           <li><Link to="/about" className="text-gray-700 text-lg hover:text-gray-900">About</Link></li>
//           <li><Link to="/contact" className="text-gray-700 text-lg hover:text-gray-900">Contact us</Link></li>
//         </ul>
//         <div className="hidden lg:block">
//           <button className="bg-yellow-500 text-white px-4 py-2 rounded">Get in Touch</button>
//         </div>
//         <div className="lg:hidden">
//           <button className="text-gray-700 focus:outline-none" onClick={toggleMobileMenu}>
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//       {isMobileMenuOpen && (
//         <div className="lg:hidden bg-white shadow-md">
//           <ul className="space-y-2 px-4 py-2">
//             <li><Link to="/" className="block text-gray-700 text-lg hover:text-gray-900">Home</Link></li>
//             <li className="relative group">
//               <Link to="/expertise" className="block text-gray-700 text-lg hover:text-gray-900">Expertise</Link>
//               <div className="mt-1">
//                 <Link to="/expertise/item1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Item 1</Link>
//                 <Link to="/expertise/item2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Item 2</Link>
//               </div>
//             </li>
//             <li className="relative group">
//               <Link to="/services" className="block text-gray-700 text-lg hover:text-gray-900">Services</Link>
//               <div className="mt-1">
//                 <Link to="/services/item1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Item 1</Link>
//                 <Link to="/services/item2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Item 2</Link>
//               </div>
//             </li>
//             <li><Link to="/portfolio" className="block text-gray-700 text-lg hover:text-gray-900">Portfolio</Link></li>
//             <li><Link to="/blog" className="block text-gray-700 text-lg hover:text-gray-900">Blog</Link></li>
//             <li><Link to="/about" className="block text-gray-700 text-lg hover:text-gray-900">About</Link></li>
//             <li><Link to="/contact" className="block text-gray-700 text-lg hover:text-gray-900">Contact us</Link></li>
//             <li>
//               <button className="bg-yellow-500 text-white w-full px-4 py-2 rounded mt-2">Get in Touch</button>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../../Assests/Image/logo.jpg';

// const menuItems = [
//   { title: 'Home', path: '/' },
//   {
//     title: 'Expertise', path: '/expertise', subItems: [
//       { title: 'Item 1', path: '/expertise/item1' },
//       { title: 'Item 2', path: '/expertise/item2' }
//     ]
//   },
//   {
//     title: 'Services', path: '/services', subItems: [
//       { title: 'Item 1', path: '/services/item1' },
//       { title: 'Item 2', path: '/services/item2' }
//     ]
//   },
//   { title: 'Portfolio', path: '/portfolio' },
//   { title: 'Blog', path: '/blog' },
//   { title: 'About', path: '/about' },
//   { title: 'Contact us', path: '/contact' }
// ];

// const Navbar = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-md text-white">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <div className="flex items-center">
//           <img src={logo} alt="PairBytes Logo" className="h-16 mr-2" />
//         </div>
//         <ul className="hidden lg:flex space-x-8">
//           {menuItems.map(item => (
//             <li key={item.title} className={item.subItems ? 'relative group' : ''}>
//               <Link to={item.path} className="text-white text-lg hover:text-gray-300">{item.title}</Link>
//               {item.subItems && (
//                 <div className="absolute hidden group-hover:block bg-white shadow-md mt-1">
//                   {item.subItems.map(subItem => (
//                     <Link key={subItem.title} to={subItem.path} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">{subItem.title}</Link>
//                   ))}
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>
//         <div className="hidden lg:block">
//           <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">Get in Touch</button>
//         </div>
//         <div className="lg:hidden">
//           <button className="text-white focus:outline-none" onClick={toggleMobileMenu}>
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//       <div
//         className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
//           isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
//         } lg:hidden`}
//       >
//         <div className="flex justify-end p-4">
//           <button className="text-gray-700" onClick={toggleMobileMenu}>
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//             </svg>
//           </button>
//         </div>
//         <ul className="space-y-2 px-4 py-2">
//           {menuItems.map(item => (
//             <li key={item.title} className={item.subItems ? 'relative group' : ''}>
//               <Link to={item.path} className="block text-gray-700 text-lg hover:text-gray-900">{item.title}</Link>
//               {item.subItems && (
//                 <div className="mt-1">
//                   {item.subItems.map(subItem => (
//                     <Link key={subItem.title} to={subItem.path} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">{subItem.title}</Link>
//                   ))}
//                 </div>
//               )}
//             </li>
//           ))}
//           <li>
//             <button className="bg-yellow-500 text-white w-full px-4 py-2 rounded mt-2 hover:bg-yellow-600">Get in Touch</button>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faCogs, faConciergeBell, faProjectDiagram, faBlog, faInfoCircle, faEnvelope, faChevronDown } from '@fortawesome/free-solid-svg-icons';
// import logo from '../../Assests/Image/logo.jpg';

// const menuItems = [
//   { title: 'Home', path: '/', icon: faHome },
//   {
//     title: 'Expertise', path: '/expertise', icon: faCogs, subItems: [
//       { title: 'Item 1', path: '/expertise/item1' },
//       { title: 'Item 2', path: '/expertise/item2' }
//     ]
//   },
//   {
//     title: 'Services', path: '/services', icon: faConciergeBell, subItems: [
//       { title: 'Item 1', path: '/services/item1' },
//       { title: 'Item 2', path: '/services/item2' }
//     ]
//   },
//   { title: 'Portfolio', path: '/portfolio', icon: faProjectDiagram },
//   { title: 'Blog', path: '/blog', icon: faBlog },
//   { title: 'About', path: '/about', icon: faInfoCircle },
//   { title: 'Contact us', path: '/contact', icon: faEnvelope }
// ];

// const Navbar = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-md text-white">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <div className="flex items-center">
//           <img src={logo} alt="PairBytes Logo" className="h-16 mr-2" />
//         </div>
//         <ul className="hidden lg:flex space-x-8">
//           {menuItems.map(item => (
//             <li key={item.title} className={item.subItems ? 'relative group' : ''}>
//               <Link to={item.path} className="text-white text-lg hover:text-gray-300 flex items-center">
//                 <FontAwesomeIcon icon={item.icon} className="mr-2" />
//                 {item.title}
//                 {item.subItems && <FontAwesomeIcon icon={faChevronDown} className="ml-1" />}
//               </Link>
//               {item.subItems && (
//                 <div className="absolute hidden group-hover:block bg-white shadow-md mt-1 rounded-lg">
//                   {item.subItems.map(subItem => (
//                     <Link key={subItem.title} to={subItem.path} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">{subItem.title}</Link>
//                   ))}
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>
//         <div className="hidden lg:block">
//           <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">Get in Touch</button>
//         </div>
//         <div className="lg:hidden">
//           <button className="text-white focus:outline-none" onClick={toggleMobileMenu}>
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//       <div
//         className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
//           isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
//         } lg:hidden`}
//       >
//         <div className="flex justify-end p-4">
//           <button className="text-gray-700" onClick={toggleMobileMenu}>
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//             </svg>
//           </button>
//         </div>
//         <ul className="space-y-2 px-4 py-2">
//           {menuItems.map(item => (
//             <li key={item.title} className={item.subItems ? 'relative group' : ''}>
//               <Link to={item.path} className="block text-gray-700 text-lg hover:text-gray-900 flex items-center">
//                 <FontAwesomeIcon icon={item.icon} className="mr-2" />
//                 {item.title}
//                 {item.subItems && <FontAwesomeIcon icon={faChevronDown} className="ml-1" />}
//               </Link>
//               {item.subItems && (
//                 <div className="mt-1">
//                   {item.subItems.map(subItem => (
//                     <Link key={subItem.title} to={subItem.path} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">{subItem.title}</Link>
//                   ))}
//                 </div>
//               )}
//             </li>
//           ))}
//           <li>
//             <button className="bg-yellow-500 text-white w-full px-4 py-2 rounded mt-2 hover:bg-yellow-600">Get in Touch</button>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCogs, faConciergeBell, faProjectDiagram, faBlog, faInfoCircle, faEnvelope, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import logo from '../../Assests/Image/logo.jpg';

const menuItems = [
  { title: 'Home', path: '/', icon: faHome },
  {
    title: 'Expertise', path: '/expertise', icon: faCogs, subItems: [
      { title: 'Item 1', path: '/expertise/item1' },
      { title: 'Item 2', path: '/expertise/item2' }
    ]
  },
  {
    title: 'Services', path: '/services', icon: faConciergeBell, subItems: [
      { title: 'Item 1', path: '/services/item1' },
      { title: 'Item 2', path: '/services/item2' }
    ]
  },
  { title: 'Portfolio', path: '/portfolio', icon: faProjectDiagram },
  { title: 'Blog', path: '/blog', icon: faBlog },
  { title: 'About', path: '/about', icon: faInfoCircle },
  { title: 'Contact us', path: '/contact', icon: faEnvelope }
];

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-md text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
        <Link to="/">
        <img src={logo} alt="PairBytes Logo" className="h-16 mr-2" />
        </Link>
        
        </div>
        <ul className="hidden lg:flex space-x-8">
          {menuItems.map(item => (
            <li key={item.title} className={item.subItems ? 'relative group' : ''}>
              <Link to={item.path} className="text-white text-lg hover:text-gray-300 flex items-center">
                <FontAwesomeIcon icon={item.icon} className="mr-2" />
                {item.title}
                {item.subItems && <FontAwesomeIcon icon={faChevronDown} className="ml-1" />}
              </Link>
              {item.subItems && (
                <div className="absolute hidden group-hover:block bg-white shadow-md mt-1 rounded-lg">
                  {item.subItems.map(subItem => (
                    <Link key={subItem.title} to={subItem.path} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">{subItem.title}</Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="hidden lg:block">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none">Get in Touch</button>
        </div>
        <div className="lg:hidden">
          <button className="text-white focus:outline-none mobile-menu-button" onClick={toggleMobileMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
      >
        <div className="flex justify-end p-4">
          <button className="text-white focus:outline-none" onClick={toggleMobileMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <ul className="space-y-2 px-4 py-2">
          {menuItems.map(item => (
            <li key={item.title} className={item.subItems ? 'relative group' : ''}>
              <Link to={item.path} className="block text-white text-lg hover:text-gray-200 flex items-center mobile-menu-item">
                <FontAwesomeIcon icon={item.icon} className="mr-2" />
                {item.title}
                {item.subItems && <FontAwesomeIcon icon={faChevronDown} className="ml-1" />}
              </Link>
              {item.subItems && (
                <div className="mt-1">
                  {item.subItems.map(subItem => (
                    <Link key={subItem.title} to={subItem.path} className="block px-4 py-2 text-white hover:bg-gray-600">{subItem.title}</Link>
                  ))}
                </div>
              )}
            </li>
          ))}
          <li>
            <button className="bg-blue-400 text-white w-full px-4 py-2 rounded mt-2 hover:bg-blue-500 focus:outline-none">Get in Touch</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
