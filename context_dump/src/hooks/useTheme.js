=== File: src/hooks/useTheme.js ===
=== Content ===
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if(context === undefined) {
    throw new Error("useTheme() must be used inside a ThemeProvider");
  };

  return context;
}
=== End of src/hooks/useTheme.js ===

