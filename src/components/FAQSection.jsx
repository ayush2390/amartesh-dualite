import React, { useState } from "react";
import image from "../assets/Vector.png";
import image1 from "../assets/Vector1.png";

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
    <div className="bg-[#F8F8F8] px-[92px] py-[44px] w-full h-[867px] flex justify-center items-center">
      <div className="h-[779px] flex py-[82px] gap-[73px] flex-col">
        <div>
          <h2 className="text-[64px] font-bold font-raleway text-center">
            Frequently Asked{" "}
            <span className="text-[#214A3E] italic">Questions</span>
          </h2>
          <p className="text-center font-raleway  text-[#214A3E] text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            beatae error laborum.
          </p>
        </div>
        <div className="w-[852px]">
          <ul className="text-[#214A3E]">
            {questions.map((question, index) => (
              <li key={index}>
                <div
                  className={`flex font-raleway justify-between items-left flex-col cursor-pointer border-t border-b border-gray-300 py-[24px] ${
                    activeIndex === index ? "gap-[20px]" : ""
                  }`}
                  onClick={() => handleClick(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-[22px] font-bold w-[796px]">
                      {index + 1}. {question.title}
                    </h3>
                    <div>
                      <img
                        src={activeIndex === index ? image1 : image}
                        className=""
                      />
                    </div>
                  </div>
                  <div>
                    {activeIndex === index && (
                      <div className="leading-[28px]">
                        <p className="text-[#214A3E] font-medium text-[18px]">
                          {question.answer}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
