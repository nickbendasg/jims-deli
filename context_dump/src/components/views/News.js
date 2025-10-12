=== File: src/components/views/News.js ===
=== Content ===
import { useEffect, useRef, useState } from 'react';


export default function News({junk}) {

  const getBox = useRef();
  const currentBox = getBox.current;


  const [newspaper, setNewspaper] = useState('bad')

  const comments = [
    {
      name: 'Heidi',
      txt: 'Thank you for my delicious lobster rolls! You guys deserve the best in this next chapter of your lives! You will be missed!'
    },
    {
      name: 'Lorie',
      txt: 'Enjoy your new chapter! It was always fun bringing the kids then grand kids to Big Steve’s '
    },
    {
      name: 'Douglas',
      txt: 'Thank you for all the great meals. Will miss you. God bless you as you move on to the next leg of your life journey'
    },
    {
      name: 'Lynn',
      txt: 'Oh my goodness, my 94 year old mother is going to cry. She loves your wings and I try to get them for her every week I come to town. Enjoy your retirement!'
    },
    {
      name: 'Donna',
      txt: 'Congratulations! Enjoy! My family loved your lobster bisque'
    },
    {
      name: 'Margaret',
      txt: 'Wishing you all the best in your new venture ! We will miss you dearly'
    },
    {
      name: 'Alice',
      txt: 'Good luck with your next adventures! You will be missed. Thank you Steve and Robin.'
    },
    {
      name: 'Debbie',
      txt: 'Congratulations on the next phase. We will miss you. My husband loved to banter with you Robin. He’s been gone for over two years now. We miss you. Thanks for everything!!'
    },
    {
      name: 'Nancy',
      txt: 'Best of luck, Robin & Steve!!! Thank you for making us feel like friends and not just customers! I have missed you since moving down to the shore ... and those meatball grinders! And thanks, Robin, for being so sweet to my Mom when I used to bring her in. You both deserve everything good in life! Take care, and all the best!'
    },
    {
      name: 'Lindsay',
      txt: 'Good luck and thank you!'
    },
    {
      name: 'Ariene',
      txt: 'You guys will be missed! Good luck in opening a new door.'
    },
    {
      name: 'Lucia',
      txt: 'Congratulations enjoy your next chapter!!!'
    },
    {
      name: 'Liz',
      txt: 'Happiness & health in your new adventures!'
    },
    {
      name: 'Joyce',
      txt: 'We will miss you. Good luck in whatever you choose to do. Loved your food.'
    },
    {
      name: 'Bethany',
      txt: 'Thinking of you both as you embark on this next chapter. Hope it’s restful and fun-filled. We will miss you!'
    },
    {
      name: 'Penny',
      txt: 'Congratulations you will be missed'
    },
    {
      name: 'Linda',
      txt: 'Wishing you all the best. Enjoy retirement…we will miss you!!'
    },
    {
      name: 'Brian',
      txt: 'You guys had phenomenal food and I’m glad I got to enjoy it.'
    },
    {
      name: 'Joan',
      txt: 'You will be missed and may your next adventure be filled with happiness'
    },
    {
      name: 'Gary',
      txt: 'Best of luck Steve with your next chapter of life.'
    },
    {
      name: 'Ken',
      txt: 'You had some of the best food around! We’re sad to see you close, but enjoy your next chapter!'
    },
    {
      name: 'Steve',
      txt: 'Good luck and enjoy'
    },
    {
      name: 'Lisa',
      txt: 'We will all miss you guys, best of luck on your new chapter in life. Enjoy be safe'
    },
    {
      name: 'Debra',
      txt: 'Congratulations and best of luck to you'
    },
    {
      name: 'Rachel',
      txt: 'Awww! Robin Adam will miss getting his candy from you!!! Good luck 🍀 in your new adventure!!'
    },
    {
      name: 'Paul',
      txt: 'Will always remember the memories. Great food. I wish you the best in your new endeavors.'
    }
  ]


  var scrolldelay;


  const pageScroll = (boxGet, callbackFn, cback2) => {
    if(boxGet != null) {

      console.log(boxGet);
      // debugger;

      boxGet.scrollBy({
        top: 240,
        left: 0,
        behavior : "smooth"
      }); // horizontal and vertical scroll increments
      scrolldelay = setTimeout(function() {
        callbackFn(boxGet, callbackFn, cback2);
      }, 11000); // scrolls every 100 milliseconds

      console.log(boxGet.scrollTop);
      console.log(boxGet.scrollHeight);
      console.log(boxGet.offsetHeight);
      if ((boxGet.scrollTop + boxGet.offsetHeight) >= boxGet.scrollHeight) {
        clearTimeout(scrolldelay);
        scrolldelay = setTimeout(function() {
          cback2(boxGet, callbackFn, cback2);
        }, 2);
      }
    }
  
  }
  
  const PageUp = (boxGet, callbackFn, cback2) => {
    if(boxGet != null) {
      boxGet.scrollTo(0, 0);
      setTimeout(function() {
        // debugger;
        callbackFn(boxGet, callbackFn, cback2)
      }, 12);
    }
  }


  const doIt = () => {
    // debugger;
  };



  useEffect(() => {
    // debugger;
    // test();
    setNewspaper('active');

    console.log(newspaper);
    // debugger;

    setTimeout(function() {
      console.log(newspaper);
      // debugger;
      pageScroll(getBox.current, pageScroll, PageUp, newspaper);
    }, 1444);

    return () => {
      // debugger;
      // Anything in here is fired on component unmount.
      setNewspaper('bad');
    };
  }, [junk]);


  return(
    <div style={{overflow: 'hidden', display: 'flex', color: 'white', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', height: '90%', width: '90%', height: '90%'}}>
      <div style={{fontSize: '29px'}}><span style={{fontSize: '18px'}}>A message from </span>Steve and Robin of Big Steve's Grill</div>
      <div style={{fontSize: '15px'}}>4 Days Ago {newspaper}</div>
      <br/>
      <div style={{fontSize: '22px'}}>Big Steve’s would like to thank all our customers from the bottom of our hearts. We really enjoyed serving you for the last 14 years. Plainville is a great town with great people. You weren’t just customers we considered you friends. We are now onto a new chapter in our lives. We will miss you</div>
      <br/>
      <div style={{fontSize: '22px'}}>Thank you all for the well wishes. We passed the key on to a new family who will run the business. They are great people and I hope you will support them as much as you did us!!!</div>
      <div id="slowScroll" ref={getBox} style={{overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', flexGrow: 1, width: '100%', backgroundColor: 'rgb(16, 16, 16)', padding: '12px', marginTop: '14px'}}>
        {comments.map(cmt => (
          <div style={{width: '100%', marginBottom: '7px', fontSize: '18px', paddingBottom: '7px', borderBottom: '1px solid white'}}>
            <div>
              {cmt.name}
            </div>
            <div>
              {cmt.txt}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
=== End of src/components/views/News.js ===

