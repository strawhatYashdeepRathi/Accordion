import React, { useState }  from 'react';
import './style.css'
import { Data } from './utils/data';


const Accordion = () => {
    const [isActive, setIsActive] = useState(false);

    const toggle = index =>{
      if(isActive === index){
        return setIsActive(null);
    }
    setIsActive(index);
    }
  return (
    <div>
      <h1>OnlyOne Open Accordion</h1>
      <div>
        <div>
          {Data.map((item, index) => {
              return (
                <div className='acc'>
                  <div className='title' onClick={() => toggle(index)} key={index}>
                    <h3>{item.title}</h3>
                    <span className='plus'>{isActive === index ? '➖' : '➕'}</span>
                  </div>
                  {isActive === index ? (
                    <div className='content'>
                      <p>{item.content}</p>
                    </div>
                  ) : null}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default Accordion;