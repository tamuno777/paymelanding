"use client"
import React, { FC, useState } from "react";
import { FaqProps } from "./faq";
import "./index.css"

interface FaqscardProps {
    faqs: FaqProps[];
  }
  
  const Faqscard: FC<FaqscardProps> = ({ faqs }) => {
    return (
      <dl className="faq-div p-3">
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
     <div className="flex flex-col card-div">
     <div aria-expanded={isOpen ? 'true' : 'false'} onClick={toggle} className="question" >
        <span className="toggle-text">{isOpen ? '-' : '+'}</span>
       <div>
       {faq.question}
        <dd className={!isOpen ? 'hidden answer' : "answer mt-3" }>{faq.answer}</dd>

       </div>

      </div>
     </div>
    </React.Fragment>
         
          
       
    );
  };
  
  export default Faqscard;