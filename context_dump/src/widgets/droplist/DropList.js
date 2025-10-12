=== File: src/widgets/droplist/DropList.js ===
=== Content ===
import './DropList.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


export default function DropList({ list, children }) {

  const [display, setDisplay] = useState(false);

  const toggleDisplay = () => {
    console.log('toggleDisplay');
    console.log(display);
    setDisplay(!display);
  };

  return (
    <div className="droplist" onClick={toggleDisplay}>
      {children}
      {display && (
        <div className="list">
          {list && list.map((item) => {

            switch(item.type) {
              case 'link':
                return (
                  <NavLink 
                    to={item.path} 
                    key={Math.random()} 
                    style={{ textDecoration: 'none' }}
                    onClick={() => setDisplay(false)}
                  > 
                    <div className='item'>
                      <span>{item.title}</span>
                    </div>
                  </NavLink>
                )
              case 'action':
                return (
                  <div key={Math.random()} className='item' onClick={item.callback}>
                    <span>{item.title}</span>
                  </div>
                )

              default:
                return (
                  <div>error droplist</div>
                )
            }

          })}
        </div>
      )}
    </div>
  )
};
=== End of src/widgets/droplist/DropList.js ===

