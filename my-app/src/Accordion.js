import React from 'react';
import './style.css'


const Accordion = ({ title, content }) => {
  //  const [isActive, setIsActive] = useState(false);
  return (
    <div className="accordion-item">
    <div className="accordion-title">
      <div>{title}</div>
      <div>{'-'}</div>
    </div>
    <div className="accordion-content">{content}</div>
  </div>
  );
};
export default Accordion;