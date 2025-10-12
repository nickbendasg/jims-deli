
import MenuData from '../../MenuData';
import React from 'react';
import Item from '../../components/menu/Item';
import Viewport from '../../components/viewport/Viewport';



export default function BoardThree({ abstractFn, document }) {


  let menuGrab = MenuData.menu;

  var colorFour = 'rgb(255,255,255)';
  var colorFive = 'rgb(255,255,255)';

  if(document != null){
    colorFour = document.colors.four;
    colorFive = document.colors.five;
  };

  const styleFour = {
    color: colorFour
  }
  const styleFive = {
    color: colorFive
  }

  return (
    <>

      <div style={{width: '94%', height: '94%', margin: '3%', marginTop: '0px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
        <div className='majoritySection breakfast_specials'>
          <div className='header'>
            <div className='title'>{abstractFn('Breakfast')}</div>
            <div className='title highlight' style={{...{flexGrow: 1}, ...styleFour}}>{abstractFn('Specials')}</div>
          </div>
          <div className='body'>
            <div className='half'>
              {menuGrab.breakfast_specials.slice(0, menuGrab.breakfast_specials.length / 2).map((obj, index) => (
                
                <Item abr={`B${index + 1}`} name={abstractFn(obj[0])} description={abstractFn(obj[1])} price={obj[2]} style={styleFour}/>
              ))}
            </div>
            <div className='half' style={{borderLeft: '3px solid white'}}>
              
              {menuGrab.breakfast_specials.slice(menuGrab.breakfast_specials.length / 2, menuGrab.breakfast_specials.length).map((obj, index) => (
                
                <Item abr={`B${index + Math.floor(menuGrab.breakfast_specials.length / 2) + 1}`} name={abstractFn(obj[0])} description={abstractFn(obj[1])} price={obj[2]} style={styleFour}/>
              ))}
            </div>
          </div>
        </div>
        <div className='minoritySection breakfast_main'>
          <div className='box' style={{marginTop: '14px'}}>
            <div className='header highlight' style={styleFive}>
              <div className='title'>{abstractFn('Sandwiches')}</div>
            </div>
            <div className='body'>
                {menuGrab.breakfast_sandwich.map((obj, index) => (
                  
                  <Item abr={`   •`} name={abstractFn(obj[0])} price={obj[1]} style={styleFive}/>
                ))}
            </div>
          </div>

          <Viewport document={document}/>
          
        </div>
      </div>
      
    </>
  )
}