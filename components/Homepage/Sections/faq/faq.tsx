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
      question: "she met humoured sir breeding her. Six curiosity day assurance bed necessary.",
      answer: "Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.",
    },
    {
      question: "And excellence partiality estimating terminated day everything?",
      answer: "Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.",
    },
    {
      question: "Latter person am secure of estate genius at?",
      answer: "Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.",
    },
    {
      question: "Whatever landlord yourself at by pleasure of children be?",
      answer: "Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.",
    },
  ];

  return (
    <div className="faq-content ">
      <div className="flex w-full align-item pb-5 ">
        <p className="bold">FAQs</p>
      </div>
      <Faqscard faqs={faqs} />
    </div>
  );
};
export default Faq;
