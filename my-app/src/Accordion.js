import React, { useState }  from 'react';
import './style.css'


const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);
  return (
    <div className='acc'>
  <div className="accordion-item">
    <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
      <div>{title}</div>
      <div className='expansion'>{isActive ? '-' : '+'}</div>
    </div>
    {isActive && <div className="accordion-content">{content}</div>}
  </div>
</div>
  );
};
export default Accordion;