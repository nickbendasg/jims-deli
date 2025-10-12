import './Viewport.css';

import Video from '../views/Video';
import News from '../views/News';


export default function Viewport({ document }) {



  return(
    <>
      {document.viewport != 'nothing' && (

        <div className='viewport-container'>

        <div className='viewport'>
          {document.viewport == 'video' && (
            <Video />
          )}
          {document.viewport == 'news' && (
            <News junk={'junk'}/>
          )}
          {document.viewport == 'sponsors' && (
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', height: '40%'}}>
              <div style={{fontSize: '55px'}}>D'Amico Construction Co.</div>
              <div style={{fontSize: '35px'}}>Commercial Paving & Sitework</div>
              <br/>
              <div style={{fontSize: '18px'}}>Supporting Local Business</div>
            </div>
          )}
        </div>
      </div>
      )}
    </>
  )
}