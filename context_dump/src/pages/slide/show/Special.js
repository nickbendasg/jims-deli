=== File: src/pages/slide/show/Special.js ===
=== Content ===
import './Special.css';

export default function Special ({}){

  let lunchItems = [
    // {
    //   name: 'Corned Beef Rueben',
    //   des: 'Swiss, Thousand Island, Sauerkraut',
    //   price: 9.5
    // },
    // {
    //   name: 'Italian sausage',
    //   des: 'mozzarella, peppers, onion, oil, spices, spinach, tomato',
    //   price: 7.99
    // },
    // {
    //   name: 'Hot Veal Loaf',
    //   des: 'melted havarti cheese, lettuce, tomato, honey dijon',
    //   price: 6.75
    // },
    // {
    //   name: 'Sloppy joe',
    //   des: 'provolone, onion, peppers',
    //   price: 6.99
    // },
    {
      name: 'Fish Filet',
      des: 'cheese, lettuce, tomato, tartar',
      price: 6.50
    },
    // {
    //   name: 'Foccacia bread',
    //   des: 'cheddar, lettuce, tomato, mayo',
    //   price: 7.99
    // },
    // {
    //   name: 'Mac Attack',
    //   des: 'chicken ,  rib or kielbasa, cheddar, mac and cheese, bbq, durkee onion',
    //   price: 8.75
    // },
    // {
    //   name: 'Egg Salad',
    //   des: 'Feta, guacamole, spinach, tomato, red onion, wrap',
    //   price: 6.99
    // },
    // {
    //   name: 'Black Pepper Turkey',
    //   des: 'italian cheese, spinach, tomato, red onion, guacamole, balsamic, spices',
    //   price: 8.50
    // },
    // {
    //   name: 'Taco',
    //   des: 'beef or chicken: cheddar, lettuce, tomato, onion, olives,sour cream, salsa',
    //   price: 8.50
    // },
    // {
    //   name: 'Beef or Chicken Taco Wrap',
    //   des: 'cheddar, lettuce ,tomato, onion, olives, salsa and sour cream',
    //   price: 8.50
    // },
    {
      name: 'Chicken Teryaki',
      des: 'cheddar, lettuce, tomato, ranch',
      price: 7.99
    },
    // {
    //   name: 'Buffalo chicken salad',
    //   des: 'feta cheese, lettuce, tomato, red onion, cucumbers, ranch',
    //   price: 7.99
    // },
    // {
    //   name: 'Bagel Melt',
    //   des: 'chicken or tuna salad',
    //   price: 7.99
    // },
    // {
    //   name: 'Raymco',
    //   des: 'Grilled chicken, mozzerella, alfredo sauce, spinach, tomato, red onion, spices, grated cheese',
    //   price: 8.75
    // },
    // {
    //   name: 'Focaccia bread ',
    //   des: 'warmed with Black pepper turkey, italian cheese, spinach, tomato, red onion, guacamole, balsamic, spices',
    //   price: 8.50
    // },
    {
      name: 'Focaccia Toasted ',
      des: 'Egg & tuna salad, spinach, tomato, red onion, cucumber, ranch',
      price: 7.99
    },
    {
      name: 'Deli Buffalo Chicken Breast',
      des: 'Feta cheese, spinach, tomato, red onion, ranch',
      price: 7.99
    },
    {
      name: 'BBQ rib or chicken',
      des: 'cheddar, lettuce, tomato, mayo, durkee onion',
      price: 7.99
    },
    {
      name: 'Pastrami Chili Melt',
      des: 'cheddar, chilli, spicy mustard',
      price: 8.50
    },
    // {
    //   name: 'Ham Salad',
    //   des: 'cheese, lettuce, tomato',
    //   price: 6.50
    // },
    // {
    //   name: 'Monte Cristo',
    //   des: 'Honey ham and honey turkey, swiss, and thousand island on texas french toast',
    //   price: 7.25
    // },
    {
      name: 'Buffalo Chicken Club',
      des: 'With Ranch',
      price: 8.99
    },
    // {
    //   name: 'Roast Beef',
    //   des: 'italian cheese, spinach, tomato, red onion topped with vegetable scream cheese',
    //   price: 7.99
    // },
    // {
    //   name: 'Hot dog sandwich',
    //   des: 'Cheddar, bbq sauce, durkee onion, onion',
    //   price: 7.75
    // }, 
    // {
    //   name: 'Hot Simple Italian',
    //   des: 'combo meat on toasted ciabatta, mozzarella, lettuce, tomato, mayo, oil and vinegar, and spices',
    //   price: 7.99
    // },
    // {
    //   name: 'Spicy pot roast',
    //   des: 'jack ch, onion, jalapeno, lettuce, tomato, chipotle',
    //   price: 7.99
    // },
    // {
    //   name: 'Meatball',
    //   des: 'mozzarella, red roasted, pepperoni, spices, oil',
    //   price: 7.99
    // },
    {
      name: 'Pot roast',
      des: 'cheese, mushrooms, lettuce, tomato, horseradish mayo',
      price: 7.99
    },
    // {
    //   name: 'Taco',
    //   des: 'Chicken or Beef',
    //   price: 8.50
    // },
    // {
    //   name: 'Hot Dogs',
    //   des: 'Ketchup, mustard, relish, onion',
    //   price: 2.50
    // },
    // {
    //   name: 'Carved Turkey',
    //   des: '',
    //   price: 8.50
    // },
    // {
    //   name: 'Yummy corned beef reuben',
    //   des: 'swiss, sauerkraut, thousand island',
    //   price: 9.50
    // },
    // {
    //   name: 'Reuben',
    //   des: 'corned beef, pastrami, or turkey: swiss, sauerkraut, thousand island',
    //   price: 7.88
    // },
  ]

  let lentSpecials = [
    // {
    //   name: 'Eggplant Parmesan',
    //   des: 'mozzarella, peppers, onion, sauce, spices',
    //   price: 6.99
    // },
    // {
    //   name: 'Carved Turkey',
    //   des: 'stuffing, gravy, and cranberry',
    //   price: 8.50
    // },
    // {
    //   name: 'Black bean burger',
    //   des: 'jack cheese, lettuce, tomato, red onion, roasted peppers, chipotle',
    //   price: 7.25
    // },
    // {
    //   name: 'cheddar melt club on asiago bagel',
    //   des: 'Honey Ham or turkey',
    //   price: 8.25
    // },
    {
      name: 'Meatloaf Melt',
      des: 'Cheddar, roasted peppers, onion, bbq sauce',
      price: 7.99
    },
    {
      name: 'Spicy chicken cutlet',
      des: 'jack ch, lettuce, tomato, onion, jalapeno, chipolte on ciabatta',
      price: 7.99
    },
    // {
    //   name: 'Tuna & egg salad combo',
    //   des: 'italian cheese, spinach, tomato, red onion, cucumber, ranch',
    //   price: 7.25
    // },
    // {
    //   name: 'Carved Turkey',
    //   des: 'Stuffing, gravy, cranberry',
    //   price: 8.50
    // },
    // {
    //   name: 'Turkey Club',
    //   des: 'melt on bagel',
    //   price: 8.5
    // },
    // {
    //   name: 'Carved Turkey',
    //   des: 'feta cheese, spinach, tomato, red onion, cucumber, ranch, spices',
    //   price: 8.50
    // },
    // {
    //   name: 'Ceasar Wrap',
    //   des: 'Chicken, tuna or steak',
    //   price: 8.50
    // },
    // {
    //   name: 'Breakfast Bagel',
    //   des: 'Sausage, egg and cheddar with hash brown',
    //   price: 7.25
    // },
    // {
    //   name: 'Pepper egg and cheese',
    //   des: '',
    //   price: 5.50
    // },
    // {
    //   name: 'BBQ Rib or Chicken',
    //   des: 'Cheddar, lettuce, tomato, mayo',
    //   price: 7.99
    // // },
    // {
    //   name: 'Chabatta Special',
    //   des: 'Carved turkey with melted havarti cheese, topped with lettuce ,tomato, onion, chipotle ',
    //   price: 8.99
    // },
    // {
    //   name: 'Pork, mac and cheese, cheddar, bbq, durkee onion Roll',
    //   des: '',
    //   price: 8.50
    // },
    // {
    //   name: 'Pot roast: cheddar, stuffing, mayo, onion, mushrooms',
    //   des: '',
    //   price: 8.25
    // },  
    // {
    //   name: 'Kielbasa, egg and cheese bagel',
    //   des: '',
    //   price: 6.50
    // },
    // {
    //   name: 'Egg & tuna salad combo',
    //   des: 'italian cheese, spinach, tomato, red onion, cucumber, ranch',
    //   price: 6.50
    // },
    // {
    //   name: 'Grilled chicken',
    //   des: 'mozzarella, red roasted, spinach, tomato, balsamic',
    //   price: 7.99
    // },

  ]

  return (
    <div className='special'>
      <div className='top'>
        Lunch Specials
      </div>
      <div className='split'>
        <div className='left'>
{/* 
          <div>
            chabatta or focaccia bread .50c extra
          </div> */}
          {/* <div style={{fontSize: '38px'}}>
            <span style={{marginLeft: '42px'}}>Easter Kielbasa: $7.99</span>
            <div>
              A. Cheddar, lettuce, tomato, onion, spicy mustard<br/>
              B. Jack, lettuce, tomato, onion, jalapeno, chipotle
            </div>
          </div> */}
          {/* <div style={{fontSize: '38px'}}>
            <span style={{marginLeft: '42px'}}>Chabatta special: $8.50</span>
            <div>
              A. Black pepper turkey, italian cheese, spinach, tomato, red onion, guacamole, balsamic, spices<br/>
              B. Raymco: chicken cutlet, grated cheese, spinach, tomato, red onion, spices, alfredo sauce
            </div>
          </div> */}
            
          {lunchItems.map(litem => (
            <div>
              <span style={{textTransform: 'uppercase'}}>{litem.name}</span>: <span style={{textTransform: 'lowercase'}}>{litem.des}</span> ${String(litem.price.toFixed(2))}
            </div>
          ))}
        </div>
        <div className='right'>  
{/* 
          <div style={{fontSize: '38px'}}>
            <span style={{marginLeft: '42px'}}>Carved Turkey : $8.50</span>
            <div>
              A. Stuffing, Gravy, Cranberry<br/>
              B. Swiss, lettuce, tomato, onion, ranch<br/>
              C. Jack ch, lettuce, tomato, onion, banana peppers, honey dijon
            </div> 
          </div>    */}
          <div style={{fontSize: '38px'}}>
            <span style={{marginLeft: '42px'}}>CHABATTA SPECIAL : Carved Turkey $8.50</span>
            <div>
              A. Italian cheese, spinach, tomato, red onion, guacamole, o&v, spices<br/>
              B. Cheese, stuffing, mayo, cranberry<br/>
              C. Cheddar, durkee onion, bbq and mayo<br/>
              D. Swiss, coleslaw and thousand island
            </div>
          </div>
          {lentSpecials.map(litem => (
            <div>
              <span style={{textTransform: 'uppercase'}}>{litem.name}</span>: <span style={{textTransform: 'lowercase'}}>{litem.des}</span> ${String(litem.price.toFixed(2))}
            </div>
          ))}

          <div>Soup : pasta fagioli, split pea with , and chile</div>

          <div>
            Dinners: chicken pot pie, chicken teriyaki over rice, pulled pork over rice, meatloaf mashed, country chicken mashed, buffalo chicken mac and cheese, ziti with meatballs, ziti with italian sausage

          </div>
        </div>
      </div>
    </div>
  );
};
=== End of src/pages/slide/show/Special.js ===

