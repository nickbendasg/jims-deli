=== File: src/pages/board/Board.js ===
=== Content ===
import { useParams, Link } from "react-router-dom";
import { useDocument } from '../../hooks/useDocument';
import { useEffect } from "react";
import Options from './Options';
import BoardOne from './BoardOne';
import BoardTwo from './BoardTwo';
import BoardThree from './BoardThree';
import './Board.css';
import Translate from '../../components/tools/Translate';

export default function Board() {

  const { type } = useParams();
  const totalBoards = 3;

  const { error, document } = useDocument('settings', 'qfQUtxyc9hkKInsoUUZ3');

  console.log('doc', document);


  const abstractFn = (text) => {

    if(document.language != 'en') {
      text = <Translate text={text} language={document.language}/>
    };

    return text;
  };

  useEffect(() => {
    console.log('effect board.js', document)
  }, [document]);


  if(error) {
    return <div>{error}</div>
  } else if (!document) {
    return <div>fetching</div>
  };



  return (
    
    <div className="board_box">
      {type === undefined && (
        <Options/>
      )}
      {type !== undefined && (
        <>
          {type > 1 && 
            <Link to={`/board/${(type - 1)}`}>
              <div className="leftBar hiddenBar">

              </div>
            </Link>
          }

          <Link to={'/board'}>
            <div className="topBar hiddenBar">

            </div>
          </Link>
          {type < totalBoards && 
            <Link to={`/board/${(Number(type) + 1)}`}>
              <div className="rightBar hiddenBar">

              </div>
            </Link>
          }

          {type === '1' && (
            <BoardOne abstractFn={abstractFn} document={document}/>
          )}
          {type === '2' && (
            <BoardTwo abstractFn={abstractFn} document={document}/>
          )}
          {type === '3' && (
            <BoardThree abstractFn={abstractFn} document={document}/>
          )}
        </>
      )}
    </div>
  )
}
=== End of src/pages/board/Board.js ===

