
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItemProps {
  question: string;
  answer: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`mb-4 overflow-hidden border transition-all duration-300 ${isOpen ? 'bg-white border-brand-primary/30 rounded-3xl shadow-xl' : 'bg-white border-gray-100 rounded-2xl shadow-sm'}`}>
      <button
        className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-lg font-black transition-colors ${isOpen ? 'text-brand-primary' : 'text-brand-dark'}`}>{question}</span>
        <div className={`p-2 rounded-full transition-all ${isOpen ? 'bg-brand-primary text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
          <ChevronDown size={20} />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 text-gray-600 leading-relaxed text-sm">
          {answer}
        </div>
      </div>
    </div>
  );
};

export const Accordion: React.FC<{ items: AccordionItemProps[] }> = ({ items }) => {
  return (
    <div className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};
