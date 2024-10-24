import React, { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const questions = [
    {
      title: "What payment methods do you accept?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Do you offer free shipping?",
      answer:
        "Yes, we offer free standard shipping on all orders over a certain amount within the continental United States. For orders below that amount or for expedited shipping options, additional fees may apply.",
    },
    {
      title: "How long does it take for delivery?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "What is your return policy?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Do you offer assembly or installation services?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="bg-white py-12 w-full h-[889px] flex justify-center items-center">
      <div className="w-[1290px] h-[779px] flex py-[82px] gap-[73px] flex-col">
        <div>
          {" "}
          <h2 className="text-[64px] font-bold text-center">
            Frequently Asked{" "}
            <span className="text-[#214A3E] italic">Questions</span>
          </h2>
          <p className="text-center mb-8 text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            beatae error laborum.
          </p>
        </div>
        <div className="w-[852px] mx-auto px-4   ">
          <ul className="text-[#214A3E]">
            {questions.map((question, index) => (
              <li key={index}>
                <div
                  className="flex justify-between items-center cursor-pointer border-t border-gray-300 py-[24px]"
                  onClick={() => handleClick(index)}
                >
                  <h3 className="text-lg font-medium">
                    {index + 1}. {question.title}
                  </h3>
                  <svg
                    className="w-6 h-6 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
                {activeIndex === index && (
                  <div className="mb-[24px] leading-[28px]">
                    <p className="text-gray-700 text-[18px] ">
                      {question.answer}
                    </p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
