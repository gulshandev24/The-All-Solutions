import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCogs,
  faConciergeBell,
  faProjectDiagram,
  faBlog,
  faInfoCircle,
  faEnvelope,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../Assests/Image/logo.jpg";

const menuItems = [
  { title: "Home", path: "/", icon: faHome },
  {
    title: "Expertise",
    icon: faCogs,
    subItems: [
      { title: "Software Developer", path: "/expertise/item1" },
      { title: "Business Developer", path: "/expertise/item2" },
      { title: "Marking", path: "/expertise/item3" },
      { title: "Social Media", path: "/expertise/item4" },
      { title: "", path: "/expertise/item5" },
    ],
  },
  {
    title: "Services",
    path: "/services",
    icon: faConciergeBell,
    subItems: [
      { title: "Service 1", path: "/services/item1" },
      { title: "Service 2", path: "/services/item2" },
    ],
  },
  { title: "Portfolio", path: "/portfolio", icon: faProjectDiagram },
  { title: "Blog", path: "/blog", icon: faBlog },
  { title: "About", path: "/about", icon: faInfoCircle },
  { title: "Contact us", path: "/contact", icon: faEnvelope },
];

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMouseEnter = (title) => {
    setActiveMenu(title);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <nav className="bg-black shadow-md text-white">
      <div
        className="container mx-auto px-4 flex justify-between items-center"
        style={{ height: "100px" }}
      >
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="TheAllSolutions Logo" className="h-16 mr-2" />
          </Link>
        </div>
        <ul className="hidden lg:flex space-x-8">
          {menuItems.map((item) => (
            <li
              key={item.title}
              className={item.subItems ? "relative group" : ""}
              onMouseEnter={() => handleMouseEnter(item.title)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={item.path}
                className="text-white text-lg hover:text-gray-300 flex items-center"
              >
                <FontAwesomeIcon icon={item.icon} className="mr-2" />
                {item.title}
                {item.subItems && (
                  <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
                )}
              </Link>
              {item.subItems && activeMenu === item.title && (
                <div
                  className="absolute left-0 top-full w-[400px] bg-gradient-to-r from-gray-100 via-white to-gray-100 border border-gray-300 shadow-lg mt-2 p-4 flex flex-col z-50 rounded-lg"
                  style={{ height: "70vh" }}
                  onMouseEnter={() => handleMouseEnter(item.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex w-full">
                    <div className="w-1/2 pr-8 border-r border-gray-300">
                      {item.subItems
                        .slice(0, Math.ceil(item.subItems.length / 2))
                        .map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={subItem.path}
                            className="block py-2 text-gray-800 hover:text-orange-600 hover:bg-gray-200 rounded-lg whitespace-nowrap transition-colors"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                    </div>
                    <div className="w-1/2 pl-8">
                      {item.subItems
                        .slice(Math.ceil(item.subItems.length / 2))
                        .map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={subItem.path}
                            className="block py-2 text-gray-800 hover:text-orange-600 hover:bg-gray-200 rounded-lg whitespace-nowrap transition-colors"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="hidden lg:block">
          <button
            className="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
          >
            Get Started
          </button>
        </div>
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none mobile-menu-button"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-y-0 right-0 w-64 bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden z-50`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <ul className="space-y-2 px-4 py-2">
          {menuItems.map((item) => (
            <li
              key={item.title}
              className={item.subItems ? "relative group" : ""}
            >
              <Link
                to={item.path}
                className="block text-white text-lg hover:text-gray-200 flex items-center mobile-menu-item"
              >
                <FontAwesomeIcon icon={item.icon} className="mr-2" />
                {item.title}
                {item.subItems && (
                  <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
                )}
              </Link>
              {item.subItems && (
                <div className="mt-1">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.title}
                      to={subItem.path}
                      className="flex items-center px-4 py-2 text-white hover:bg-gray-600"
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
          <li>
            <button className="bg-blue-400 text-white w-full px-4 py-2 rounded mt-2 hover:bg-blue-500 focus:outline-none">
              Get in Touch
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;





// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHome,
//   faCogs,
//   faConciergeBell,
//   faProjectDiagram,
//   faBlog,
//   faInfoCircle,
//   faEnvelope,
//   faChevronDown,
// } from "@fortawesome/free-solid-svg-icons";
// import logo from "../../Assests/Image/logo.jpg";

// const menuItems = [
//   { title: "Home", path: "/", icon: faHome },
//   {
//     title: "Expertise",
//     icon: faCogs,
//     subItems: [
//       { title: "Software Developer", path: "/expertise/item1" },
//       { title: "Business Developer", path: "/expertise/item2" },
//       { title: "Marking", path: "/expertise/item3" },
//       { title: "Social Media", path: "/expertise/item4" },
//       { title: "", path: "/expertise/item5" },
//     ],
//   },
//   {
//     title: "Services",
//     path: "/services",
//     icon: faConciergeBell,
//     subItems: [
//       { title: "Service 1", path: "/services/item1" },
//       { title: "Service 2", path: "/services/item2" },
//     ],
//   },
//   { title: "Portfolio", path: "/portfolio", icon: faProjectDiagram },
//   { title: "Blog", path: "/blog", icon: faBlog },
//   { title: "About", path: "/about", icon: faInfoCircle },
//   { title: "Contact us", path: "/contact", icon: faEnvelope },
// ];

// const Navbar = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const handleMouseEnter = (title) => {
//     setActiveMenu(title);
//   };

//   const handleMouseLeave = () => {
//     setActiveMenu(null);
//   };

//   return (
//     <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-md text-white">
//       <div
//         className="container mx-auto px-4 flex justify-between items-center"
//         style={{ height: "100px" }}
//       >
//         <div className="flex items-center">
//           <Link to="/">
//             <img src={logo} alt="TheAllSolutions Logo" className="h-16 mr-2" />
//           </Link>
//         </div>
//         <ul className="hidden lg:flex space-x-8">
//           {menuItems.map((item) => (
//             <li
//               key={item.title}
//               className={item.subItems ? "relative group" : ""}
//               onMouseEnter={() => handleMouseEnter(item.title)}
//               onMouseLeave={handleMouseLeave}
//             >
//               <Link
//                 to={item.path}
//                 className="text-white text-lg hover:text-gray-300 flex items-center"
//               >
//                 <FontAwesomeIcon icon={item.icon} className="mr-2" />
//                 {item.title}
//                 {item.subItems && (
//                   <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
//                 )}
//               </Link>
//               {item.subItems && activeMenu === item.title && (
//                 <div
//                   className="absolute left-0 top-full w-[400px] bg-gradient-to-r from-gray-100 via-white to-gray-100 border border-gray-300 shadow-lg mt-2 p-4 flex flex-col z-50 rounded-lg"
//                   style={{ height: "70vh" }}
//                   onMouseEnter={() => handleMouseEnter(item.title)}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   <div className="flex w-full">
//                     <div className="w-1/2 pr-8 border-r border-gray-300">
//                       {item.subItems
//                         .slice(0, Math.ceil(item.subItems.length / 2))
//                         .map((subItem) => (
//                           <Link
//                             key={subItem.title}
//                             to={subItem.path}
//                             className="block py-2 text-gray-800 hover:text-orange-600 hover:bg-gray-200 rounded-lg whitespace-nowrap transition-colors"
//                           >
//                             {subItem.title}
//                           </Link>
//                         ))}
//                     </div>
//                     <div className="w-1/2 pl-8">
//                       {item.subItems
//                         .slice(Math.ceil(item.subItems.length / 2))
//                         .map((subItem) => (
//                           <Link
//                             key={subItem.title}
//                             to={subItem.path}
//                             className="block py-2 text-gray-800 hover:text-orange-600 hover:bg-gray-200 rounded-lg whitespace-nowrap transition-colors"
//                           >
//                             {subItem.title}
//                           </Link>
//                         ))}
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>
//         <div className="hidden lg:block">
//           {/* <button className="px-6 py-2 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition-colors">
//             Get in Touch
//           </button> */}

//           <button
//   className="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
// >
//   Get Started
// </button>

//         </div>
//         <div className="lg:hidden">
//           <button
//             className="text-white focus:outline-none mobile-menu-button"
//             onClick={toggleMobileMenu}
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               ></path>
//             </svg>
//           </button>
//         </div>
//       </div>

//       <div
//         className={`fixed inset-y-0 right-0 w-64 bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg transform transition-transform duration-300 ease-in-out ${
//           isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
//         } lg:hidden z-50`}
//       >
//         <div className="flex justify-end p-4">
//           <button
//             className="text-white focus:outline-none"
//             onClick={toggleMobileMenu}
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               ></path>
//             </svg>
//           </button>
//         </div>
//         <ul className="space-y-2 px-4 py-2">
//           {menuItems.map((item) => (
//             <li
//               key={item.title}
//               className={item.subItems ? "relative group" : ""}
//             >
//               <Link
//                 to={item.path}
//                 className="block text-white text-lg hover:text-gray-200 flex items-center mobile-menu-item"
//               >
//                 <FontAwesomeIcon icon={item.icon} className="mr-2" />
//                 {item.title}
//                 {item.subItems && (
//                   <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
//                 )}
//               </Link>
//               {item.subItems && (
//                 <div className="mt-1">
//                   {item.subItems.map((subItem) => (
//                     <Link
//                       key={subItem.title}
//                       to={subItem.path}
//                       className="flex items-center px-4 py-2 text-white hover:bg-gray-600"
//                     >
//                       {subItem.title}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </li>
//           ))}
//           <li>
//             <button className="bg-blue-400 text-white w-full px-4 py-2 rounded mt-2 hover:bg-blue-500 focus:outline-none">
//               Get in Touch
//             </button>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;













