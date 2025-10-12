=== File: src/pages/board/BoardOne.js ===
=== Content ===

import MenuData from '../../MenuData';
import { React, useEffect } from 'react';
import Item from '../../components/menu/Item';


export default function BoardOne({ abstractFn, document }) {


  let menuGrab = MenuData.menu;
  const cutoffNum = 38;
  const third = Math.floor(cutoffNum / 3);
  const firstSnip = menuGrab.lunch_specials.slice(0, third);
  const secondSnip = menuGrab.lunch_specials.slice(third, (third * 2));
  const thirdSnip = menuGrab.lunch_specials.slice((third * 2), cutoffNum);

  var colorStyle = {
    color: 'rgb(255,255,255)'
  };

  if(document != null){
    colorStyle['color'] = document.colors.one;
  };


  useEffect(() => {
    console.log('useEffect change abstract')
    console.log(abstractFn);

    
  }, [abstractFn, document]);

  return (
    <>
      <div className='fullSection lunch_specials'>
        <div className='header'>
          <div className='title highlight' style={colorStyle}>{abstractFn('Specials')}</div>
        </div>
        <div className='body'>
          <div className='third'>
            {firstSnip.map((obj, index) => (
              
              <Item abr={`L${index + 1}`} name={abstractFn(obj[0])} description={abstractFn(obj[1])} price={obj[2]} priceTwo={obj[3]} style={colorStyle}/>
            ))}
          </div>
          <div className='third' style={{borderLeft: '3px solid white'}}>
            
            {secondSnip.map((obj, index) => (
              
              <Item abr={`L${index + third + 1}`} name={abstractFn(obj[0])} description={abstractFn(obj[1])} price={obj[2]} priceTwo={obj[3]} style={colorStyle}/>
            ))}
          </div>
          <div className='third' style={{borderLeft: '3px solid white'}}>
            
            {thirdSnip.map((obj, index) => (
              
              <Item abr={`L${index + (third * 2) + 1}`} name={abstractFn(obj[0])} description={abstractFn(obj[1])} price={obj[2]} priceTwo={obj[3]} style={colorStyle}/>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
=== End of src/pages/board/BoardOne.js ===

