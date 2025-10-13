

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
// const pageSize = 'A4';
const pageSize = 'legal';

// Using system fonts to avoid loading issues
// Font.register({
//   family: "Bookman",
//   format: "truetype",
//   src: Bookman 
// });
// Font.register({
//   family: "Bookman Bold Italic",
//   format: "truetype",
//   src: BookmanBoldItalic 
// });
// Font.register({
//   family: "Tempus Sans",
//   format: "truetype",
//   src: TempusSans 
// });
// Font.register({
//   family: "Tempus Sans Bold",
//   format: "truetype",
//   src: TempusSansBold
// });
// const fSource = 'https://use.typekit.net/cyv8ztg.css';

// Font.register({ family: 'FamilyName', src: fSource, fontStyle: 'normal', fontWeight: 'normal', fonts?: [] });

let menuGrab = MenuData.menu;

// Create styles
const styles = StyleSheet.create({
  page1: {
    flexDirection: 'row',
    backgroundColor: 'white',
    fontFamily: "Times-Roman",
    fontSize: '12px'
  },
  page2: {
    flexDirection: 'row',
    backgroundColor: 'white',
    fontFamily: "Times-Roman",
    fontSize: '12px',
  },
  section: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 8,
    marginRight: 8,
    padding: 10,
    // flexGrow: 1,
    width: '33%',
    // backgroundColor: 'rgba(255,0,0,0.05)'
  },
  otherTitle: {
    fontSize: '12px',
    textAlign: 'center'

  },
  fpDescription: {
    fontSize: '11px',
    textAlign: 'center',
    paddingLeft: '3px',
    paddingRight: '3px',
  },
  fpSpacer: {
    height: '14px'
  },
  title: {
    // color: 'red',
    fontSize: '12px',
    fontFamily: "Bookman Bold Italic",
    textAlign: 'center'
  },
  description: {
    fontSize: '8px',
    textAlign: 'center',
    paddingLeft: '18px',
    paddingRight: '18px',
  },
  line: {
    marginBotttom: '35px',
    // backgroundColor: 'white',
    // color: 'green',
    paddingBottom: '0px',

    fontWeight: 900,
    flexDirection: 'row',
    display: 'flex',
    fontSize: '8px',
    // overflow: 'hidden'
  },
  lineDescription: {

  },
  lineDetails: {
    fontSize: '7px',
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
    height: '5.5px'

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
    minWidth: '30px',
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


// Create Document Component
const Pamphlet = () => (
  <Document>
    <Page size={pageSize} style={styles.page1} orientation='landscape'>

      <View style={styles.section}>
        <Text style={styles.otherTitle}>Breakfast Specials</Text>
        <View style={styles.spacer}></View>

        {menuGrab.breakfast_specials.map((thingy, index) => (
          <React.Fragment key={index}>
            <View style={styles.line}>
              <Text style={styles.lineDescription}>#{index + 1}  {thingy[0]}  </Text>
              <View style={styles.lineDotsBox}><Text style={styles.lineDots}></Text></View>
              <View style={styles.linePriceBox}><Text style={styles.linePrice}>{thingy[2].toFixed(2)}</Text></View>
            </View>
            <View style={styles.line}>
              <Text style={styles.lineDetails}>{thingy[1]}</Text>
            </View>
          </React.Fragment>
        ))}

        <View style={styles.spacer}></View>
        <Text style={styles.description}>Dinners Available... Call for today's specials!</Text>
        <Text style={{fontSize: '8px', textAlign: 'center'}}>We carry Harvest Bakery Products Delivered Fresh Every Morning</Text>
        <Text style={styles.description}>We fax & email special Everyday! Weekly Deli Specials</Text>

      </View>
      <View style={styles.section}>
        <Text style={styles.otherTitle}>Breakfast Sandwiches</Text>
        <Text style={styles.description}>(Served all day)</Text>

        {menuGrab.breakfast_sandwich.map((thingy, index) => (
          <View key={index} style={styles.line}>
            <Text style={styles.lineDescription}>{thingy[0]}  </Text>
            <View style={styles.lineDotsBox}><Text style={styles.lineDots}></Text></View>
            <View style={styles.linePriceBox}><Text style={styles.linePrice}>{thingy[1].toFixed(2)}</Text></View>
          </View>
        ))}

        <View style={styles.spacer}></View>
        <Text style={styles.description}>Sandwiches served on rolls or choice of toast, croissants, bagels</Text>
        <View style={styles.spacer}></View>
        <Text style={styles.description}>Extra toppings available at extra charge.</Text>
        <View style={styles.spacer}></View>


        {menuGrab.breakfast_assortment.map((thingy, index) => (
          <View key={index} style={styles.line}>
            <Text style={styles.lineDescription}>{thingy[0]}  </Text>
            <View style={styles.lineDotsBox}><Text style={styles.lineDots}></Text></View>
            <View style={styles.linePriceBox}><Text style={styles.linePrice}>{thingy[1].toFixed(2)}</Text></View>
          </View>
        ))} 
        <View style={[styles.line, {marginRight: '6px', marginTop: '2px'}]}>
          <Text style={styles.lineDescription}>Coffee</Text>
          <View style={styles.lineDotsBox}><Text style={styles.lineDots}></Text></View>
          <View style={styles.linePriceBox}><Text style={styles.linePrice}>Md 1.86</Text></View>
          <View style={styles.lineDotsBox}><Text style={styles.lineDots}></Text></View>
          <View style={styles.linePriceBox}><Text style={styles.linePrice}>Lg 2.14</Text></View>
          <View style={styles.lineDotsBox}><Text style={styles.lineDots}></Text></View>
          <View style={styles.linePriceBox}><Text style={styles.linePrice}>XLg 2.61</Text></View>
        </View>

        <View style={styles.spacer}></View>
        <Text style={styles.description}>Hot Chocolate & Tea Also Available</Text>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <Text style={styles.otherTitle}>Side Salads Available</Text>
        <View style={styles.spacer}></View>
        <Text style={styles.description}>Chicken • Tuna • German Potato • Egg • Potato • Seafood • Pasta • Macaroni • 4 Bean • Fruit Coleslaw • Mushroom • Tortellini • Rice Pudding • Cranberry Walnut Chicken • Deviled Egg • And more...</Text>

        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <Text style={styles.otherTitle}>Tossed Salads</Text>
        <View style={styles.spacer}></View>

        {menuGrab.tossed_salads.map((thingy, index) => (
          <View key={index} style={styles.line}>
            <Text style={styles.lineDescription}>{thingy[0]}  </Text>
            <View style={styles.lineDotsBox}><Text style={styles.lineDots}></Text></View>
            <View style={styles.linePriceBox}><Text style={styles.linePrice}>{thingy[1].toFixed(2)}</Text></View>
            <View style={styles.linePriceBox}><Text style={styles.linePrice}>{thingy[2].toFixed(2)}</Text></View>
          </View>
        ))}
      </View>
      <View style={styles.section}>

        <Image src='/logo.png'/>
        <view style={styles.fpSpacer}></view>
        <view style={styles.fpSpacer}></view>

        <Text style={styles.fpDescription}>Open 7 Days a Week</Text>
        <view style={styles.fpSpacer}></view>
        <Text style={styles.fpDescription}>Monday - Friday</Text>
        <Text style={styles.fpDescription}>5:00 am - 8:00 pm</Text>
        <Text style={styles.fpDescription}>Saturday</Text>
        <Text style={styles.fpDescription}>6:00 am - 8:00 pm</Text>
        <Text style={styles.fpDescription}>Sunday</Text>
        <Text style={styles.fpDescription}>7:00 am - 4:00 pm</Text>
        <view style={styles.fpSpacer}></view>
        <Text style={styles.fpDescription}>Party Platters Available Upon Request</Text>
        <view style={styles.fpSpacer}></view>
        <Text style={styles.fpDescription}>Serving Groveries, Deli, Lottery, Beer, Coffee, Sandwiches, (Breakfast & Lunch), Soup, & Daily Specials, Stamps and More!</Text>
        <view style={styles.fpSpacer}></view>
        <Text style={styles.fpDescription}>We Now Accept Credit Cards</Text>
        <Text style={styles.fpDescription}>(Discover, Visa, Mastercard)</Text>
        <view style={styles.fpSpacer}></view>
        <Text style={styles.fpDescription}>361 Woodford Ave</Text>
        <Text style={styles.fpDescription}>Plainville, CT 06062</Text>
        <Text style={styles.fpDescription}>860-747-8857</Text>
        <view style={styles.fpSpacer}></view>
        <Text style={styles.fpDescription}>Like us on Facebook</Text>
        <view style={styles.fpSpacer}></view>
        <Text style={styles.fpDescription}>Prices are subject to change</Text>
      </View>
    </Page>
    <Page size={pageSize} style={styles.page2} orientation='landscape'>
      <View style={styles.section}>
        <Text style={styles.title}>Sandwiches & Grinders</Text>
        <Text style={styles.description}>Served on choice of bread, 6" or 12" grinder roll, Harvest Bakery Roll or Wraps Available</Text>
      
        <View style={styles.line}>
          <Text style={styles.lineDescription}></Text>
          <Text style={styles.lineNoDotBox}></Text>
          <View style={styles.linePriceBox}><Text style={styles.linePrice}>6"</Text></View>
          <View style={styles.linePriceBox}><Text style={styles.linePrice}>12"</Text></View>
        </View>

        {menuGrab.cold_menu.map((thingy, index) => (
          <View key={index} style={styles.line}>
            <Text style={styles.lineDescription}>{thingy[0]}  </Text>
            <View style={styles.lineDotsBox}><Text style={styles.lineDots}></Text></View>
            <View style={styles.linePriceBox}><Text style={styles.linePrice}>{thingy[1].toFixed(2)}</Text></View>
            <View style={styles.linePriceBox}><Text style={styles.linePrice}>{thingy[2].toFixed(2)}</Text></View>
          </View>
        ))}

        <View style={styles.spacer}></View>

        <Text style={styles.title}>Hot Sandwiches & Grinders</Text>

        <View style={styles.line}>
          <Text style={styles.lineDescription}></Text>
          <Text style={styles.lineNoDotBox}></Text>
          <View style={styles.linePriceBox}><Text style={styles.linePrice}>6"</Text></View>
          <View style={styles.linePriceBox}><Text style={styles.linePrice}>12"</Text></View>
        </View>

        {menuGrab.hot_menu.map((thingy, index) => (
          <View key={index} style={styles.line}>
            <Text style={styles.lineDescription}>{thingy[0]}  </Text>
            <View style={styles.lineDotsBox}><Text style={styles.lineDots}></Text></View>
            <View style={styles.linePriceBox}><Text style={styles.linePrice}>{thingy[1].toFixed(2)}</Text></View>
            <View style={styles.linePriceBox}><Text style={styles.linePrice}>{thingy[2].toFixed(2)}</Text></View>
          </View>
        ))}

        <View style={styles.spacer}></View>
        <Text style={styles.description}>Choice of Toppings: Cheese, Lettuve, Tomato, Onion, Olives, Peppers, Pickles and Dressings!</Text>
        <View style={styles.spacer}></View>
        {menuGrab.hot_dogs.map((item, index) => (
          <Text key={index} style={styles.description}>{item[0]} ......... ${item[1].toFixed(2)} (Mon - Sat)</Text>
        ))}
        <View style={styles.spacer}></View>
        {menuGrab.soup.map((item, index) => (
          <Text key={index} style={styles.description}>{item[0]}         Small ${item[1].toFixed(2)}     Large ${item[2].toFixed(2)}</Text>
        ))}
        <View style={styles.spacer}></View>

        <Text style={styles.title}>Specialty Sandwiches</Text>
        <View style={styles.spacer}></View>

        {menuGrab.lunch_specials.slice(0,3).map((thingy, index) => (
          <React.Fragment key={index}>
            <View style={styles.line}>
              <Text style={styles.lineDescription}>#{index + 1}  {thingy[0]}  </Text>
              <View style={styles.lineDotsBox}><Text style={styles.lineDots}></Text></View>
              <View style={styles.linePriceBox}><Text style={styles.linePrice}>{thingy[2].toFixed(2)}</Text></View>
              {thingy[3] != null && (
                <View style={styles.linePriceBox}><Text style={styles.linePrice}>{thingy[3].toFixed(2)}</Text></View>
              )}
            </View>
            <View style={styles.line}>
              <Text style={styles.lineDetails}>{thingy[1]}</Text>
            </View>
          </React.Fragment>
        ))}

      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Specialty Sandwiches</Text>
        <View style={styles.spacer}></View>

        {menuGrab.lunch_specials.slice(5,26).map((thingy, index) => (
          <React.Fragment key={index}>
            <View style={styles.line}>
              <Text style={styles.lineDescription}>#{index + 6}  {thingy[0]}  </Text>
              <View style={styles.lineDotsBox}><Text style={styles.lineDots}></Text></View>
              <View style={styles.linePriceBox}><Text style={styles.linePrice}>{thingy[2].toFixed(2)}</Text></View>
              {thingy[3] != null && (
                <View style={styles.linePriceBox}><Text style={styles.linePrice}>{thingy[3].toFixed(2)}</Text></View>
              )}
            </View>
            <View style={styles.line}>
              <Text style={styles.lineDetails}>{thingy[1]}</Text>
            </View>
          </React.Fragment>
        ))}
      </View>
      <View style={styles.section}>
        {menuGrab.lunch_specials.slice(26,55).map((thingy, index) => (
            <React.Fragment key={index}>
              <View style={styles.line}>
                <Text style={styles.lineDescription}>#{index + 27}  {thingy[0]}  </Text>
                <View style={styles.lineDotsBox}><Text style={styles.lineDots}></Text></View>
                <View style={styles.linePriceBox}><Text style={styles.linePrice}>{thingy[2].toFixed(2)}</Text></View>
                {thingy[3] != null && (
                  <View style={styles.linePriceBox}><Text style={styles.linePrice}>{thingy[3].toFixed(2)}</Text></View>
                )}
              </View>
              <View style={styles.line}>
                <Text style={styles.lineDetails}>{thingy[1]}</Text>
              </View>
            </React.Fragment>
          ))}
      </View>
    </Page>
  </Document>
);


export default Pamphlet;