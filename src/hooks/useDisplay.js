import { useContext } from 'react';
import { DisplayContext } from '../context/DisplayContext';

export const useDisplay = () => {
  const context = useContext(DisplayContext);

  if(context === undefined) {
    throw new Error("useDisplay() must be used inside a DisplayProvider");
  };

  return context;
}