=== File: src/components/pdf/Schedule.js ===
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

var today = new Date();
// let mon = new Date(today.getDate() + (1 - today.getDay()) % 7);
var mon = today;

function getNextWeekDay (startDate, dayOfWeek){
  var dayOffset = dayOfWeek > startDate.getDay()
      ? dayOfWeek - startDate.getDay()
      : dayOfWeek - startDate.getDay() + 7;

  startDate.setDate(startDate.getDate() + dayOffset);

  return startDate;
};

function addDays(date, count) {
  var copy = new Date(date.getTime());
  copy.setDate(copy.getDate() + count)
  return copy;
}

var nextMon = getNextWeekDay(today, 1);
var mon = nextMon;
var tue = addDays(nextMon, 1);
var wed = addDays(nextMon, 2);
var thu = addDays(nextMon, 3);
var fri = addDays(nextMon, 4);
var sat = addDays(nextMon, 5);
var sun = addDays(nextMon, 6);


// tue.setDate(nextMon.getDate() + 1)
// wed.setDate(nextMon.getDate() + 2)
// thu.setDate(nextMon.getDate() + 3)
// fri.setDate(nextMon.getDate() + 4)
// sat.setDate(nextMon.getDate() + 5)
// sun.setDate(nextMon.getDate() + 6)
// var date = new Date("12/10/2014");
// var divElement = document.getElementById("date");
// divElement.appendChild(document.createTextNode(""));

console.log('date logger date logger date logger');
console.log(mon.toDateString());

let stringWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let week = [mon, tue, wed, thu, fri, sat, sun];


let dStr = mon.toDateString();

let empList = ['Sanjay', 'Ellen', 'Chris', 'Angela', 'Linda', 'Rachel', 'Hayley', 'Julie', 'Laura'];

// Create styles
const styles = StyleSheet.create({
  page1: {
    flexDirection: 'row',
    backgroundColor: 'white',
    fontFamily: "Tempus Sans",
    fontSize: '12px',
  },
  page2: {
    flexDirection: 'row',
    backgroundColor: 'white',
    fontFamily: "Bookman",
    fontSize: '12px',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  line: {
    flexGrow: 1,
    width: '100vw',
    borderTop: '0.5px solid black',
    borderBottom: '0.5px solid black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'

  },
  topline: {
    height: '36px',
    width: '100%',
    borderTop: '0.5px solid black',
    borderBottom: '0.5px solid black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'

  },
  name: {
    width: '100px',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRight: '0.5px solid black'
  },
  time: {

    flexGrow: 1,
    // width: '60px',
    height: '100%',
    borderRight: '0.5px solid black',
    borderLeft: '0.5px solid black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dates: {
    // border: '1px solid pink', 
    width: '60px', 
    textAlign: 'center'
  }

});


// Create Document Component
const Schedule = () => (
  <Document>
    <Page size="A4" style={styles.page1} orientation='landscape'>

      <View style={styles.box}>

        <View style={styles.topline}>

          <View style={styles.name}>
            <Text>Jim's Schedule</Text>
          </View>
          {week.map(day => (
            <View style={styles.time}>
              <Text style={styles.dates}>{stringWeek[day.getDay()]} {day.getMonth()}-{day.getDate()}</Text>
            </View>
          ))}

        </View>

        {empList.map(emp => (
          
          <View style={styles.line}>
            <View style={styles.name}>
              <Text>{emp}</Text>
            </View>
            {[1,2,3,4,5,6,7].map(num => (
              <View style={styles.time}></View>
            ))}
          </View>
        ))}
      </View>

      <View style={styles.section}>
      </View>

      <View style={styles.section}>
      </View>

    </Page>
  </Document>
);


export default Schedule;
=== End of src/components/pdf/Schedule.js ===

