import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Menu() {

  const { type } = useParams();




  var docID = '1_-gd6Z11YXA89e575aug8fioI8EpHQYjC9To8o6UTDs';
    
  if(type == 'breakfast') {
    docID = '1HakUGBEpWjBCodHLNklCyDoNnw0ftPsdiTvFBbNqpDI';
  } else if(type == 'specials') {
    docID = '1_-gd6Z11YXA89e575aug8fioI8EpHQYjC9To8o6UTDs';
  } else if(type == 'lunch') {
    docID = '17WC5Ff0IhEXh__oZEBmBIUXwP5235eQSa_3pptMZ1R4';
  };




  var globalBlob = null;
  var urlString = '';

  const testClick = (e) => {
    console.log(window.gapi);
    console.log('type: ', type);
    debugger;

    downloadDoc();
  };

  const downloadDoc = function() {


    var documentId = docID;
    // documentId = '1MJns_DmwC1xOTIGs-dS_cGu_UgZXKzA5aC6GtTTDixI';
  
    window.gapi.client.drive.files.export({
      'fileId': documentId,
      'mimeType': 'application/pdf'
    }).then(function(response) {
  
      console.log(response);
      console.log('________');
      console.log(response.body);
      console.log('________');
  
      globalBlob = bytesToBlob(response.body);
  
      startTheStuff();
  
    });
  };
  
  
  
  const bytesToBlob = function(fileContent) {
  
    let bytes = new Uint8Array(fileContent.length);
  
    for (let i = 0; i < bytes.length; i++) {
      bytes[i] = fileContent.charCodeAt(i);
    };
  
    let blob = new Blob([bytes], { type: 'application/pdf' });
  
    return blob;
  };
  
  
  
  const startTheStuff = function() {
    var iframe = createElement('IFRAME', null, null, null, null);
  
    iframe.style.position = 'fixed';
    // iframe.style.top = 0;
    // iframe.style.left = 0;
    // iframe.style.bottom = 0;
    // iframe.style.right = 0;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.margin = 0;
    iframe.style.padding = 0;
    iframe.style.overflow = 'hidden';
    iframe.style.zIndex = 99999;
  
  
    iframe.style.left = '-6px';
    iframe.style.top = '-12px';
    iframe.style.width = 'calc(100% + 24px)';
    iframe.style.height = 'calc(100% + 24px)';
    // iframe.style.border = 'none';
    // iframe.style.margin = '0px';
    // iframe.style.padding = '0px';
    // iframe.style.overflow = 'hidden';
    // iframe.style.zIndex = '99999';
  
    iframe.scrolling = 'no';
    iframe.seamless = 'seamless';
  
    document.body.appendChild(iframe);
  
    setIframeBlob(iframe, globalBlob);
  
    // toggleFullScreen();
  
    // document.body.requestFullscreen();
  
    // openBlob(globalBlob);
  
    // urlString = window.URL.createObjectURL(globalBlob);
  
    // debugger;
    // console.log(urlString);
  
    // var weblink = 'https://www.clickdimensions.com/links/TestPDFfile.pdf';
    // var glink = 'https://docs.google.com/gview?url=' + urlString + '&embedded=true';
    // iframe.setAttribute("src", glink);
  
  };
  const toggleFullScreen = function() {
    if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {  // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }
  
  
  const requestFullScreen = function(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
  
    if (requestMethod) { // Native full screen.
      requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
      var wscript = new window.ActiveXObject("WScript.Shell");
      if (wscript !== null) {
        wscript.SendKeys("{F11}");
      }
    }
  }
  
  
  
  // Global Logic
  
  
  const createElement = function(elType, elID, elClass, innerHTML, elParent) {
  
    var newElement = document.createElement(elType);
  
    if (elID != null) {
      newElement.id = elID;
    };
    if (elClass != null) {
      newElement.className = elClass;
    };
    if (innerHTML != null) {
      if (elType == "INPUT") {
        newElement.value = innerHTML;
      } else {
        // console.log('????????????????????????????/');
        newElement.innerHTML = innerHTML;
      };
    };
    if (elParent != null) {
  
    };
  
    return newElement;
  };



  // pdf logic


  const setIframeBlob = function(iframe, blob) {

    urlString = window.URL.createObjectURL(blob) + '#toolbar=0';
    iframe.src = urlString;
  };



  useEffect(() => {

    setTimeout(function() {
      testClick();

    }, 6000);
  });

  return (
    <div>
      <div onClick={testClick}>
        Menu  
      </div>
      <div id="testID">
        test
      </div>
    </div>
  )
}