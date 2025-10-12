=== File: src/pages/board/BoardTwo.js ===
=== Content ===

import MenuData from '../../MenuData';
import React from 'react';
import Item from '../../components/menu/Item';


export default function BoardTwo({ abstractFn, document }) {


  let menuGrab = MenuData.menu;
  const cutoffNum = 38;
  const specialsSnippet = menuGrab.lunch_specials.slice(cutoffNum, menuGrab.lunch_specials.length)


  var colorOne = 'rgb(255,255,255)';
  var colorTwo = 'rgb(255,255,255)';
  var colorThree = 'rgb(255,255,255)';

  if(document != null){
    colorOne = document.colors.one;
    colorTwo = document.colors.two;
    colorThree = document.colors.three;
  };

  const styleOne = {
    color: colorOne
  }
  const styleTwo = {
    color: colorTwo
  }
  const styleThree = {
    color: colorThree
  }


  return (
    <>
      <div className='majoritySection lunch_specials'>
        <div className='header'>
          <div className='title highlight' style={styleOne}>
            {abstractFn('Specials')}
          </div>
        </div>
        <div className='body'>
          <div className='half'>
            {specialsSnippet.slice(0, specialsSnippet.length / 2).map((obj, index) => (
              
              <Item abr={`L${index + 1 + cutoffNum}`} name={abstractFn(obj[0])} description={abstractFn(obj[1])} price={obj[2]} priceTwo={obj[3]} style={styleOne}/>
            ))}
          </div>
          <div className='half' style={{borderLeft: '3px solid white'}}>
            
            {specialsSnippet.slice(specialsSnippet.length / 2, specialsSnippet.length).map((obj, index) => (
              
              <Item abr={`L${index + Math.floor(specialsSnippet.length / 2) + 1 + cutoffNum}`} name={abstractFn(obj[0])} description={abstractFn(obj[1])} price={obj[2]} priceTwo={obj[3]} style={styleOne}/>
            ))}
          </div>
        </div>
      </div>
      <div className='minoritySection lunch_sec' style={{justifyContent: 'space-around'}}>
        <div className='box lunch_cold' style={{marginTop: '12px'}}>
          <div className='header highlight'>
            <div className='title' style={styleTwo}>
              {abstractFn('Cold')}
            </div>
          </div>
          <div className='body'>
              {menuGrab.cold_menu.map((obj, index) => (
                
                <Item abr={`   •`} name={abstractFn(obj[0])} price={obj[1]} priceTwo={obj[2]} style={styleTwo}/>
              ))}
          </div>
        </div>
        <div className='box lunch_hot'>
          <div className='header highlight'>
            <div className='title' style={styleThree}>
              {abstractFn('Hot')}
            </div>
          </div>
          <div className='body'>
              {menuGrab.hot_menu.map((obj, index) => (
                
                <Item abr={`   •`} name={abstractFn(obj[0])} price={obj[1]} priceTwo={obj[2]} style={styleThree}/>
              ))}
          </div>
        </div>
        
      </div>
    </>
  )
}
=== End of src/pages/board/BoardTwo.js ===

