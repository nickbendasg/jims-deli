import { useState, useEffect } from 'react';
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { db } from "../firebase/config";
import { doc, updateDoc } from 'firebase/firestore';
import { useAuthContext } from './useAuthContext';


export const useGoogleTranslate = (text, language) => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const [data, setData] = useState('');

  // const init = async (email, password) => {

  // };

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }
  

  useEffect(() => {

    const fetchData = async () => {

      var string = '&q=' + encodeURIComponent(text);
      var sourceLanguage = 'en';
      var userLanguage = language;
      var API_KEY = 'AIzaSyDQDHDmVhcgXuEg8EP-b4UGMqHFGI9RMms';
      var URL = 'https://translation.googleapis.com/language/translate/v2?key=' + API_KEY + '&source=' + sourceLanguage;
      URL += '&target=' + userLanguage;

  
  
      fetch(URL+string)
        .then(res => res.json())
        .then(
          ( res ) => { 
            // console.log(res);
            let translation = res.data.translations[0].translatedText.replace(/(&quot\;)/g,"\"")
            translation = decodeHtml(translation);
            translation = toTitleCase(translation);
            // this.setState({[key]:text})
            // console.log('success', translation);
            setData(translation);
          }      
        ).catch(
          ( error ) => { 
            console.log("There was an error: ", error); 
            return 'error';
          }
        );
  
    };
    
    fetchData();

  }, [text, language]);

  return { data, isPending, error };
};