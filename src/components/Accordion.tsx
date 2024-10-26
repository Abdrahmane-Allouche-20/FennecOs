// Accordion.tsx
import React, { useState } from "react";

// Define the types for the props
interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="my-5">
      <div className="flex gap-1 items-center">
        <button onClick={toggleAccordion} className="flex gap-2 items-center">
          <span className="text-2xl text-orange-500">{isOpen ? "-" : "+"}</span>

          <h1 className="text-orange-500 font-black text-base  lg:text-xl">
            {title}
          </h1>
        </button>
      </div>
      {isOpen && (
        <div className="p-4 text-white text-xs md:text-base lg:text-lg">
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
