=== File: src/context/GapiContext.js ===
=== Content ===
import { createContext, useReducer, useEffect } from 'react';
// import AreaWindow from '../google/gmap/Measure/Area/AreaWindow';
import * as ReactDOM from 'react-dom/client';

export const GapiContext = createContext();

let Popup, ImageOverlay;

const gapiReducer = (state, action) => {

  // console.log(action.type);
  // console.log(action.payload);

  // debugger;
  
  switch (action.type) {
    case 'SET_GOOGLE': 
      return { ...state, google: action.payload }
    case 'SET_READY': 
      return { ...state, apiIsReady: true }
    case 'SET_POPUPFN': 
      return { ...state, returnPopup: action.payload }
    case 'SET_OVERLAYFN': 
      return { ...state, returnOverlay: action.payload }
    case 'SET_GROUNDOVERLAYFN': 
      return { ...state, returnGroundOverlay: action.payload }
    case 'default':
      return state;
  };
};


export function GapiProvider({ children }) {

  const [state, dispatch] = useReducer(gapiReducer, {
    google: null,
    apiIsReady: false,
    returnPopup: function() {
      console.log('return popup');
      // debugger;
    },
    returnOverlay: function() {
      console.log('return Overlay');
      // debugger;
    },
    returnGroundOverlay: function() {
      console.log('return GroundOverlay');
      // debugger;
    }
  });

  const setGoogle = (googleObj) => {
    dispatch({type: 'SET_GOOGLE', payload: googleObj});
  };

  const setReady = () => {
    dispatch({type: 'SET_READY'});
  };

  const setFunction = (selector, callback) => {
    let type;
    
    switch(selector) {
      case 'popup':
        type = 'SET_POPUPFN'; break;
      case 'overlay':
        type = 'SET_OVERLAYFN'; break;
      case 'groundOverlay':
        type = 'SET_GROUNDOVERLAYFN'; break;
    };

    dispatch({type: type, payload: callback});
  }

  useEffect(() => {
    checkGoogle();
  }, []);

  const checkGoogle = () => {
    console.log('Google State:', window.google);
    setTimeout(function() {
      if(window.google != null) {
        initGoogle();
      } else {
        checkGoogle();
      }
    }, 500);
  };

  const initGoogle = () => {
    setReady();
    setGoogle(window.google);

    
    class ImageOverlay extends window.google.maps.OverlayView {
      bounds;
      image;
      div;
      constructor(bounds, image) {
        super();
        this.bounds = bounds;
        this.image = image;
      }
      /**
       * onAdd is called when the map's panes are ready and the overlay has been
       * added to the map.
       */
      onAdd() {
        this.div = document.createElement("div");
        this.div.style.borderStyle = "none";
        this.div.style.borderWidth = "0px";
        this.div.style.position = "absolute";
        this.div.classList.add('findMe');

        let tempDiv = document.createElement("div");
  
        // Create the img element and attach it to the div.
        const img = document.createElement("img");
  
        img.src = this.image;
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.position = "absolute";
        this.div.appendChild(img);
  
        // Add the element to the "overlayLayer" pane.
        const panes = this.getPanes();
  
        panes.overlayLayer.appendChild(this.div);
      }
      draw() {
        // We use the south-west and north-east
        // coordinates of the overlay to peg it to the correct position and size.
        // To do this, we need to retrieve the projection from the overlay.
        const overlayProjection = this.getProjection();
        // Retrieve the south-west and north-east coordinates of this overlay
        // in LatLngs and convert them to pixel coordinates.
        // We'll use these coordinates to resize the div.
        const sw = overlayProjection.fromLatLngToDivPixel(
          this.bounds.getSouthWest()
        );
        const ne = overlayProjection.fromLatLngToDivPixel(
          this.bounds.getNorthEast()
        );
  
        // Resize the image's div to fit the indicated dimensions.
        if (this.div) {
          this.div.style.left = sw.x + "px";
          this.div.style.top = ne.y + "px";
          this.div.style.width = ne.x - sw.x + "px";
          this.div.style.height = sw.y - ne.y + "px";
          this.div.style.transform = 'rotate(' + (360 - this.map.heading) + 'deg)';
          this.div.style.border = '1px solid red';
          // debugger;
        }
      }
      /**
       * The onRemove() method will be called automatically from the API if
       * we ever set the overlay's map property to 'null'.
       */
      onRemove() {
        if (this.div) {
          this.div.parentNode.removeChild(this.div);
          delete this.div;
        }
      }
      /**
       *  Set the visibility to 'hidden' or 'visible'.
       */
      hide() {
        if (this.div) {
          this.div.style.visibility = "hidden";
        }
      }
      show() {
        if (this.div) {
          this.div.style.visibility = "visible";
        }
      }
      toggle() {
        if (this.div) {
          if (this.div.style.visibility === "hidden") {
            this.show();
          } else {
            this.hide();
          }
        }
      }
      toggleDOM(map) {
        if (this.getMap()) {
          this.setMap(null);
        } else {
          this.setMap(map);
        }
      }
    };


    class Popup extends window.google.maps.OverlayView {
      position;
      content;
      containerDiv;
      root;
      rootEl;
      state;
      windowFn;
      constructor(position, content, root, rootEl, state, windowFn) {
        super();
        // console.log('set popup');
        // console.log(root, rootEl)
        this.position = position;
        this.content = content;
        this.root = root;
        this.rootEl = rootEl;
        this.state = state;
        this.windowFn = windowFn;

        let testEl = (
          <div></div>
          // <AreaWindow title={state.title} lastClick={state.lastClick} color={state.color} changeTheTitle={state.changeTheTitle} changeTheColor={state.changeTheColor} deleteThePopup={state.deleteThePopup} hidePop={state.hidePop} />
        );
  
        console.log(testEl);

        let divEl = document.createElement("div");
        divEl.classList.add('area-window');
        divEl.style.backgroundColor = 'white';

        const rooty = ReactDOM.createRoot(divEl);
        rooty.render(testEl);
        // console.log(content);
        // console.log(divEl);
        content = divEl;

        this.root = rooty;
        // debugger;


        content.classList.add("popup-bubble");
  
        // This zero-height div is positioned at the bottom of the bubble.
        const bubbleAnchor = document.createElement("div");
  
        bubbleAnchor.classList.add("popup-bubble-anchor");
        bubbleAnchor.appendChild(content);
        // This zero-height div is positioned at the bottom of the tip.
        this.containerDiv = document.createElement("div");
        this.containerDiv.classList.add("popup-container");
        this.containerDiv.appendChild(bubbleAnchor);
        // Optionally stop clicks, etc., from bubbling up to the map.
        Popup.preventMapHitsAndGesturesFrom(this.containerDiv);
      }
      renderState() {
        const state = this.state;
        // state.title=String(Math.random());
        this.root.render(
          <div></div>
          // <AreaWindow title={state.title} lastClick={state.lastClick} color={state.color} changeTheTitle={state.changeTheTitle} changeTheColor={state.changeTheColor} deleteThePopup={state.deleteThePopup} hidePop={state.hidePop} />
        );

      }
      updateState(state) {
        this.state = state;
      }
      updatePosition(position) {
        this.position = position;
      }
      updateContent(content) {
        this.content = content;
      }
      /** Called when the popup is added to the map. */
      onAdd() {
        this.getPanes().floatPane.appendChild(this.containerDiv);
      }
      /** Called when the popup is removed from the map. */
      onRemove() {
        if (this.containerDiv.parentElement) {
          this.containerDiv.parentElement.removeChild(this.containerDiv);
        }
      }
      /** Called each frame when the popup needs to draw itself. */
      draw() {
        const divPosition = this.getProjection().fromLatLngToDivPixel(
          this.position
        );
        // Hide the popup when it is far out of view.
        const display =
          Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000
            ? "block"
            : "none";
  
        if (display === "block") {
          this.containerDiv.style.left = divPosition.x + "px";
          this.containerDiv.style.top = divPosition.y + "px";
        }
  
        if (this.containerDiv.style.display !== display) {
          this.containerDiv.style.display = display;
        }

        if (false) {
          this.containerDiv.innerHTML = '';
          const bubbleAnchor = document.createElement("div");
          bubbleAnchor.classList.add("popup-bubble-anchor");
          const test = document.createElement("div");
          test.innerHTML = 'test';
          this.containerDiv.appendChild(bubbleAnchor);
          bubbleAnchor.appendChild(this.content);

        }

        if (true) {
          // console.log(this, this.root);
          // debugger;
          // this.root.render(this.rootEl);
          this.renderState();
        }
      }
    };


    
    setFunction('overlay', function(bounds, image) {
      return new ImageOverlay(bounds, image)
    });

    setFunction('popup', function(position, content, root, rootEl, state, windowFn) {
      return new Popup(position, content, root, rootEl, state, windowFn);
    });

    setFunction('groundOverlay', function(image, bounds) {
      
      const imageBounds = {
        north: 41.665169,
        south: 41.661909,
        east: -72.867010,
        west: -72.870264,
      };
      return new window.google.maps.GroundOverlay(image, imageBounds);
    });
    
  };

  
  
  return (
    <GapiContext.Provider value={{...state, setGoogle, setReady}}>
      {children}
    </GapiContext.Provider>
  );
};
=== End of src/context/GapiContext.js ===

