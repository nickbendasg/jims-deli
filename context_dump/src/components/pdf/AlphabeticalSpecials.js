=== File: src/components/pdf/AlphabeticalSpecials.js ===
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

const specials = [...menuGrab.lunch_specials];


const shrinkName = (name) => {
  var noQuotes = name.replace(/['"“”]+/g, '');
  if(noQuotes.slice(0,4) == 'The '){
    noQuotes = noQuotes.slice(4, noQuotes.length);
  };
  return noQuotes
}


specials.forEach(function(thing, index) {
  console.log(thing);
  console.log(index);
  specials[index] = {
    name: shrinkName(thing[0]),
    description: thing[1],
    count: index + 1
  };
});

specials.sort((a, b) => a.name.localeCompare(b.name));
// specials.sort((a, b) => a.count > b.count);
console.log(specials);
// debugger;

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
    // marginTop: 15,
    // marginBottom: 15,
    // marginLeft: 8,
    // marginRight: 8,
    // padding: 10,
    // flexGrow: 1,
    width: '50%',
    height: 'calc(100%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '1px solid red',
    padding: '15px'
  },
  image: {
    width: '500px',
    height: '500px',
    marginTop: '40px'
  },
  line: {
    width:'100%',
    height: '44px',
    borderTop: '1px solid rgb(166,166,166)',
    borderBottom: '1px solid rgb(166,166,166)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '14px',
    marginTop: '-1px',
    paddingTop: '3px',
    paddingLeft: '5px',
    paddingRight: '5px'
  },
  name: {

  },
  number: {

  },
  dots: {
    borderBottom: '1px dotted black',
    height: '7px',
    flexGrow: 1,
    marginRight: '5px', 
    marginLeft: '5px'
  }
});



function Line ({name, number, grey}) {
  return (
    <View style={{...styles.line, ...{backgroundColor: `${grey ? 'rgb(230,230,230)' : 'white'}`}}}>

      <View style={styles.name}>
        <Text>{name}</Text>
      </View>
      <View style={styles.dots}>
      </View>
      <View style={styles.number}>
        <Text>#{number}</Text>
      </View>
    </View>
  )
}

// Create Document Component
const AlphabeticalSpecials = () => (
  <Document>
    <Page size={pageSize} style={styles.page1} orientation='landscape'>

      <View style={{...styles.section, ...{borderRight: '1px solid black'}}}>

        {specials.slice(0, specials.length/2).map((item, index) => (
          <Line name={item.name} number={item.count} grey={(index%2==0)}/>
        ))}
      </View>
      <View style={styles.section}>

        {specials.slice(specials.length/2, specials.length).map((item, index) => (
          <Line name={item.name} number={item.count} grey={(index%2==0)} />
        ))}
      </View>

    </Page>
  </Document>
);


export default AlphabeticalSpecials;
=== End of src/components/pdf/AlphabeticalSpecials.js ===

