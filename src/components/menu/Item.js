import { useState } from 'react';

export default function Item({ abr, name, price, priceTwo, description, style }) {

  
  // console.log('priceTwo', name, priceTwo)
  return (
    <div className='item'>
        
      <div className='left highlight' style={style}>
        
        { abr }
      </div>
      <div className='right'>
        
        <div className='top'>
          <div className='name'>
            { name }
          </div>
          <div className='dots'>
            
          </div>
          <div className='price'>
            {`$${price.toFixed(2)}`}
          </div>

          {(priceTwo != null && priceTwo != undefined) && (
            <div className='priceTwo'>
              {`$${priceTwo.toFixed(2)}`}
            </div>
          )}
        
        </div>
        {description != null && (
          <div className='bottom highlight' style={style}>
            { description }
          </div>
        )}
      </div>
      
    </div>
  )

}