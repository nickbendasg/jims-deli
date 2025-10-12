import './Toolbar.css';
import Button from '../button/Button';
import { useState, useEffect, useRef } from 'react';


export default function Toolbar({ orientation, buttons }) {


  return (
    <div className={`buttonRowContainer ${orientation}`}>
      {buttons && buttons.map((btn) => (
        <div key={Math.random()}>
          <Button 
            name={btn.name}
            icon={btn.icon}
            onClick={btn.callback}
          />
        </div>
      ))}
    </div>
  )
};