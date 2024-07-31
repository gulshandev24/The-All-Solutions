import React from 'react';

const service = [
  { title: 'Service One', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'Service Two', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'Service Three', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'Service Four', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'Service Five', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'Service Six', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
];

const Service = () => {
  return (
    <section id="services" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p>{service.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
