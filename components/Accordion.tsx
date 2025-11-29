import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItemProps {
  question: string;
  answer: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-4 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-gray-800">{question}</span>
        {isOpen ? <ChevronUp className="text-brand-primary" /> : <ChevronDown className="text-gray-500" />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export const Accordion: React.FC<{ items: AccordionItemProps[] }> = ({ items }) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-6">
      {items.map((item, index) => (
        <AccordionItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};