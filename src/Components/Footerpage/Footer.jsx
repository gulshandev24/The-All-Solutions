import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-500 mt-48 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col px-16 md:flex-row justify-between text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-bold">The all Solutions</h2>
            <p className="mt-2">Streamlining Development and Operations.<br />Creating New Realities.</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-10">
            <div className="mb-6 md:mb-0">
              <h3 className="font-bold">Information</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#about-us" className="hover:underline">About Us</a></li>
                <li><a href="#more-search" className="hover:underline">More Search</a></li>
                <li><a href="#blog" className="hover:underline">Blog</a></li>
                <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0">
              <h3 className="font-bold">Helpful Links</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#events" className="hover:underline">Events</a></li>
                <li><a href="#careers" className="hover:underline">Careers</a></li>
                <li><a href="#alumni" className="hover:underline">Alumni</a></li>
                <li><a href="#sitemap" className="hover:underline">Sitemap</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Services</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#web-design" className="hover:underline">Web Design</a></li>
                <li><a href="#web-development" className="hover:underline">Web Development</a></li>
                <li><a href="#outsourcing" className="hover:underline">Outsourcing</a></li>
                <li><a href="#dummy-text" className="hover:underline">Dummy Text</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 px-16 flex flex-col md:flex-row justify-between items-center border-t border-white pt-6">
          <p className="mb-4 md:mb-0">© All Solutions PVT 2024</p>
          <div className="flex space-x-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter ↗</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook ↗</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
