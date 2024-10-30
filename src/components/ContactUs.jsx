import React, { useState, useRef, useEffect } from "react";

const Contactus = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      // Set the height to the scrollHeight of the content
      setHeight(contentRef.current.scrollHeight);
    } else {
      // Collapse the content by setting height to 0
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-300">
      {/* Contactus Header */}
      <button
        onClick={toggleAccordion}
        className="w-full text-left py-4 px-6 font-semibold text-gray-800 flex justify-between items-center focus:outline-none"
      >
        <span>{question}</span>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </button>

      {/* Contactus Content with Smooth Transition */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-height duration-5000 ease-in-out"
        style={{ height: `${height}px` }}
      >
        <div className="px-6 py-4">
          <p className="text-gray-600">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
