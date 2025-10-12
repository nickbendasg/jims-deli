import { useEffect } from "react";
import MenuData from '../../MenuData';

export default function MenuAll() {

  var specialItemCounter = 0;

  // Use MenuData.js as the single source of truth
  let breakfast_sandwich_menu_array = MenuData.menu.breakfast_sandwich;

  let breakfast_assortment_menu_array = MenuData.menu.breakfast_assortment;

  let cold_menu_array = MenuData.menu.cold_menu;

  let hot_menu_array = MenuData.menu.hot_menu;

  let tossed_salad_menu_array = MenuData.menu.tossed_salads;

  let side_salads_menu_array = MenuData.menu.side_salads;


  // ["Name", "Description", Price1, Price2, "Alternate"]

  let breakfast_specials_menu_array = MenuData.menu.breakfast_specials;


  let lunch_specials_menu_array = MenuData.menu.lunch_specials;




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
    var priceStr = "$ " + breakfastObj[1].toFixed(2);
    
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
    var price1Str = "$ " + lunchObj[1].toFixed(2);
    var price2Str = "$ " + lunchObj[2].toFixed(2);
    
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
    var Price1Str = "$" + Price1.toFixed(2);

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
      var new_innerHTML = temp_innerHTML + "</br> $" + Price2.toFixed(2);

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