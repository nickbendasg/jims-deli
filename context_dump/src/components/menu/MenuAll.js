=== File: src/components/menu/MenuAll.js ===
=== Content ===
import { useEffect } from "react";

export default function MenuAll() {

  var specialItemCounter = 0;


  let breakfast_sandwich_menu_array = [
    ["Egg",1.45],
    ["Egg & Cheese",1.95],
    ["Bacon, Egg & Cheese",3.50],
    ["Ham, Egg & Cheese",3.25],
    ["Sausage, Egg & Cheese",3.25],
    ["Kielbasa, Egg & Cheese",4.50],
    ["Pepper, Egg & Cheese",2.60],
    ["Western",4.50],
    ["Steak, Egg & Cheese",5.25],
    ["Pastrami, Egg & Cheese",4.50],
    ["Turkey, Egg & Cheese",4.50]
  ];

  let breakfast_assortment_menu_array = [
    ["Danish & Turnovers",1.45],
    ["Assorted Muffins",1.95],
    ["Assorted Bagels",0.90],
    ["add butter",0.35],
    ["add cream cheese",1.00],
    ["Butter Roll",1.00],
    ["with peanut butter",1.50],
    ["add banana",1.00],
    ["Croissant",0.9],
    ["with butter",1.25],
    ["Donuts",1.25]
  ];

  let cold_menu_array = [
    ["Meatloaf",5.25,9.99],
    ["Chicken Cutlet",5.25,9.99],
    ["Capicola",5.25,9.99],
    ["Buffalo Chicken",5.25,9.99],
    ["Teriyaki Chicken",5.25,9.99],
    ["Steak & Cheese",5.25,9.99],
    ["Meatball & Cheese",5.25,9.99],
    ["Pot Roast",5.99,10.99],
    ["Pulled Pork",5.25,9.99]
  ];

  let hot_menu_array = [
    ["B.L.T.",4.75,8.99],
    ["Bologna",4.50,8.80],
    ["Capicola",4.99,9.50],
    ["Chicken Breast",5.25,9.99],
    ["Cranberry, Walnut & Chic Salad",4.99,9.50],
    ["Egg Salad",4.50,8.50],
    ["Genoa Salami",4.75,8.99],
    ["Ham",4.75,8.99],
    ["Honey Ham",4.75,8.99],
    ["Honey Turkey",4.75,8.99],
    ["Imported Ham",4.75,8.99],
    ["Liverwurst",4.75,8.99],
    ["Pastrami",4.50,8.80],
    ["Pepperoni",4.99,9.50],
    ["Roast Beef",5.25,9.99],
    ["Seafood Salad",4.99,9.50],
    ["Tuna",4.50,8.50],
    ["Turkey",4.75,8.99],
    ["Back Pepper Turkey/Ham",4.75,8.99],
    ["Veal Loaf",4.75,8.99],
    ["Veggie  ",4.75,8.99]
  ];

  let tossed_salad_menu_array = [
    ["Tossed",5.25,3.99],
    ["Chicken Tossed",6.99,8.99],
    ["Buffalo Chicken",6.99,8.99],
    ["Chicken Teriyaki",6.99,8.99],
    ["Chrf (Ham, Turkey, Roast Beef & Cheese)",7.25,9.25]
  ];

  let side_salads_menu_array = [
    ["Chicken",1.45],
    ["German Potato",1.95],
    ["Potato",0.90],
    ["Pasta",0.35],
    ["4 Bean",1.00],
    ["Coleslaw",1.00],
    ["Tortellini",1.50],
    ["Cranberry Walnut Chicken",1.00],
    ["Tuna",0.9],
    ["Egg",1.25],
    ["Seafood",0.90],
    ["Macaroni",0.35],
    ["Fruit",1.00],
    ["Mushroom",1.00],
    ["Rice Pudding",1.50],
    ["Deviled Egg",1.00]
  ];


  // ["Name", "Description", Price1, Price2, "Alternate"]

  let breakfast_specials_menu_array = [
    ["Slim's Revenge","Kielbasa, egg and cheddar on wrap with hash brown and sour cream", 5.50, null, null],
    ["Alicia's Bagel", "Ham, bacon, egg and cheese on bagel", 4.25, null, null],
    ["Meatlover", "Ham, bacon, sausage, egg and cheese", 5.25, null, null],
    ["Davey B", "Ham, egg and cheese with peppers and hot sauce", 3.95, null, null],
    ["Rise and Shine", "Egg, pepper jack cheese, roasted and jalapeno peppers, with onion, salsa, hot sauce and refried beans", 4.50, null, "Add steak for  ...  $1.75"],
    ["Steaker", "Steak, cheddar, and egg on bagel", 5.35, null, null],
    ["Farmhouse", "Sausage, egg, cheddar, jalapeno and hash brown", 4.95, null, null],
    ["Rigger Wrap", "Egg, double kielbasa and Swiss on wrap", 5.95, null, null],
    ["Brian's Rigger Wrap", "Ham, egg, cheddar, swiss, provolone and hash brown", 5.50, null, null],
    ["Pete's Pick", "Double bacon, double egg and double cheese on wrap", 5.75, null, null],
    ["Barnyard", "Ham, bacon, sausage, egg, provolone, and hash brown on wrap", 5.25, null, null],
    ["Eastern", "Kielbasa, egg, peppers, onion and cheese", 5.25, null, null],
    ["JFK", "Pastrami, egg, swiss cheese and honey dijon", 4.65, null, null],
    ["The Yogi", "Sausage, bacon, egg, cheddar cheese, hash brown, hot sauce on cheddar bagel", 5.25, null, null],
    ["The Mountainman", "Chicken cutlet, egg, pepperjack, bacon, BBQ sauce", 5.99, null, null],
    ["Jim McMuffin", "Ham, egg, cheddar, hash brown on an English muffin", 4.50, null, null],
    ["The Veg", "Spinach, red onion, roasted pepper, jack cheese, hot ???? wrap", 4.50, null, null]
  ];


  let lunch_specials_menu_array = [
    ["Rocketing Roast Beef","Roast beef, horse radish cheese, lettuce, tomato, onion, banana peppers and horse radish sauce", 5.25, null, null],
    ["Kickin Chickin","Buffalo chicken salad, cheese, bacon, lettuce, tomato, bleu cheese", 5.95, null, null],
    ["Jake","Honey ham, honey turkey, cheese, lettuce, bacon, banana peppers and honey mustard", 5.75, null, null],
    ["The Trucker","Chicken teriyaki, cheddar, onion, lettuce, tomato, ranch and sour cream", 5.25, null, null],
    ["Billy Club","Chicken cutlet, pepper jack cheese, banana pepper, lettuce, tomatoes, bacon and honey mustard", 5.95, null, null],
    ["Steve's Tasty Tuna","Tuna, cheddar, lettuce, onion, jalapeno, bacon, honey mustard", 4.99, null, null],
    ["Bedell Wrap","Buffalo chicken, pepper jack, honey mustard, roasted jalapeno and banana peppers, lettuce", 5.25, null, null],
    ["Spicy Italian","Combo meat, provolone, lettuce, tomato, onion, jalapenos, hot sauce and horse radish sauce", 5.50, null, null],
    ["Dave's #9","Steak & cheese, peppers, mushrooms and onions", 5.25, null, null],
    ["Ragin Cajun","Black pepper turkey, horseradish cheese, lettuce, tomato, onion, banana and roasted peppers, mayo and bacon, salt and pepper", 5.95, null, null],
    ["Joe's Meat","Meatloaf, provolone, jalapenos, ketchup and horseradish", 5.25, null, null],
    ["Cobuzzi","Chicken, teriyaki, cheese, lettuce, onion and ranch", 5.25, null, null],
    ["Jim's Italian Combo","Capicola, ham, salami, pepperoni, provolone, lettuce, tomato, peppers, onion, olives, mayo, oil/vinegar, salt/pepper and oregano", 5.50, null, null],
    ["All American","Ham, turkey, swiss, lettuce, tomato, onion, banana peppers, oil/vinegar and peppercorn dressing", 5.25, 9.99, null],
    ["Belly Buster","Ham, turkey, salami, pepperoni, bacon, lettuce, tomato, pepper jack cheese, onion, peppers, oil/vinegar and peppercorn dressing", 5.99, null, null],
    ["Cordon Bleu Club","Chicken cutlet topped with ham, provolone, bacon, lettuce and ranch dressing", 5.95, null, null],
    ["Roast Beefer","Roast beef with melted swiss, mushrooms, lettuce, tomato and mayo", 5.25, null, null],
    ["Spanky's Firefighter","Grilled chicken with peppers, onions, garlic and olice oil with cheese", 5.25, null, null],
    ["Timmy T","Meatball, pepperoni, provolone with peppers and onions", 5.50, null, null],
    ["Cuban","Pulled pork with ham, weiss, pickles, spicy mustard and mayo", 5.50, null, null],
    ["Gonzadu","Prosciutto, capicola, provolone, lettuce, tomato, roasted red peppers, oil/vinegar and oregano", 5.50, null, null],
    ["Greek","Salami, onions and peppers topped with feta cheese, lettuce, tomato, oil/vinegar and oregano", 4.95, null, null],
    ["The 'Hammer'", "Steak with cheddar, bacon, onions and BBQ sauce", 5.95, null, null],
    ["Max 'D'","Honey turkey, salami, pepperoni, lettuce, tomato, pepper jack, onion, red roasted peppers, bacon, garlic salt and pepper with chipolte sauce", 5.95, null, null],
    ["Cameron","Deli chicken breat heated with provolone, onion, red roasted peppers, lettuce and chipolte sauce", 5.25, null, null],
    ["Ray's Scotch Wrap","Turkey, american cheese, onion, red roasted peppers, sauerkraut and spicy mustard", 5.25, null, null],
    ["Harvey Banger","Honey ham, honey turkey, cheddar, lettuce, tomato, red onion, cucumbers, raw peppers and honey Dijon", 5.50, null, null],
    ["The Mistake","Pot roast, swiss, ham, mayo, spicy mustard with banana peppers", 5.99, null, null],
    ["Ted's Blazing Buffalo","Buffalo sliced chicken breast, pepper jack cheese, banana and jalepeno peppers, lettuce, tomato, red onion and chipolte mayo", 5.25, null, null],
    ["Mavani Veggie","Pepper jack cheese, (onion, jalapeno, roasted peppers, banana peppers, plives, cucumbers, pickles, tomato), with lettuce and ranch", 4.75, null, null],
    ["Spencer","Oven roasted turkey with italian cheese, bacon, onion, banana peppers and ranch dressing", 5.50, null, null],
    ["Big Mac (meatloaf)","Cheddar, lettuce, tomato, onion, pickle, thousand island dressing", 5.25, null, null],
    ["Pat's Special","Eggplant, mozzarella, red roasted peppers, lettuce, tomato, mayo and oil/vinegar", 4.75, null, null],
    ["Julies Italian","Ham, salami, capicola, pepperoni, italian cheese, lettuce, tomato, red onion, red peppers, olives, mayo and oil/vinegar", 5.75, null, null],
    ["Packed Pastrami","Cheddar, red onions, durkee onions, bacon and coleslaw", 5.75, null, null],
    ["Ultimate BLT","Honey turkey, cheddar, lettuce, tomato, mayo and bacon", 5.95, null, null],
    ["Crabby Gabby","Steak, cheddar, banana peppers, bacon, lettuce, tomato, mayo and BBQ sauce", 5.50, null, null],
    ["Timmy P","Chicken cutlet, sauce, italian cheese, oil, spices, pepperoni", 5.50, null, null],
    ["The Yogi","Deli chicken breast, feta cheese, spinach, red onion, tomato, spices, oil/vinegar on a wrap", 5.50, null, null],
    ["Suzi Q","My cat ate part of my menu so I will have to edit this later. Also verify the yogi", 9.99, null, null]
  ];




  const test = function(thing) {

    let temp = document.getElementById("line_breakfast_sandwich_container");
    if(temp.innerHTML == '') {
      fillMenu();
    }
  };


  const fillMenu = function() {
    addItem("line_breakfast_sandwich_container", breakfast_sandwich_menu_array, addBreakfastItem);
    addItem("line_breakfast_assortments_container", breakfast_assortment_menu_array, addBreakfastItem);
    addItem("line_cold_menu_container", cold_menu_array, addLunchItem);
    addItem("line_hot_menu_container", hot_menu_array, addLunchItem);
    addItem("line_tossed_salad_menu_container", tossed_salad_menu_array, addLunchItem);
    addItem("line_side_salads_container", side_salads_menu_array, addBreakfastItem);
    addItem("breakfast_specials_menu_container", breakfast_specials_menu_array, addSpecialItem);
    specialItemCounter = 0;
    addItem("lunch_specials_menu_container", lunch_specials_menu_array, addSpecialItem);
  
  };



    
  const addItem = function(container, array, callbackFn) {
      
      var grabContainer = document.getElementById(container);
    
      array.forEach(arObj => {
        callbackFn(grabContainer, arObj);
      });
  };



  const addBreakfastItem = function(container, breakfastObj) {
    
    var titleStr = breakfastObj[0].toString();
    var priceStr = "$ " + breakfastObj[1].toString();
    
    var box = createElement('DIV', null, 'line_box_single', null, null);
    var line = createElement('DIV', null, 'line_single', null, null);
    var left = createElement('DIV', null, 'line_left_side_single', null, null);
    var right = createElement('DIV', null, 'line_right_side_single', null, null);
    var title = createElement('DIV', null, 'line_title_single', titleStr, null);
    var dots = createElement('DIV', null, 'line_dots_single', null, null);
    var price = createElement('DIV', null, 'line_price1_single', priceStr, null);
    
    box.appendChild(line);

    line.appendChild(left);
    line.appendChild(right);
    
    left.appendChild(title);
    left.appendChild(dots);
    right.appendChild(price);

    container.appendChild(box);
  };
  


  
  const addLunchItem = function(container, lunchObj) {
    
    var titleStr = lunchObj[0].toString();
    var price1Str = "$ " + lunchObj[1].toString();
    var price2Str = "$ " + lunchObj[2].toString();
    
    var line_box = createElement('DIV', null, 'line_box', null, null);
    var line = createElement('DIV', null, 'line', null, null);
    var line_left_side = createElement('DIV', null, 'line_left_side', null, null);
    var line_right_side = createElement('DIV', null, 'line_right_side', null, null);
    var line_title = createElement('DIV', null, 'line_title', titleStr, null);
    var line_dots = createElement('DIV', null, 'line_dots', null, null);
    var line_price1 = createElement('DIV', null, 'line_price1', price1Str, null);
    var line_price2 = createElement('DIV', null, 'line_price2', price2Str, null);

    line_box.appendChild(line);

    line.appendChild(line_left_side);
    line.appendChild(line_right_side);
    
    line_left_side.appendChild(line_title);
    line_left_side.appendChild(line_dots);
    line_right_side.appendChild(line_price1);
    line_right_side.appendChild(line_price2);

    container.appendChild(line_box);
  };
  
  const addSpecialItem = function(container, specialObj) {
    
    specialItemCounter++;
    
    var Name = specialObj[0];
    var Detail = specialObj[1];
    var Price1 = specialObj[2];
    var Price2 = specialObj[3];
    var Alternate = specialObj[4];
    var Price3 = specialObj[5];
    
    
    var NameStr = "#" + (specialItemCounter) + " " + Name.toString();
    var DetailStr = Detail.toString();
    var Price1Str = "$" + Price1.toString();

    var Description_div = createElement('DIV', null, 'menu_description', null, null);
    var Pricing_div = createElement('DIV', null, 'menu_pricing', null, null);
    var Menu_div = createElement('DIV', null, 'menu_item', null, null);
    var Name_div = createElement('DIV', null, 'menu_name', NameStr, null);
    var Detail_div = createElement('DIV', null, 'menu_detail', DetailStr, null);
    var Price1_div = createElement('DIV', null, 'menu_price', Price1Str, null);
    var Price2_div = createElement('DIV', null, null, null, null);
    var Alternate_div = createElement('DIV', null, 'menu_info', null, null);
    var Price3_div = createElement('DIV', null, null, null, null);

    
    if (Price2 != null) {
      var temp_innerHTML = Price1_div.innerHTML;
      var new_innerHTML = temp_innerHTML + "</br> $" + Price2.toString();

      Price1_div.innerHTML = new_innerHTML
    };
    
    Menu_div.appendChild(Description_div);
    Menu_div.appendChild(Pricing_div);
    
    Description_div.appendChild(Name_div);
    Description_div.appendChild(Detail_div);

    Pricing_div.appendChild(Price1_div);
    
    if (Alternate != null) {
      
      var Info_div = createElement('DIV', null, 'menu_info', Alternate.toString(), null);
      Description_div.appendChild(Info_div);
    };
    

    container.appendChild(Menu_div);

  };


  const createElement = function(elType, elID, elClass, innerHTML, elParent) {

    var newElement = document.createElement(elType);
  
    if(elID != null){
        newElement.id = elID;
    };
    if(elClass != null){
        newElement.className = elClass;
    };
    if(innerHTML != null){
        if(elType == "INPUT"){
            newElement.value = innerHTML;
        }else{
            // console.log('????????????????????????????/');
            newElement.innerHTML = innerHTML;
        };
    };
    if(elParent != null){
  
    };
  
    return newElement;
  };
  




  useEffect(() => {
    test();
  }, []);

  return (

    <>
      <div id="body3" className="bodyObject">
        <div className="bodyFiller" style={{backgroundColor: 'rgb(255,255,255)'}}></div>
        
        <div className="big_title" onClick={test}>
          BREAKFAST
        </div>
          
        <div className="menu_title">
          Sandwiches
        </div>
        
        <div id="line_breakfast_sandwich_container" className="line_menu_container_single">
          
        </div>
          
        <div className="menu_title">
          Assortments
        </div>
        
        <div id="line_breakfast_assortments_container"  className="line_menu_container_single">
        </div>
        
        
        
        
      </div> 
      
      {/* <!-- Breakfast Specials --> */}
      <div id="body4" className="bodyObject">
        <div className="bodyFiller"></div>
        <div id="body4_wrap">

          <div className="big_title">
            Morning Specials
          </div>

          <div className="menu_container" id="breakfast_specials_menu_container">

          </div>

          
        </div>
      </div> 
      
      {/* <!-- Next Menu --> */}
      <div id="body5" className="bodyObject">
        <div className="bodyFiller"></div>
        
        <div className="big_title">
          LUNCH
        </div>
        
        
        
        <div className="menu_title">
          Cold
        </div>

        <div className="line_title_container">

          <div className="line_box">
            <div className="line">
              <div className="line_left_side">

              </div>
              <div className="line_right_side">
                <div className="line_price1">
                  6"
                </div>
                <div className="line_price2">
                  12"
                </div>
              </div>
            </div>
          </div>
          <div className="line_box">
            <div className="line">
              <div className="line_left_side">

              </div>
              <div className="line_right_side">
                <div className="line_price1">
                  6"
                </div>
                <div className="line_price2">
                  12"
                </div>
              </div>
            </div>
          </div>
          <div className="line_box">
            <div className="line">
              <div className="line_left_side">

              </div>
              <div className="line_right_side">
                <div className="line_price1">
                  6"
                </div>
                <div className="line_price2">
                  12"
                </div>
              </div>
            </div>
          </div>
          <div className="line_box">
            <div className="line">
              <div className="line_left_side">

              </div>
              <div className="line_right_side">
                <div className="line_price1">
                  6"
                </div>
                <div className="line_price2">
                  12"
                </div>
              </div>
            </div>
          </div>
          <div className="line_box">
            <div className="line">
              <div className="line_left_side">

              </div>
              <div className="line_right_side">
                <div className="line_price1">
                  6"
                </div>
                <div className="line_price2">
                  12"
                </div>
              </div>
            </div>
          </div>
          <div className="line_box">
            <div className="line">
              <div className="line_left_side">

              </div>
              <div className="line_right_side">
                <div className="line_price1">
                  6"
                </div>
                <div className="line_price2">
                  12"
                </div>
              </div>
            </div>
          </div>
          <div className="line_box">
            <div className="line">
              <div className="line_left_side">

              </div>
              <div className="line_right_side">
                <div className="line_price1">
                  6"
                </div>
                <div className="line_price2">
                  12"
                </div>
              </div>
            </div>
          </div>
          <div className="line_box">
            <div className="line">
              <div className="line_left_side">

              </div>
              <div className="line_right_side">
                <div className="line_price1">
                  6"
                </div>
                <div className="line_price2">
                  12"
                </div>
              </div>
            </div>
          </div>

        </div>

        <div id="line_hot_menu_container" className="line_menu_container">



        </div>
        
        <div className="menu_title">
          Hot
        </div>

        <div className="line_title_container">

          <div className="line_box">
            <div className="line">
              <div className="line_left_side">

              </div>
              <div className="line_right_side">
                <div className="line_price1">
                  6"
                </div>
                <div className="line_price2">
                  12"
                </div>
              </div>
            </div>
          </div>
          <div className="line_box">
            <div className="line">
              <div className="line_left_side">

              </div>
              <div className="line_right_side">
                <div className="line_price1">
                  6"
                </div>
                <div className="line_price2">
                  12"
                </div>
              </div>
            </div>
          </div>
          <div className="line_box">
            <div className="line">
              <div className="line_left_side">

              </div>
              <div className="line_right_side">
                <div className="line_price1">
                  6"
                </div>
                <div className="line_price2">
                  12"
                </div>
              </div>
            </div>
          </div>
          <div className="line_box">
            <div className="line">
              <div className="line_left_side">

              </div>
              <div className="line_right_side">
                <div className="line_price1">
                  6"
                </div>
                <div className="line_price2">
                  12"
                </div>
              </div>
            </div>
          </div>
          <div className="line_box">
            <div className="line">
              <div className="line_left_side">

              </div>
              <div className="line_right_side">
                <div className="line_price1">
                  6"
                </div>
                <div className="line_price2">
                  12"
                </div>
              </div>
            </div>
          </div>
          <div className="line_box">
            <div className="line">
              <div className="line_left_side">

              </div>
              <div className="line_right_side">
                <div className="line_price1">
                  6"
                </div>
                <div className="line_price2">
                  12"
                </div>
              </div>
            </div>
          </div>
          <div className="line_box">
            <div className="line">
              <div className="line_left_side">

              </div>
              <div className="line_right_side">
                <div className="line_price1">
                  6"
                </div>
                <div className="line_price2">
                  12"
                </div>
              </div>
            </div>
          </div>
          <div className="line_box">
            <div className="line">
              <div className="line_left_side">

              </div>
              <div className="line_right_side">
                <div className="line_price1">
                  6"
                </div>
                <div className="line_price2">
                  12"
                </div>
              </div>
            </div>
          </div>

        </div>

        <div id="line_cold_menu_container" className="line_menu_container">



        </div>

        
        
      </div>  
          
      <div id="body5a" className="bodyObject">
        <div className="bodyFiller"></div>
            
        <div className="big_title">
          Salads
        </div>
        
        
        <div className="menu_title" id="salad_starter" style={{paddingTop: '100px', marginTop: '-60px'}}>
          Tossed Salads
        </div>

        <div className="line_title_container">

          <div className="line_box">
            <div className="line">
              <div className="line_left_side">

              </div>
              <div className="line_right_side">
                <div className="line_price1">
                  Small
                </div>
                <div className="line_price2">
                  Large
                </div>
              </div>
            </div>
          </div>
          <div className="line_box">
            <div className="line">
              <div className="line_left_side">

              </div>
              <div className="line_right_side">
                <div className="line_price1">
                  Small
                </div>
                <div className="line_price2">
                  Large
                </div>
              </div>
            </div>
          </div>
          <div className="line_box">
            <div className="line">
              <div className="line_left_side">

              </div>
              <div className="line_right_side">
                <div className="line_price1">
                  Small
                </div>
                <div className="line_price2">
                  Large
                </div>
              </div>
            </div>
          </div>
          <div className="line_box">
            <div className="line">
              <div className="line_left_side">

              </div>
              <div className="line_right_side">
                <div className="line_price1">
                  Small
                </div>
                <div className="line_price2">
                  Large
                </div>
              </div>
            </div>
          </div>
          <div className="line_box">
            <div className="line">
              <div className="line_left_side">

              </div>
              <div className="line_right_side">
                <div className="line_price1">
                  Small
                </div>
                <div className="line_price2">
                  Large
                </div>
              </div>
            </div>
          </div>
          <div className="line_box">
            <div className="line">
              <div className="line_left_side">

              </div>
              <div className="line_right_side">
                <div className="line_price1">
                  Small
                </div>
                <div className="line_price2">
                  Large
                </div>
              </div>
            </div>
          </div>
          <div className="line_box">
            <div className="line">
              <div className="line_left_side">

              </div>
              <div className="line_right_side">
                <div className="line_price1">
                  Small
                </div>
                <div className="line_price2">
                  Large
                </div>
              </div>
            </div>
          </div>
          <div className="line_box">
            <div className="line">
              <div className="line_left_side">

              </div>
              <div className="line_right_side">
                <div className="line_price1">
                  Small
                </div>
                <div className="line_price2">
                  Large
                </div>
              </div>
            </div>
          </div>

        </div>

        <div id="line_tossed_salad_menu_container" className="line_menu_container">
        </div>
        
        <div className="menu_title">
          Side Salads
        </div>
        
        <div id="line_side_salads_container" className="line_menu_container_single">
        </div>
        
      </div>

      <div id="body6" className="bodyObject">
        <div className="bodyFiller"></div>
        <div id="body6_wrap">
          
          <div className="big_title">
            Specialty Sandwiches
          </div>

          <div className="menu_container" id="lunch_specials_menu_container">
            
          </div>

        </div>
      </div>
    </>
  )

}
=== End of src/components/menu/MenuAll.js ===

