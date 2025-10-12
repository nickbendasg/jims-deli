=== File: src/components/pdf/Default.js ===
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
    // padding: 10,
    // flexGrow: 1,
    width: '100%',
    height: 'calc(94%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '500px',
    height: '500px',
    marginTop: '40px'
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

const imagesAr = ['one', 'two', 'three'];
const imageStr = imagesAr[Math.floor(Math.random() * (3))];

// Create Document Component
const Default = () => (
  <Document>
    <Page size={pageSize} style={styles.page1} orientation='landscape'>

      <View style={styles.section}>

        <Image style={styles.image} src={`/printers/${imageStr}.png`}/>

      </View>

    </Page>
  </Document>
);


export default Default;
=== End of src/components/pdf/Default.js ===

