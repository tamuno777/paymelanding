import React, { FC, useState } from "react";
import "./index.css";
import Faqscard from "./faqscard";

export interface FaqProps {
  question: string;
  answer: string;
  open?: boolean;
}

const Faq: FC = () => {
  const faqs: FaqProps[] = [
    {
      question: "FAQ question 1",
      answer: "FAQ answer 1",
    },
    {
      question: "FAQ question 2",
      answer: "FAQ answer 2",
      open: true,
    },
  ];

  return (
    <div className="faq-content p-10">
      <div className="flex w-full align-item pb-5 ">
        <p className="bold">FAQs</p>
      </div>
      <Faqscard faqs={faqs} />
    </div>
  );
};
export default Faq;
