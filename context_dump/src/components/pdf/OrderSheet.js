=== File: src/components/pdf/OrderSheet.js ===
=== Content ===


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
const pageSize = {width: (11*72), height: (8.5*72)};

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
    fontSize: '4px'
  },
  page2: {
    flexDirection: 'row',
    backgroundColor: 'white',
    fontFamily: "Bookman",
    fontSize: '4px',
  },
  section: {
    marginTop: 5,
    // marginBottom: 15,
    marginLeft: 8,
    // marginRight: 8,
    // padding: 10,
    // flexGrow: 1,
    width: '50%',
    marginRight: '49%',
    height: 'calc(99%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    border: '1px solid black'
  },
  image: {
    width: '500px',
    height: '500px',
    marginTop: '40px'
  },
  line: {
    width: '100%',
    height: '36px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    border: '1px solid rgb(177,177,177)'
  },
  lineBox: {
    flexGrow: 1,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRight: '1px solid rgb(177,177,177)',
    borderLeft: '1px solid rgb(177,177,177)'
  },
  lb_top: {
    width: '100%',
    height: '10px',
    fontSize: '6px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '0.25px solid green'

  },
  lb_bottom: {
    width: '100%',
    // height: '10px',
    fontSize: '10px',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // border: '0.25px solid blue'

  },
  lb_opt: {

  },
  container: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start', 
    alignItems: 'center',
    border: '2px solid rgb(111,111,111)'

  },
  bar: {
    width: '33%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start', 
    alignItems: 'center'

  }
});


const imagesAr = ['one', 'two', 'three'];
const imageStr = imagesAr[Math.floor(Math.random() * (3))];

// Create Document Component

const cheeses = ['Am', 'Ch', 'H R', 'I S', 'Pr', 'Sw', 'P J'];
const tops = ['Let', 'Tom', 'Onion', 'Olive', 'Pickle'];
const dresses = ['Oi', 'Vi', 'It', 'C It', 'Fr', 'B Vi', 'Ce', 'T Is', 'Ra', 'B Ch', 'Pe']
const toppings = ['Lettuce', 'Tomato', 'Onion', 'Olives', 'Red and Green Peppers', 'Bannana Peppers', 'Jalepeno Peppers', 'Pickles'];
const dressings = ['Oil', 'Vinegar', 'Italian', 'Creamy Italian', 'French', 'Balsamic', 'Ceasar', 'Thousand Island', 'Ranch', 'Blue Cheese', 'Peppercorn'];
const meats = ['Domestic Ham', 'Imported Ham', 'Honey Ham', 'Bologna', 'Capicola', 'Buffalo Chicken Breast', 'Deli Chicken Breast', 'Egg Salad', 'Tuna Salad', 'Genoa Salami', 'Oven Roasted Turkey', 'Honey Turkey', 'Black Pepper Turkey', 'Liverwurst', 'Pastrami']


function LineBox ({title, texts, width}) {

  return (
    <View style={{...styles.lineBox, ...{maxWidth: `${width != null ? width : ''}`, minWidth: `${width != null ? width : ''}`}}}>
      <View style={styles.lb_top}>
        <Text>
          {title}
        </Text>
      </View>
      <View style={styles.lb_bottom}>
        {texts != null  && texts.map(txt => (
          <View style={styles.lb_opt}>
            <Text>
              {txt}
            </Text>
          </View>
        ))}
      </View>

    </View>
  )

}


function MenuItem ({}) {

  return (

    <View style={styles.container}>
          
      <View style={styles.line}>
        <LineBox title="Quantity" texts={null} width='40px'/>
        <LineBox title="Name" texts={null}/>
        <LineBox title="Toasted" texts={['Light', 'N', 'Dark']} width='70px'/>
      </View>
      <View style={styles.line}>
        <LineBox title="Grinder" texts={['6"', '12"']}/>
        <LineBox title={null} texts={['HR']}/>
        <LineBox title={null} texts={['EM']}/>
        <LineBox title={null} texts={['Toast']}/>
        <LineBox title="Bagel" texts={null} width='60px'/>
        <LineBox title="Wrap" texts={null} width='60px'/>
      </View>
      <View style={styles.line}>
        {cheeses.map(cheese => (
          <LineBox title={null} texts={[`${cheese}`]}/>
        ))}
      </View>
      <View style={styles.line}>
        {tops.map(top => (
          <LineBox title={null} texts={[`${top}`]}/>
        ))}
        <LineBox title="Peppers" texts={['Red', 'Green', 'Ban', 'Jal']}/>
      </View>
      <View style={styles.line}>
        {dresses.map(top => (
          <LineBox title={null} texts={[`${top}`]}/>
        ))}
      </View>

      <View style={styles.line}>
      </View>
      <View style={styles.line}>
      </View>


    </View>
  )
}



const OrderSheet = () => (
  <Document>
    <Page size={pageSize} style={styles.page1} orientation='landscape'>

      <View style={styles.section}>

        <MenuItem />
        <MenuItem />
        <MenuItem />
      </View>

    </Page>
  </Document>
);


export default OrderSheet;
=== End of src/components/pdf/OrderSheet.js ===

