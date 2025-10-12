

import { useDisplay } from '../../hooks/useDisplay';
import { useState, useEffect } from 'react';
import './Slide.css'
import Flower from './show/Flower';
import Special from './show/Special';

export default function Slide() {


  const imageAr = [
    'https://firebasestorage.googleapis.com/v0/b/jims-deli.appspot.com/o/cdn%2Fslide%2Ftest.png?alt=media&token=2c0a9289-7e0c-4d18-9ee9-b44e7f3abd30',
    ''
  ]
  const [counter, setCounter] = useState(1);

  const lines = [
    {
      name: 'Corned Beef egg and Swiss',
      price: '$8.95'
    },
    {
      name: 'Carved Turkey egg and cheddar cheese',
      price: '$8.50'
    },
    {
      name: 'Sausage, egg and cheddar on French toast',
      price: '$7.50'
    },
    // {
    //   name: 'Italian sausage with peppers onions, egg and cheese',
    //   price: '$8.25'
    // },
    {
      name: 'Barbaque Rib Egg and Cheddar',
      price: '$8.50'
    },
  ]

  console.log('count', counter)

  useEffect(() => {
    // Set up a timer to update the counter every 5 seconds
    const timerId = setInterval(() => {
      setCounter((prevCounter) => {
        // Update counter to go from 1 to 5, then repeat
        return prevCounter % 10 + 1;
      });
    }, 5000); // 5000 milliseconds = 5 seconds

    // Cleanup function to clear the timer
    return () => clearInterval(timerId);
  }, []); // Empty dependency array means this effect runs only on mount


  return (
    <>
      <div className='slidecount'>{counter}</div>
      <div className={`slide ${counter > 9 ? 's1' : ''}`}>
        {/* <div className='show' style={{backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/jims-deli.appspot.com/o/cdn%2Fslide%2Fformisano.jpeg?alt=media&token=87cd91a4-b604-4361-b88f-3f5b16cf8cf6')`}}>
          <Flower />
        </div> */}


        <div className='show'>
          <Special />
        </div>
        <div className='show'>
          <Special />
        </div>


        <div className='show'>
          <div className='title'>Breakfast Specials</div>
          {lines.map(line => (
            <div className='line'>
              <div className='left'>
                <div className='item'>
                  {line.name}
                </div>
                <div className='dots'>

                </div>
              </div>
              <div className='right'>
                <div className='price'>
                  {line.price}
                </div>

              </div>
            </div>
          ))}
          
        </div>
      </div>  
    </>
  )
}