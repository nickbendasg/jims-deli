import './Video.css';
import { useEffect } from 'react';


export default function Video() {

  const videoList = {
    donaldDuck: '5iaCJbN9KYw',
    rossCreations: 'mbQ9oQnrTZ0',
    popeye: '60sMbE5jkLk',
    popeye2: 'nSdz5ln2rME',
    roadrunner: 'Aewj-0wcMIo',
    planetEarth: 'videoseries?list=PLsBNmu8bJ-2tHYm30d-5TyjD0ja930ZRn',
    nature: 'videoseries?list=PLsBNmu8bJ-2uuJuOhSCjo-HEgI-Q5ACYV',
    test: 'playlist?list=PLsBNmu8bJ-2tBpe3VgFdOlsE2JCcRlwoc'
  }

  const frameSize = {
    width: 853,
    height: 480,
    multiplier: 1.2,
    getWidth: function() {
      var get = String(this.width * this.multiplier);
      return get;
    },
    getHeight: function() {
      var get = String(this.height * this.multiplier);
      return get;
    }
  }

  const embedId = videoList.popeye;

  const src = `https://www.youtube.com/embed/${embedId}?cc_load_policy=1&cc_lang_pref=en&autoplay=1&mute=1&enablejsapi=1?autoplay=1&mute=1&enablejsapi=1`;
  var src2 = `https://www.youtube.com/embed/${embedId}?playlist=${videoList.donaldDuck},${videoList.rossCreations}?cc_load_policy=1&cc_lang_pref=en&autoplay=1&mute=1&enablejsapi=1?autoplay=1&mute=1&enablejsapi=1&autoplay=1`;
  // src2 = `https://www.youtube.com/embed/V?listType=playlist&list=PLsBNmu8bJ-2tBpe3VgFdOlsE2JCcRlwoc?cc_load_policy=1&cc_lang_pref=en&autoplay=1&mute=1&enablejsapi=1?autoplay=1&mute=1&enablejsapi=1`;
  src2 = 'https://www.youtube.com/embed/videoseries?list=PLsBNmu8bJ-2v5skomtQVgmet8qFNXUAh3&loop=1?cc_load_policy=1&cc_lang_pref=en&autoplay=1&mute=1&enablejsapi=1?autoplay=1&mute=1&enablejsapi=1';
  useEffect(() => {

  }, []);


  return(
    <iframe
      width={frameSize.getWidth()}
      height={frameSize.getHeight()}
      src={src2}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  )
}