"use client"
import React, { FC, useState } from "react";
import { FaqProps } from "./faq";

interface FaqscardProps {
    faqs: FaqProps[];
  }
  
  const Faqscard: FC<FaqscardProps> = ({ faqs }) => {
    return (
      <dl>
        {faqs.map((faq, index) => (
          <FaqItem key={index} faq={faq} />
        ))}
      </dl>
    );
  };
  
  interface FaqItemProps {
    faq: FaqProps;
  }
  
  const FaqItem: FC<FaqItemProps> = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(faq.open || false);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      
          <React.Fragment>
      <dt aria-expanded={isOpen ? 'true' : 'false'} onClick={toggle}>
        {faq.question}
        <span className="toggle-text">{isOpen ? 'Collapse' : 'Expand'}</span>
      </dt>
      <dd className={!isOpen ? 'hidden' : undefined}>{faq.answer}</dd>
    </React.Fragment>
         
          
       
    );
  };
  
  export default Faqscard;