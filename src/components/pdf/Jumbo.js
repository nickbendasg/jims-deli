

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import MyDocument from './MyDocument';
import { PDFViewer } from '@react-pdf/renderer';
// import React from 'react';
import { Image, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

import MenuData from '../../MenuData';

import { Font } from '@react-pdf/renderer'
import Bookman from "../../Bookman.ttf"
import BookmanBoldItalic from "../../BookmanBoldItalic.ttf"
import TempusSans from "../../TempusSans.ttf"
import TempusSansBold from "../../TempusSansBold.ttf"
import Logo from "../../assets/images/logo.png";
// import PrintingPress from "../../assets/images/PrintingPress.png";
// const pageSize = 'A4';
const pageSize = {width: (11*72), height: (17*72)};

Font.registerHyphenationCallback(word => [word]);

Font.register({
  family: "Bookman",
  format: "truetype",
  src: Bookman 
});
Font.register({
  family: "Bookman Bold Italic",
  format: "truetype",
  src: BookmanBoldItalic 
});
Font.register({
  family: "Tempus Sans",
  format: "truetype",
  src: TempusSans 
});
Font.register({
  family: "Tempus Sans Bold",
  format: "truetype",
  src: TempusSansBold
});
// const fSource = 'https://use.typekit.net/cyv8ztg.css';

// Font.register({ family: 'FamilyName', src: fSource, fontStyle: 'normal', fontWeight: 'normal', fonts?: [] });

let menuGrab = MenuData.menu;

// Create styles
const styles = StyleSheet.create({
  page1: {
    flexDirection: 'row',
    backgroundColor: 'white',
    fontFamily: "Bookman",
    fontSize: '20px'
  },
  page2: {
    flexDirection: 'row',
    backgroundColor: 'white',
    fontFamily: "Bookman",
    fontSize: '20px',
  },
  section: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 8,
    marginRight: 8,
    padding: 10,
    // flexGrow: 1,
    width: '33%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
    // backgroundColor: 'rgba(255,0,0,0.05)'
  },
  otherTitle: {
    fontSize: '20px',
    textAlign: 'center'

  },
  fpDescription: {
    fontSize: '15px',
    textAlign: 'center',
    paddingLeft: '3px',
    paddingRight: '3px',
  },
  fpSpacer: {
    height: '44px'
  },
  miniSpacer: {
    height: '3px'
  },
  title: {
    // color: 'red',
    fontSize: '20px',
    fontFamily: "Bookman Bold Italic",
    textAlign: 'center'
  },
  description: {
    fontSize: '12px',
    textAlign: 'center',
    paddingLeft: '20px',
    paddingRight: '20px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  smallDescription: {
    fontSize: '10px',
    textAlign: 'center',
    paddingLeft: '20px',
    paddingRight: '20px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  line: {
    marginBotttom: '35px',
    width: '100%',
    // backgroundColor: 'white',
    // color: 'green',
    paddingBottom: '0px',

    fontWeight: 900,
    flexDirection: 'row',
    display: 'flex',
    fontSize: '10.8px',
    // overflow: 'hidden'
  },
  lineDescription: {

  },
  lineDetails: {
    fontSize: '8.8px',
    marginBottom: '2px'
  },
  lineDotsBox: {
    flexGrow: 1,
    minWidth: 0,
    overflow: 'hidden',
    // marginLeft: '6px',
    marginRight: '3px',
    flexShrink: 1,
    borderBottom: '1px dotted black',
    display: 'relative',
    height: '8px'

  },
  lineNoDotBox: {
    flexGrow: 1,
    minWidth: 0,
    overflow: 'hidden',
    // marginLeft: '6px',
    marginRight: '3px',
    flexShrink: 1,
    // borderBottom: '1px dotted black',
    display: 'relative',
    height: '5.5px'

  },
  lineDots: {
    overflow: 'hidden',
    textAlign: 'left',
    // display: 'absolute',
    // bottom: '0px'
    // marginTop: '-10px'
  },
  linePriceBox: {
    minWidth: '40px',
    textAlign: 'right',
    // border: '1px solid red',

  },
  linePrice: {
    display: 'flex',
    alignSelf: 'center'

  },
  spacer: {
    height: '8px'
  }
});

const composeName = (thing) => {
  var name = thing[0];
  var type = thing[5];
  if(type == 'both') {
    type = 'hot/cold'
  };
  if(type != null) {
    type = type.toUpperCase();
  };

  return name + ': ' + type;
};


// Create Document Component
const Jumbo = () => (
  <Document>
    <Page size={pageSize} style={styles.page1} orientation='landscape'>

      <View style={styles.section}>
        <Text style={styles.otherTitle}>Breakfast Sandwiches</Text>
        <View style={styles.spacer}></View>
        <Text style={styles.description}>(Served all day)</Text>

        {menuGrab.breakfast_sandwich.map(thingy => (
          <>
            <View style={{...styles.line, ...{fontSize: '13px'}}}>
              <Text style={styles.lineDescription}>{thingy[0]}  </Text>
              <View style={styles.lineDotsBox}><Text style={styles.lineDots}></Text></View>
              <View style={styles.linePriceBox}><Text style={styles.linePrice}>{thingy[1].toFixed(2)}</Text></View>
            </View>
            {/* <View style={styles.spacer}></View> */}
          </>
        ))}

        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <Text style={styles.description}>Sandwiches served on rolls or choice of toast, croissants, bagels, wraps</Text>
        <View style={styles.spacer}></View>


        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <Text style={styles.otherTitle}>Breakfast Assortments</Text>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        {menuGrab.breakfast_assortment.map(thingy => (
          <>
            <View style={{...styles.line, ...{fontSize: '13px'}}}>
              <Text style={styles.lineDescription}>{thingy[0]}  </Text>
              <View style={styles.lineDotsBox}><Text style={styles.lineDots}></Text></View>
              <View style={styles.linePriceBox}><Text style={styles.linePrice}>{thingy[1].toFixed(2)}</Text></View>
            </View>
            {/* <View style={styles.spacer}></View> */}
          </>
        ))} 
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={[styles.line, {marginRight: '6px', marginTop: '2px'}]}>
          <Text style={styles.lineDescription}>Coffee  </Text>
          <View style={styles.lineDotsBox}><Text style={styles.lineDots}></Text></View>
          <View style={styles.linePriceBox}><Text style={styles.linePrice}>Md 1.86</Text></View>
          <View style={styles.lineDotsBox}><Text style={styles.lineDots}></Text></View>
          <View style={styles.linePriceBox}><Text style={styles.linePrice}>Lg 2.14</Text></View>
          <View style={styles.lineDotsBox}><Text style={styles.lineDots}></Text></View>
          <View style={styles.linePriceBox}><Text style={styles.linePrice}>XLg 2.61</Text></View>
        </View>
        <View style={[styles.line, {marginRight: '6px', marginTop: '2px'}]}>
          <Text style={styles.lineDescription}>Tea and Hot Chocolate Available at same price</Text>
        </View>
        <View style={[styles.line, {marginRight: '6px', marginTop: '2px'}]}>
          <Text style={styles.lineDescription}>Bring your own reusable cup  </Text>
          <View style={styles.lineDotsBox}><Text style={styles.lineDots}></Text></View>
          <View style={styles.linePriceBox}><Text style={styles.linePrice}>1.16</Text></View>
        </View>
        <View style={styles.spacer}></View>

        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <Text style={styles.description}>Choice of Toppings:{"\n"}Lettuce, Tomato, Onion, Olives, Red and Green Peppers, Bannana Peppers, Jalepeno Peppers, Pickles</Text>
        <View style={styles.spacer}></View>        
        <Text style={styles.description}>Extra charge to add to breakfast items</Text>

        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <Text style={styles.description}>When Available:{"\n"}Spinach, Red Roasted Peppers</Text>

        

      </View>
      <View style={styles.section}>
        <Text style={styles.otherTitle}>Breakfast Specials</Text>
        <View style={styles.spacer}></View>

        {menuGrab.breakfast_specials.map((thingy, index) => (
          <>
            {/* <View style={styles.spacer}></View> */}
            <View style={{height: '6px'}}></View>
            <View style={{...styles.line, ...{fontSize: '13px'}}}>
              <Text style={styles.lineDescription}>B{index + 1}  {thingy[0]}  </Text>
              <View style={styles.lineDotsBox}><Text style={styles.lineDots}></Text></View>
              <View style={styles.linePriceBox}><Text style={styles.linePrice}>{thingy[2].toFixed(2)}</Text></View>
            </View>
            <View style={styles.line}>
              <Text style={{...styles.lineDetails, ...{fontSize: '11px'}}}>{thingy[1]}</Text>
            </View>
            {thingy[4] != null && (
              <View style={styles.line}>
                <Text style={{...styles.lineDetails, ...{fontSize: '11px', textAlign: 'right', width: '100%', marginTop: '-3px', marginRight: '4px'}}}>{thingy[4]}</Text>
              </View>
            )}
          </>
        ))}

      </View>

      {/* <br/> */}
     
      <View style={styles.section}>
        <Text style={styles.otherTitle}>Side Salads Available</Text>
        <View style={styles.spacer}></View>
        <Text style={{...{width: '95%'}, ...styles.description}}>Egg Salad • Hard Boiled Eggs{"\n"}Deviled Egg • Chicken Salad{"\n"}Cranberry Walnut Chicken Salad{"\n"}Buffalo Chicken Salad • Coleslaw{"\n"}Potato • Red Potato • Tortellini{"\n"}Macaroni • Pasta • Seafood • Tuna{"\n"}4 Bean • Fruit • Rice Pudding{"\n"}Mushrooms</Text>

        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <Text style={styles.otherTitle}>Tossed Salads</Text>
        <View style={styles.spacer}></View>

        {menuGrab.tossed_salads.map(thingy => (
          <View style={styles.line}>
            <Text style={styles.lineDescription}>{thingy[0]}  </Text>
            <View style={styles.lineDotsBox}><Text style={styles.lineDots}></Text></View>
            <View style={styles.linePriceBox}><Text style={styles.linePrice}>{thingy[1].toFixed(2)}</Text></View>
            <View style={styles.linePriceBox}><Text style={styles.linePrice}>{thingy[2].toFixed(2)}</Text></View>
          </View>
        ))}
        <View style={styles.line}>
          <Text style={styles.lineDescription}>(Ham, Turkery, Roast Beef & Cheese)</Text>
        </View>

        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>

        <Text style={styles.description}>Choice of Dressings:{"\n"}Oil, Vinegar, Italian, Creamy Italian, French, Balsamic, Ceasar, Thousand Island, Ranch, Blue Cheese, Peppercorn</Text>

        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        {menuGrab.hot_dogs.map((item, index) => (
          <Text key={index} style={styles.fpDescription}>{item[0]}{"\n"}${item[1].toFixed(2)} .... (Mon-Sat)</Text>
        ))}
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        {menuGrab.soup.map((item, index) => (
          <Text key={index} style={styles.fpDescription}>{item[0]}{"\n"}Sm ${item[1].toFixed(2)} - Lg ${item[2].toFixed(2)}</Text>
        ))}
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
                
        <View style={styles.spacer}></View>
        <Text style={styles.fpDescription} wrap={true}>Call for todays Daily Specials, Dinners, and Soups</Text>

        <view style={styles.spacer}></view>
        <Text style={styles.fpDescription}>Party Platters Available Upon Request</Text>
        <view style={styles.spacer}></view>
        <view style={styles.spacer}></view>
        {/* <view style={styles.spacer}></view> */}
        <Text style={styles.fpDescription}>Also Available: Groceries, Deli, Beer, Lottery, Stamps and More!</Text>
        <view style={styles.spacer}></view>

        <View style={styles.spacer}></View>
        
        <Text style={{fontSize: '14px', textAlign: 'center'}}>We carry Harvest Bakery Products Delivered Fresh Every Morning</Text>

      </View>
      <View style={styles.section}>

        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <Image src={'/logo.png'}/>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>

        <Text style={styles.fpDescription}>Open 7 Days a Week</Text>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <Text style={styles.fpDescription}>Monday - Friday</Text>
        <Text style={styles.fpDescription}>5:00 am - 8:00 pm</Text>
        <Text style={styles.fpDescription}>Saturday</Text>
        <Text style={styles.fpDescription}>6:00 am - 8:00 pm</Text>
        <Text style={styles.fpDescription}>Sunday</Text>
        <Text style={styles.fpDescription}>7:00 am - 4:00 pm</Text>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <Text style={styles.fpDescription}>We Accept Credit Cards</Text>
        <Text style={styles.fpDescription}>(Discover, Visa, Mastercard)</Text>
        <view style={styles.miniSpacer}></view>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <Text style={styles.fpDescription}>361 Woodford Ave</Text>
        <Text style={styles.fpDescription}>Plainville, CT 06062</Text>
        <Text style={styles.fpDescription}>860-747-8857</Text>
        <view style={styles.miniSpacer}></view>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <Text style={styles.fpDescription}>Like us on Facebook</Text>
        {/* <view style={styles.miniSpacer}></view> */}
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <Text style={styles.fpDescription}>Prices are subject to change</Text>
      </View>

    </Page>
    <Page size={pageSize} style={styles.page2} orientation='landscape'>
      <View style={styles.section}>
        <Text style={styles.title}>Sandwiches & Grinders</Text>

        <View style={styles.line}>
          <Text style={styles.lineDescription}></Text>
          <Text style={styles.lineNoDotBox}></Text>
          <View style={styles.linePriceBox}><Text style={styles.linePrice}>6"</Text></View>
          <View style={styles.linePriceBox}><Text style={styles.linePrice}>12"</Text></View>
        </View>


        {menuGrab.cold_menu.map(thingy => (
          <>
            <View style={styles.line}>
              <Text style={styles.lineDescription}>{thingy[0]}  </Text>
              <View style={styles.lineDotsBox}><Text style={styles.lineDots}></Text></View>
              <View style={styles.linePriceBox}><Text style={styles.linePrice}>{thingy[1].toFixed(2)}</Text></View>
              <View style={styles.linePriceBox}><Text style={styles.linePrice}>{thingy[2].toFixed(2)}</Text></View>
            </View>
            {/* <View style={styles.miniSpacer}></View> */}
          </>
        ))}

        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>

        <Text style={styles.smallDescription}>Served on choice of Bread, 6" or 12" Grinder Roll, Harvest Bakery Roll or Wraps Available</Text>
              
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <Text style={styles.title}>Hot Sandwiches & Grinders</Text>

        <View style={styles.line}>
          <Text style={styles.lineDescription}></Text>
          <Text style={styles.lineNoDotBox}></Text>
          <View style={styles.linePriceBox}><Text style={styles.linePrice}>6"</Text></View>
          <View style={styles.linePriceBox}><Text style={styles.linePrice}>12"</Text></View>
        </View>

        {menuGrab.hot_menu.map(thingy => (
          <>
            <View style={styles.line}>
              <Text style={styles.lineDescription}>{thingy[0]}  </Text>
              <View style={styles.lineDotsBox}><Text style={styles.lineDots}></Text></View>
              <View style={styles.linePriceBox}><Text style={styles.linePrice}>{thingy[1].toFixed(2)}</Text></View>
              <View style={styles.linePriceBox}><Text style={styles.linePrice}>{thingy[2].toFixed(2)}</Text></View>
            </View>
            {/* <View style={styles.miniSpacer}></View> */}
          </>
        ))}

        <View style={styles.spacer}></View>     
        <Text style={styles.smallDescription}>Choice of Toppings:</Text>
        <Text style={styles.description}>Cheese, Lettuce, Tomato, Onion, Olives, Red and Green Peppers, Bannana Peppers, Jalepeno Peppers, Pickles</Text>
        <View style={styles.spacer}></View>
        <Text style={styles.smallDescription}>When Available:</Text>
        <Text style={styles.description}>Spinach, Red Roasted Peppers, Cucumbers</Text>

        <View style={styles.spacer}></View>

        <Text style={styles.smallDescription}>Choice of Dressings:</Text>
        <Text style={{...styles.description, ...{width: '100%'}}}>Oil, Vinegar, Italian, Creamy Italian, French, Balsamic, Ceasar, Thousand Island, Ranch, Blue Cheese, Peppercorn, Mayo, Chipolte Mayo, Horseradish Mayo, Mustard, Spicy Mustard, Honey Mustard, Hot Sauce, BBQ, Teriyaki Sauce, Siracha, Steak Sauce</Text>

       


      </View>
      <View style={styles.section}>
        <Text style={styles.title}> </Text>
        <View style={styles.spacer}></View>


        {menuGrab.lunch_specials.slice(0,21).map((thingy, index) => (
          <>
            <View style={styles.line}>
              <Text style={styles.lineDescription}>L{index + 1}  {composeName(thingy)}  </Text>
              <View style={styles.lineDotsBox}><Text style={styles.lineDots}></Text></View>
              <View style={styles.linePriceBox}><Text style={styles.linePrice}>{thingy[2].toFixed(2)}</Text></View>
              {thingy[3] != null && (
                <View style={styles.linePriceBox}><Text style={styles.linePrice}>{thingy[3].toFixed(2)}</Text></View>
              )}
            </View>
            <View style={styles.line}>
              <Text style={styles.lineDetails}>{thingy[1]}</Text>
            </View>

            {thingy[4] != null && (
              <View style={styles.line}>
                <Text style={{...styles.lineDetails, ...{fontSize: '11px', textAlign: 'right', width: '100%', marginTop: '-3px', marginRight: '4px'}}}>{thingy[4]}</Text>
              </View>
            )}
          </>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Specialty Sandwiches</Text>
        <View style={styles.spacer}></View>

        {menuGrab.lunch_specials.slice(21,42).map((thingy, index) => (
            <>
              <View style={styles.line}>
                <Text style={styles.lineDescription}>L{index + 22}  {composeName(thingy)}  </Text>
                <View style={styles.lineDotsBox}><Text style={styles.lineDots}></Text></View>
                <View style={styles.linePriceBox}><Text style={styles.linePrice}>{thingy[2].toFixed(2)}</Text></View>
                {thingy[3] != null && (
                  <View style={styles.linePriceBox}><Text style={styles.linePrice}>{thingy[3].toFixed(2)}</Text></View>
                )}
              </View>
              <View style={styles.line}>
                <Text style={styles.lineDetails}>{thingy[1]}</Text>
              </View>
            </>
          ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>  </Text>
        <View style={styles.spacer}></View>

        {menuGrab.lunch_specials.slice(42,65).map((thingy, index) => (
            <>
              <View style={styles.line}>
                <Text style={styles.lineDescription}>L{index + 43}  {composeName(thingy)}  </Text>
                <View style={styles.lineDotsBox}><Text style={styles.lineDots}></Text></View>
                <View style={styles.linePriceBox}><Text style={styles.linePrice}>{thingy[2].toFixed(2)}</Text></View>
                {thingy[3] != null && (
                  <View style={styles.linePriceBox}><Text style={styles.linePrice}>{thingy[3].toFixed(2)}</Text></View>
                )}
              </View>
              <View style={styles.line}>
                <Text style={styles.lineDetails}>{thingy[1]}</Text>
              </View>
            </>
          ))}
      </View>
    </Page>
  </Document>
);


export default Jumbo;