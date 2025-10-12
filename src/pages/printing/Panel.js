// import { useParams, Link } from "react-router-dom";

import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import Header from '../../components/global/Header';
// // import MyDocument from './MyDocument';
// import { PDFViewer } from '@react-pdf/renderer';
// // import React from 'react';
// import Pamphlet from '../../components/pdf/Pamphlet';
// import Jumbo from '../../components/pdf/Jumbo';
// import Schedule from '../../components/pdf/Schedule';
// import Default from '../../components/pdf/Default';
// import './Press.css';
import Option from '../../pages/settings/Option.js';



export default function Panel({ categories, category, setCategory, catPick, setCatPick, catOptions, setCatOptions }) {

  const catList = categories.array;

  const clearOptions = () => {
    setCatOptions({});
    setCatPick('');
  };


  const setCat = (pick) => {
    setCategory(pick);
    var getCat = categories.getCat(pick);
    console.log(getCat);
    console.log(getCat.list[0])
    setCatPick(getCat.list[0].id);
    // debugger;
  };

  return (
    <>

      <div style={{color: 'white'}}>
        {catOptions.option}
      </div>
      <div className="box">
        <div className="printHead">
          {catList.map(cat => (
            <div key={cat.name} className={`btn${cat.name == category ? ' activeBtn' : ''}`} onClick={() => {
              clearOptions();
              setCat(cat.name);
            }}>
              <div>{cat.name}</div>
              
            </div>
          ))}
        </div>

        <div className="printBody">

          {catList.map(cat => (
            <React.Fragment key={cat.name}>
              {cat.name == category && (
                <>
                    <label>
                      <div className="label">
                        Document:
                      </div>
                      <select className="select" onChange={(e) => {
                        clearOptions();
                        setCatPick(e.target.value);
                      }}>

                        {cat.list.map(cGrab => (
                          <Option value={cGrab.id} text={cGrab.name}/>
                        ))}
                      </select>
                    </label>



                    {cat.list.map(cList => (
                      <>
                        {cList.id == catPick && (
                          <>
                            {cList.options != undefined && (
                              <div className='options'>
                                <div>Options: </div>
                                {cList.options.map(cGet => (
                                  <>
                                    <label>
                                      <div className="label">
                                        {cGet.name}:
                                      </div>
                                      <select className="select" onChange={(e) => {setCatOptions({option: e.target.value})}}>
                
                                        {cGet.options.map(cGetGrab => (
                                          <Option value={cGetGrab} text={cGetGrab}/>
                                        ))}
                                      </select>
                                    </label>
                                  </>
                                ))}
                              </div>
                            )}
                          </>
                        )}
                      </>
                    ))}

                </>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>

    </>
  )
}