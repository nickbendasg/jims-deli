=== File: src/hooks/useGapi.js ===
=== Content ===
import { useContext } from 'react';
import { GapiContext } from '../context/GapiContext';

export const useGapi = () => {
  const context = useContext(GapiContext);

  if(context === undefined) {
    throw new Error("useGapi() must be used inside a GapiProvider");
  };

  return context;
}
=== End of src/hooks/useGapi.js ===

