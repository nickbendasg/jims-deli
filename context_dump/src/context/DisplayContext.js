=== File: src/context/DisplayContext.js ===
=== Content ===
import { createContext, useReducer } from 'react';

export const DisplayContext = createContext();

const displayReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_LEFTBAR': 
      return { ...state, leftbar: action.payload }
    case 'CHANGE_RIGHTBAR': 
      return { ...state, rightbar: action.payload }
    case 'default':
      return state;
  };
};


export function DisplayProvider({ children }) {

  const [state, dispatch] = useReducer(displayReducer, {
    leftbar: false,
    rightbar: 'min'
  });

  const adjustLeft = (bool) => {
    dispatch({type: 'CHANGE_LEFTBAR', payload: bool});
  };

  const adjustRight = (state) => {
    dispatch({type: 'CHANGE_RIGHTBAR', payload: state});
  }
  
  return (
    <DisplayContext.Provider value={{...state, adjustLeft, adjustRight}}>
      {children}
    </DisplayContext.Provider>
  );
};
=== End of src/context/DisplayContext.js ===

