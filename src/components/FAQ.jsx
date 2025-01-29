import React, { useState, useRef } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is an accordion?",
      answer:
        "An accordion is a UI component that expands to reveal content and collapses to hide it.",
    },
    {
      question: "How does state work in React?",
      answer:
        "State in React is an object that determines how the component renders and behaves.",
    },
  ];

  return (
    <div className="w-[100%] flex flex-col justify-center items-center">
      <div className="bg-[#000222] text-white text-3xl font-medium text-center w-[100%] py-4">
        FREQUENTLY ASKED QUESTIONS (FAQ)
      </div>

      <div className="w-full max-w-[70%] mt-20 flex flex-col gap-4 ">
        {faqs.map((faq, index) => (
          <div key={index} className="">
            <div
              className="flex justify-between items-center py-8 px-4 bg-[#F47013] shadow-lg rounded-lg border-none text-white cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <span className="text-xl font-medium">{faq.question}</span>
              <span className="text-2xl">
                {openIndex === index ? "-" : "+"}
              </span>
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-4 bg-gray-100 text-black">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
