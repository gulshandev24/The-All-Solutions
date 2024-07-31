import React, { useState } from 'react';

const faq = [
  { question: 'What is your service?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { question: 'How does it work?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { question: 'What are the benefits?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto">
          {faq.map((faq, index) => (
            <div key={index} className="mb-4">
              <button onClick={() => toggleFAQ(index)} className="w-full text-left bg-gray-200 p-4 rounded-lg flex justify-between items-center focus:outline-none">
                <span>{faq.question}</span>
                <span>{openIndex === index ? '-' : '+'}</span>
              </button>
              {openIndex === index && <div className="mt-2 p-4 bg-gray-100 rounded-lg">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
