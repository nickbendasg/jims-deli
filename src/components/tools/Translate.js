import { React, useEffect } from 'react';
import { useGoogleTranslate } from '../../hooks/useGoogle';


const Translate = ({ text, language }) => {
  const data = useGoogleTranslate(text, language).data;


  useEffect(() => {
    console.log('change Translate', text, '|', language, '|', data)
  }, [text, language]);

  return (
    <>
      {data}
    </>
  )
}
export default Translate;