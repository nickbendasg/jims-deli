import { React, useEffect } from 'react';



const Option = ({ value, text, selected }) => {

  var bool = false;
  if(value === selected) {
    bool = true;
  };


  useEffect(() => {
  }, [value, text, bool]);

  return (
    <>
      {bool && 
        <option value={value} selected>{text}</option>
      }
      {!bool && 
        <option value={value}>{text}</option>
      }
    </>
  )
}
export default Option;