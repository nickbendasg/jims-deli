import { useEffect, useState } from 'react'
import { useGoogleTranslate } from '../../hooks/useGoogle';
import Header from '../../components/global/Header'
import { useFirestore } from '../../hooks/useFirestore';
import { useDocument } from '../../hooks/useDocument';
import './Settings.css';
import '../global/Styles.css';
import Option from './Option.js';
import ColorOption from './ColorOption';
import { doc } from 'firebase/firestore';



// styles
// import './Login.css'

export default function Settings() {


  const settingsId = 'qfQUtxyc9hkKInsoUUZ3';

  const { error, document } = useDocument('settings', settingsId);
  const { updateDocument, response } = useFirestore('settings');


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const { data, isPending, error } = useGoogleTranslate('How is your day going so far?', 'es');
  // const translation = useGoogleTranslate('What is your name?', 'es').data;


  var colorGrab;

  if(document != null) {
    colorGrab = document.colors;
  }


  const languageList = [
    {
      txt: 'English',
      val: 'en'
    },
    {
      txt: 'Afrikaans',
      val: 'af'
    },
    {
      txt: 'Albanian',
      val: 'sq'
    },
    {
      txt: 'Amharic',
      val: 'am'
    },
    {
      txt: 'Arabic',
      val: 'ar'
    },
    {
      txt: 'Armenian',
      val: 'hy'
    },
    {
      txt: 'Assamese',
      val: 'as'
    },
    {
      txt: 'Aymara',
      val: 'ay'
    },
    {
      txt: 'Azerbaijani',
      val: 'az'
    },
    {
      txt: 'Bambara',
      val: 'bm'
    },
    {
      txt: 'Basque',
      val: 'eu'
    },
    {
      txt: 'Belarusian',
      val: 'be'
    },
    {
      txt: 'Bengali',
      val: 'bn'
    },
    {
      txt: 'Bhojpuri',
      val: 'bho'
    },
    {
      txt: 'Bosnian',
      val: 'bs'
    },
    {
      txt: 'Bulgarian',
      val: 'bg'
    },
    {
      txt: 'Catalan',
      val: 'ca'
    },
    {
      txt: 'Cebuano',
      val: 'ceb'
    },
    {
      txt: 'Chinese',
      val: 'zh'
    },
    {
      txt: 'Chinese Traditional',
      val: 'zh-TW'
    },
    {
      txt: 'Corsican',
      val: 'co'
    },
    {
      txt: 'Croatian',
      val: 'hr'
    },
    {
      txt: 'Czech',
      val: 'cs'
    },
    {
      txt: 'Danish',
      val: 'da'
    },
    {
      txt: 'Dhivehi',
      val: 'dv'
    },
    {
      txt: 'Dogri',
      val: 'doi'
    },
    {
      txt: 'Dutch',
      val: 'nl'
    },
    {
      txt: 'Esperanto',
      val: 'eo'
    },
    {
      txt: 'Estonian',
      val: 'et'
    },
    {
      txt: 'Ewe',
      val: 'ee'
    },
    {
      txt: 'Filipino',
      val: 'fil'
    },
    {
      txt: 'Finnish',
      val: 'fi'
    },
    {
      txt: 'French',
      val: 'fr'
    },
    {
      txt: 'Frisian',
      val: 'fy'
    },
    {
      txt: 'Galician',
      val: 'gl'
    },
    {
      txt: 'Georgian',
      val: 'ka'
    },
    {
      txt: 'German',
      val: 'de'
    },
    {
      txt: 'Greek',
      val: 'el'
    },
    {
      txt: 'Guarani',
      val: 'gn'
    },
    {
      txt: 'Gujarati',
      val: 'gu'
    },
    {
      txt: 'Haitian',
      val: 'ht'
    },
    {
      txt: 'Hausa',
      val: 'ha'
    },
    {
      txt: 'Hawaiian',
      val: 'haw'
    },
    {
      txt: 'Hebrew',
      val: 'he'
    },
    {
      txt: 'Hindi',
      val: 'hi'
    },
    {
      txt: 'Hmong',
      val: 'hmn'
    },
    {
      txt: 'Hungarian',
      val: 'hu'
    },
    {
      txt: 'Icelandic',
      val: 'is'
    },
    {
      txt: 'Igbo',
      val: 'ig'
    },
    {
      txt: 'Ilocano',
      val: 'ilo'
    },
    {
      txt: 'Indonesian',
      val: 'id'
    },
    {
      txt: 'Irish',
      val: 'ga'
    },
    {
      txt: 'Italian',
      val: 'it'
    },
    {
      txt: 'Japanese',
      val: 'ja'
    },
    {
      txt: 'Javanese',
      val: 'jv'
    },
    {
      txt: 'Kannada',
      val: 'kn'
    },
    {
      txt: 'Kazakh',
      val: 'kk'
    },
    {
      txt: 'Khmer',
      val: 'km'
    },
    {
      txt: 'Kinyarwanda',
      val: 'rw'
    },
    {
      txt: 'Konkani',
      val: 'gom'
    },
    {
      txt: 'Korean',
      val: 'ko'
    },
    {
      txt: 'Krio',
      val: 'kri'
    },
    {
      txt: 'Kurdish',
      val: 'ku'
    },
    {
      txt: 'Sorani',
      val: 'ckb'
    },
    {
      txt: 'Kyrgyz',
      val: 'ky'
    },
    {
      txt: 'Lao',
      val: 'lo'
    },
    {
      txt: 'Latin',
      val: 'la'
    },
    {
      txt: 'Latvian',
      val: 'lv'
    },
    {
      txt: 'Lingala',
      val: 'ln'
    },
    {
      txt: 'Lithuanian',
      val: 'lt'
    },
    {
      txt: 'Luganda',
      val: 'lg'
    },
    {
      txt: 'Luxembourgish',
      val: 'lb'
    },
    {
      txt: 'Macedonian',
      val: 'mk'
    },
    {
      txt: 'Maithili',
      val: 'mai'
    },
    {
      txt: 'Malagasy',
      val: 'mg'
    },
    {
      txt: 'Malay',
      val: 'ms'
    },
    {
      txt: 'Malayalam',
      val: 'ml'
    },
    {
      txt: 'Maltese',
      val: 'mt'
    },
    {
      txt: 'Maori',
      val: 'mi'
    },
    {
      txt: 'Marathi',
      val: 'mr'
    },
    {
      txt: 'Meiteilon',
      val: 'mni-Mtei'
    },
    {
      txt: 'Mizo',
      val: 'lus'
    },
    {
      txt: 'Mongolian',
      val: 'mn'
    },
    {
      txt: 'Burmese',
      val: 'my'
    },
    {
      txt: 'Nepali',
      val: 'ne'
    },
    {
      txt: 'Norwegian',
      val: 'no'
    },
    {
      txt: 'Chichewa',
      val: 'ny'
    },
    {
      txt: 'Oriya',
      val: 'or'
    },
    {
      txt: 'Oromo',
      val: 'om'
    },
    {
      txt: 'Pashto',
      val: 'ps'
    },
    {
      txt: 'Persian',
      val: 'fa'
    },
    {
      txt: 'Polish',
      val: 'pl'
    },
    {
      txt: 'Portuguese',
      val: 'pt'
    },
    {
      txt: 'Punjabi',
      val: 'pa'
    },
    {
      txt: 'Quechua',
      val: 'qu'
    },
    {
      txt: 'Romanian',
      val: 'ro'
    },
    {
      txt: 'Russian',
      val: 'ru'
    },
    {
      txt: 'Samoan',
      val: 'sm'
    },
    {
      txt: 'Sanskrit',
      val: 'sa'
    },
    {
      txt: 'Scots Gaelic',
      val: 'gd'
    },
    {
      txt: 'Sepedi',
      val: 'nso'
    },
    {
      txt: 'Serbian',
      val: 'sr'
    },
    {
      txt: 'Sesotho',
      val: 'st'
    },
    {
      txt: 'Shona',
      val: 'sn'
    },
    {
      txt: 'Sindhi',
      val: 'sd'
    },
    {
      txt: 'Sinhala',
      val: 'si'
    },
    {
      txt: 'Slovak',
      val: 'sk'
    },
    {
      txt: 'Slovenian',
      val: 'sl'
    },
    {
      txt: 'Somali',
      val: 'so'
    },
    {
      txt: 'Spanish',
      val: 'es'
    },
    {
      txt: 'Sundanese',
      val: 'su'
    },
    {
      txt: 'Swahili',
      val: 'sw'
    },
    {
      txt: 'Swedish',
      val: 'sv'
    },
    {
      txt: 'Tagalog',
      val: 'tl'
    },
    {
      txt: 'Tajik',
      val: 'tg'
    },
    {
      txt: 'Tamil',
      val: 'ta'
    },
    {
      txt: 'Tatar',
      val: 'tt'
    },
    {
      txt: 'Telugu',
      val: 'te'
    },
    {
      txt: 'Thai',
      val: 'th'
    },
    {
      txt: 'Tigrinya',
      val: 'ti'
    },
    {
      txt: 'Tsonga',
      val: 'ts'
    },
    {
      txt: 'Turkish',
      val: 'tr'
    },
    {
      txt: 'Turkmen',
      val: 'tk'
    },
    {
      txt: 'Twi',
      val: 'ak'
    },
    {
      txt: 'Ukrainian',
      val: 'uk'
    },
    {
      txt: 'Urdu',
      val: 'ur'
    },
    {
      txt: 'Uyghur',
      val: 'ug'
    },
    {
      txt: 'Uzbek',
      val: 'uz'
    },
    {
      txt: 'Vietnamese',
      val: 'vi'
    },
    {
      txt: 'Welsh',
      val: 'cy'
    },
    {
      txt: 'Xhosa',
      val: 'xh'
    },
    {
      txt: 'Yiddish',
      val: 'yi'
    },
    {
      txt: 'Yoruba',
      val: 'yo'
    },
    {
      txt: 'Zulu',
      val: 'zu'
    }
  ];


  const viewportList = [
    {
      txt: 'Video Player',
      val: 'video'
    },
    {
      txt: 'Blank',
      val: 'nothing'
    },
    {
      txt: 'Transcript',
      val: 'transcript'
    },
    {
      txt: 'Plainville Talks',
      val: 'news'
    },
    {
      txt: 'Sponsors',
      val: 'sponsors'
    }

  ]

  const updateLanguage = async (val) => {

    await updateDocument(settingsId, {
      language: val
    })
  };

  const updateColor = async (color, value) => {
    var colorObj = document.colors;

    colorObj[color] = value;

    await updateDocument(settingsId, {
      colors: colorObj
    })
  };

  const updateViewport = async (val) => {

    await updateDocument(settingsId, {
      viewport: val
    })
  };


  const resetDefaults = async () => {


    await updateDocument(settingsId, {
      language: 'en',
      viewport: 'video',
      zoom: 1,
      colors: {
        one: '#a1dc6d',
        two: '#4ba6ee',
        three: '#e67556',
        four: '#eebb5b',
        five: '#f7e245',
        six: '#f7e245'
      },
      viewport: 'video'
    })
  }

  useEffect(() => {

  }, [document])


  return (

    <>
      
      <Header/>

      <div className="basic-body">
        <div className="header">
          <div className="title">
            Settings
          </div>
        </div>
        <div className="body">

          {document && (
            <> 
              <div className="line">
                <label>
                  <div className="label">
                    Language:
                  </div>
                  <select className="select" onChange={(e) => {updateLanguage(e.target.value)}}>

                    {languageList.map(lang => (
                      <Option value={lang.val} text={lang.txt} selected={document.language}/>
                    ))}
                  </select>
                </label>
              </div>

              <div className="color-line">

                <div className="label">
                  Color Scape:
                </div>

                <div className="row">
                  <ColorOption label="Lunch Specials" value={colorGrab.one} match='one' updateFn={updateColor}/>
                  <ColorOption label="Lunch Hot" value={colorGrab.two} match='two' updateFn={updateColor}/>
                  <ColorOption label="Lunch Cold" value={colorGrab.three} match='three' updateFn={updateColor}/>
                  <ColorOption label="Breakfast Specials" value={colorGrab.four} match='four' updateFn={updateColor}/>
                  <ColorOption label="Breakfast Plain" value={colorGrab.five} match='five' updateFn={updateColor}/>
                </div>

              </div>

              
              <div className="line">
                <label>
                  <div className="label">
                    Viewport:
                  </div>
                  <select className="select" onChange={(e) => {updateViewport(e.target.value)}}>

                    {viewportList.map(view => (
                      <Option value={view.val} text={view.txt} selected={document.viewport}/>
                    ))}
                  </select>
                </label>
              </div>

              <br/>
              <br/>
              <br/>
              <div onClick={resetDefaults}>Reset Values to Default</div>
            </>
          )}
         


        </div>

      </div>
    
    </>
  )
}