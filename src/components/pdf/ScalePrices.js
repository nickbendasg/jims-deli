

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
const pageSize = {width: (5*72), height: (6*72)};

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
    // marginTop: 15,
    // marginBottom: 15,
    // marginLeft: 8,
    // marginRight: 8,
    // margin: '2px',
    // padding: 10,
    // flexGrow: 1,
    border: '4px solid rgb(188,188,188)',
    width: 'calc(100% - 0px)',
    height: 'calc(100% - 0px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black'
  },
  image: {
    width: '500px',
    height: '500px',
    marginTop: '40px'
  },
  box: {
    width: '100%',
    height: '100%',
    // border: '1px solid red',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: '8px'
  },
  header: {
    width: '100%',
    height: '24px',
    paddingTop: '4px',
    // border: '1px solid green',
    textAlign: 'center',
    color: 'black',
    fontSize: '16px'

  },
  body: {
    flexGrow: 1,
    width: '100%',
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderTop: '2px solid rgb(222,222,222)',
    paddingTop: '8px'

  },
  left: {
    width: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'rgba(255,0,0,0.2)',
    // color: 'red',
    // border: '1px solid green'
  },
  right: {
    width: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  line: {
    width: '100%',
    paddingLeft: '10px',
    paddingRight: '10px',
    height: '16px',
    // border: '2px solid pink',
    // backgroundColor: 'green',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  name: {
    
  },
  dots: {
    borderBottom: '1px dotted black',
    flexGrow: 1,
    height: '5px',
    marginRight: '8px',
    marginLeft: '8px'
  },
  price: {
    
  },
  test: {
    width: '50px',
    height: '50px',
    backgroundColor: 'red',
    color: 'green'
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
const ScalePrices = () => (
  <Document>
    <Page size={pageSize} style={styles.page1} orientation='landscape'>

      <View style={styles.section}>
        <View style={styles.box}>
          <View style={styles.header}>
            <Text>Sides</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.left}>
              {menuGrab.side_salads.slice(0, (menuGrab.side_salads.length/2)).map(snack => (
                <>
                  <div style={styles.line}>
                    <div style={styles.name}>
                      <Text>
                        {snack[0]}
                      </Text>
                    </div>
                    <div style={styles.dots}>
                    </div>
                    <div style={styles.price}>
                      <Text>
                        {snack[1].toFixed(2)} / lb.
                      </Text>
                    </div>
                  </div>
                </>
              ))}
            </View>
            <View style={styles.right}>
              {menuGrab.side_salads.slice((menuGrab.side_salads.length/2), menuGrab.side_salads.length).map(snack => (
                <>
                  <div style={styles.line}>
                    <div style={styles.name}>
                      <Text>
                        {snack[0]}
                      </Text>
                    </div>
                    <div style={styles.dots}>
                    </div>
                    <div style={styles.price}>
                      <Text>
                        {snack[1].toFixed(2)} / lb.
                      </Text>
                    </div>
                  </div>
                </>
              ))}
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.left}>
              {menuGrab.side_snacks.slice(0, (menuGrab.side_snacks.length/2)).map(snack => (
                <>
                  <div style={styles.line}>
                    <div style={styles.name}>
                      <Text>
                        {snack[0]}
                      </Text>
                    </div>
                    <div style={styles.dots}>
                    </div>
                    <div style={styles.price}>
                      <Text>
                        {snack[1].toFixed(2)} / lb.
                      </Text>
                    </div>
                  </div>
                </>
              ))}
            </View>
            <View style={styles.right}>
              {menuGrab.side_snacks.slice((menuGrab.side_snacks.length/2), menuGrab.side_snacks.length).map(snack => (
                <>
                  <div style={styles.line}>
                    <div style={styles.name}>
                      <Text>
                        {snack[0]}
                      </Text>
                    </div>
                    <div style={styles.dots}>
                    </div>
                    <div style={styles.price}>
                      <Text>
                        {snack[1].toFixed(2)} / lb.
                      </Text>
                    </div>
                  </div>
                </>
              ))}
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.left}>
              {menuGrab.single_snacks.slice(0, (menuGrab.single_snacks.length/2)).map(snack => (
                <>
                  <div style={styles.line}>
                    <div style={styles.name}>
                      <Text>
                        {snack[0]}
                      </Text>
                    </div>
                    <div style={styles.dots}>
                    </div>
                    <div style={styles.price}>
                      <Text>
                        {snack[1].toFixed(2)} each
                      </Text>
                    </div>
                  </div>
                </>
              ))}
            </View>
            <View style={styles.right}>
              {menuGrab.single_snacks.slice((menuGrab.single_snacks.length/2), menuGrab.single_snacks.length).map(snack => (
                <>
                  <div style={styles.line}>
                    <div style={styles.name}>
                      <Text>
                        {snack[0]}
                      </Text>
                    </div>
                    <div style={styles.dots}>
                    </div>
                    <div style={styles.price}>
                      <Text>
                        {snack[1].toFixed(2)} each
                      </Text>
                    </div>
                  </div>
                </>
              ))}
            </View>
          </View>
        </View>
      </View>

    </Page>
  </Document>
);


export default ScalePrices;