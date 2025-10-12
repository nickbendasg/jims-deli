import { useParams, Link } from "react-router-dom";

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/global/Header';
// import MyDocument from './MyDocument';
import { PDFViewer, pdf } from '@react-pdf/renderer';
// import React from 'react';
import Pamphlet from '../../components/pdf/Pamphlet';
import Jumbo from '../../components/pdf/Jumbo';
import Schedule from '../../components/pdf/Schedule';
import Default from '../../components/pdf/Default';
import ScalePrices from '../../components/pdf/ScalePrices';
import FridgePrices from "../../components/pdf/FridgePrices";
import OrderSheet from "../../components/pdf/OrderSheet";
import AlphabeticalSpecials from "../../components/pdf/AlphabeticalSpecials";
import News from "../../components/pdf/News";
import './Press.css';
import Panel from './Panel';


const categoryAr = [
  'Menu',
  'Signs',
  'Schedule',
  'Helpers',
  'Special'
];

const catz = {
  array: [
    {
      name: 'Menu',
      list: [
        {
          name: 'Letter',
          id: 'menu_letter'
        },
        {
          name: 'Jumbo',
          id: 'menu_jumbo'
        },
        {
          name: 'Poster',
          id: 'menu_poster'
        }
      ]
    },
    {
      name: 'Signs',
      list: [
        {
          name: 'Scale Prices',
          id: 'scale_sign'
        },
        {
          name: 'Back of Mini Fridge',
          id: 'fridge_sign'
        }
      ]
    },
    {
      name: 'Schedule',
      list: [
        {
          name: 'Everyone',
          id: 'schedule_everyone'
        },
        {
          name: 'Individual',
          id: 'schedule_individual',
          options: [
            {
              type: 'list',
              name: 'Employee',
              options: [
                'Julie',
                'Sanjay',
                'Rachel'
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'Helpers',
      list: [
        {
          name: 'Order Sheet',
          id: 'order_helper'
        },
        {
          name: 'Alphabetical Specials',
          id: 'alphabet_helper'
        }
      ]
    },
    {
      name: 'Special',
      list: [
        {
          name: 'Daily News',
          id: 'news'
        },
        {
          name: 'Weekly News',
          id: 'news'
        },
        {
          name: 'Monthly News',
          id: 'news'
        },
      ]
    },
  ],
  getCat: function(string) {
    var count = 0;
    var ar = this.array;
    for(count = 0; count < ar.length; count++) {
      if(ar[count].name == string){
        return ar[count];
      };
    };
    return false;
  }
}


const btnAr = [
  {
    txt: 'Pamphlet',
    link: '/printingpress/pamphlet'
  },
  {
    txt: 'Jumbo',
    link: '/printingpress/jumbo'
  },
  {
    txt: 'Schedule All',
    link: '/printingpress/schedule-all'
  },
  {
    txt: 'Schedule Single',
    link: '/printingpress/schedule-single'
  },
];


export default function Press() {



  const [category, setCategory] = useState('');
  const [catPick, setCatPick] = useState('');
  const [catOptions, setCatOptions] = useState({});

  const catchAll = ['', 'menu_poster']
  
  const { type } = useParams();

  return (
    <>
      <Header/>
      <div className="printPress">

        <div className="header">
          <div className="title">Printing Press</div>
        </div>

        <div className="body">

          <div className="left">

            <Panel categories={catz} category={category} setCategory={setCategory} catPick={catPick} setCatPick={setCatPick} catOptions={catOptions} setCatOptions={setCatOptions}/>

          </div>

          <div className="right">
            <div style={{marginBottom: '10px', textAlign: 'center'}}>
              <button 
                onClick={async () => {
                  try {
                    // Get the current PDF component
                    let pdfComponent = null;
                    if (catPick === 'menu_letter') {
                      pdfComponent = <Pamphlet />;
                    } else if (catPick === 'schedule_everyone' || catPick === 'schedule_individual') {
                      pdfComponent = <Schedule />;
                    } else if (catPick === 'menu_jumbo') {
                      pdfComponent = <Jumbo />;
                    } else if (catPick === 'scale_sign') {
                      pdfComponent = <ScalePrices />;
                    } else if (catPick === 'fridge_sign') {
                      pdfComponent = <FridgePrices />;
                    } else if (catPick === 'order_helper') {
                      pdfComponent = <OrderSheet />;
                    } else if (catPick === 'alphabet_helper') {
                      pdfComponent = <AlphabeticalSpecials />;
                    } else if (catPick === 'news') {
                      pdfComponent = <News />;
                    } else {
                      pdfComponent = <Default />;
                    }

                    // Generate PDF blob
                    const blob = await pdf(pdfComponent).toBlob();
                    
                    // Create download link
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = `${catPick || 'menu'}.pdf`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    URL.revokeObjectURL(url);
                  } catch (error) {
                    console.error('Error generating PDF:', error);
                    alert('Error generating PDF. Please try again.');
                  }
                }}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                Download PDF
              </button>
            </div>
            <PDFViewer style={{width: 'calc(100% - 100px)', height: 'calc(100% - 200px)'}}>
              {catPick === 'menu_letter' && (
                <Pamphlet />
              )}
              {catPick === 'schedule_everyone' && (
                <Schedule />
              )}
              {catPick === 'schedule_individual' && (
                <Schedule />
              )}
              {catPick === 'menu_jumbo' && (
                <Jumbo />
              )}
              {catPick === 'scale_sign' && (
                <ScalePrices />
              )}
              {catPick === 'fridge_sign' && (
                <FridgePrices />
              )}
              {catPick === 'order_helper' && (
                <OrderSheet />
              )}
              {catPick === 'alphabet_helper' && (
                <AlphabeticalSpecials />
              )}
              {catPick === 'news' && (
                <News />
              )}
              {catchAll.includes(catPick) && (
                <Default />
              )}
            </PDFViewer>

          </div>

        </div>




      </div>
    </>
  )
}