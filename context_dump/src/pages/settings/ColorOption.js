=== File: src/pages/settings/ColorOption.js ===
=== Content ===
import { React, useEffect } from 'react';



const ColorOption = ({ label, value, match, updateFn }) => {

  const changeColor = (val) => {
    updateFn(match, val);
  };

  useEffect(() => {
  }, [label, value]);

  return (
    <div className="color-box">

      <div className='label'>
        <div>{label}</div>
      </div>
      <input type="color" value={value} onChange={(e) => {changeColor(e.target.value)}}>
      </input>

    </div>
  )
}
export default ColorOption;
=== End of src/pages/settings/ColorOption.js ===

