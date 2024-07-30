import React, { useState } from 'react';
// import { FaArrowRight , FaMapMarkerAlt, FaEnvelope, FaPhone} from 'react-icons/fa';

const Contact= () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    budget: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
   <>
      {/* <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 p-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-white">Let's Create Something Amazing Together</h1>
        <p className="text-center mb-8 text-white">Just send us a message</p>

        <div className="flex flex-col md:flex-row items-center justify-around bg-gradient-to-r from-blue-500 to-purple-500 p-8 rounded-lg shadow-lg text-gray-800 mb-12 w-full max-w-4xl">
          <div className="flex flex-col items-center justify-center w-full h-32 md:h-40 flex-1 transform transition duration-300 hover:scale-105 hover:bg-gray-100 p-4 rounded-lg bg-white shadow-md">
            <FaMapMarkerAlt className="text-blue-500 text-3xl mb-2" />
            <span className="font-semibold">Address</span>
            <span>Pune, Maharashtra, 411014</span>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-32 md:h-40 flex-1 transform transition duration-300 hover:scale-105 hover:bg-gray-100 p-4 rounded-lg bg-white shadow-md mx-4 md:mx-8">
            <FaEnvelope className="text-green-500 text-3xl mb-2" />
            <span className="font-semibold">Email</span>
            <span>Info@theallsolutions.com</span>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-32 md:h-40 flex-1 transform transition duration-300 hover:scale-105 hover:bg-gray-100 p-4 rounded-lg bg-white shadow-md">
            <FaPhone className="text-red-500 text-3xl mb-2" />
            <span className="font-semibold">Phone</span>
            <span>+91-93940-20606</span>
          </div>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-wrap justify-center items-center md:flex-nowrap md:space-x-4">
              {['name', 'email', 'project', 'budget'].map((field, index) => (
                <div key={index} className="relative w-full md:w-64 md:h-64 p-2">
                  <input
                    type={field === 'budget' ? 'number' : 'text'}
                    name={field}
                    placeholder={`[Your ${field.charAt(0).toUpperCase() + field.slice(1)}]`}
                    value={formData[field]}
                    onChange={handleChange}
                    className={`w-full h-16 md:w-full md:h-full p-4 text-lg border-2 ${
                      formData[field] ? 'border-black' : 'border-red-500'
                    } rounded-full bg-white focus:outline-none text-center transition duration-300 transform hover:scale-105`}
                    required={field !== 'budget'}
                  />
                </div>
              ))}
              <button
                type="submit"
                className="flex items-center justify-center w-48 h-48 md:w-64 md:h-64 p-4 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 text-white rounded-full font-bold hover:from-red-500 hover:via-yellow-500 hover:to-green-500 transition duration-300 focus:outline-none"
              >
                Send <FaArrowRight className="ml-2" />
              </button>
            </div>
          </form>
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center text-4xl text-gray-600">
              <span>Thank You!</span>
            </div>
          </div>
        )}

       
      </div> */}
      {/* <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
    <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Get in Touch with Us</h1>
    <p className="text-center mb-10 text-gray-600">We're here to help you. Reach out to us anytime.</p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full max-w-4xl">
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <FaMapMarkerAlt className="text-blue-500 text-4xl mb-4" />
            <span className="font-semibold text-xl">Address</span>
            <span className="text-gray-700">Pune, Maharashtra, 411014</span>
        </div>
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <FaEnvelope className="text-green-500 text-4xl mb-4" />
            <span className="font-semibold text-xl">Email</span>
            <span className="text-gray-700">Info@theallsolutions.com</span>
        </div>
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <FaPhone className="text-red-500 text-4xl mb-4" />
            <span className="font-semibold text-xl">Phone</span>
            <span className="text-gray-700">+91-93940-20606</span>
        </div>
    </div>

    {!submitted ? (
        <form onSubmit={handleSubmit} className="w-full max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition duration-300"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition duration-300"
                    required
                />
                <input
                    type="text"
                    name="project"
                    placeholder="Project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition duration-300 col-span-2"
                    required
                />
                <input
                    type="number"
                    name="budget"
                    placeholder="Budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition duration-300 col-span-2"
                />
            </div>
            <button
                type="submit"
                className="w-full p-4 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 transition duration-300 focus:outline-none"
            >
                Send Message
            </button>
        </form>
    ) : (
        <div className="flex items-center justify-center w-full h-full mt-12">
            <div className="p-8 bg-green-200 rounded-lg shadow-md flex items-center justify-center text-4xl text-green-700">
                <span>Thank You!</span>
            </div>
        </div>
    )}
</div> */}


<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 p-4">
    <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Get in Touch with Us</h1>
    <p className="text-center mb-10 text-gray-600">We're here to help you. Reach out to us anytime.</p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full max-w-4xl">
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
            {/* <FaMapMarkerAlt className="text-blue-500 text-4xl mb-4" /> */}
            <span className="font-semibold text-xl">Address</span>
            <span className="text-gray-700">Pune, Maharashtra, 411014</span>
        </div>
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
            {/* <FaEnvelope className="text-green-500 text-4xl mb-4" /> */}
            <span className="font-semibold text-xl">Email</span>
            <span className="text-gray-700">Info@theallsolutions.com</span>
        </div>
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
            {/* <FaPhone className="text-red-500 text-4xl mb-4" /> */}
            <span className="font-semibold text-xl">Phone</span>
            <span className="text-gray-700">+91-93940-20606</span>
        </div>
    </div>

    {!submitted ? (
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-wrap justify-center items-center md:flex-nowrap md:space-x-4">
              {['name', 'email', 'project', 'budget'].map((field, index) => (
                <div key={index} className="relative w-full md:w-64 md:h-64 p-2">
                  <input
                    type={field === 'budget' ? 'number' : 'text'}
                    name={field}
                    placeholder={`[Your ${field.charAt(0).toUpperCase() + field.slice(1)}]`}
                    value={formData[field]}
                    onChange={handleChange}
                    className={`w-full h-16 md:w-full md:h-full p-4 text-lg border-2 ${
                      formData[field] ? 'border-black' : 'border-red-500'
                    } rounded-full bg-white focus:outline-none text-center transition duration-300 transform hover:scale-105`}
                    required={field !== 'budget'}
                  />
                </div>
              ))}
              <button
                type="submit"
                className="flex items-center justify-center w-48 h-48 md:w-64 md:h-64 p-4 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 text-white rounded-full font-bold hover:from-red-500 hover:via-yellow-500 hover:to-green-500 transition duration-300 focus:outline-none"
              >
                {/* Send <FaArrowRight className="ml-2" /> */}
              </button>
            </div>
          </form>
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center text-4xl text-gray-600">
              <span>Thank You!</span>
            </div>
          </div>
        )}
</div>

      <div className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300  py-8">
          <iframe
            title="google map of company"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60514.89346890307!2d73.89370017743107!3d18.565883995273882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c146e61484b5%3A0xb6482cf7a8b4b3b0!2sViman%20Nagar%2C%20Pune%2C%20Maharashtra%20411014!5e0!3m2!1sen!2sin!4v1718100455862!5m2!1sen!2sin"
            width="600"
            height="450"
            className="border-none w-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        </>
  );
};

export default Contact;



