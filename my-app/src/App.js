import React from 'react';
import './style.css';
import Accordion from './Accordion';
import { Data } from './utils/data';

function App() {
  return (
    <div>
      <h1>All Open Accordion</h1>
      <div className='Accordion'>
        {Data.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
      </div>
    </div>
  );
}

export default App;
