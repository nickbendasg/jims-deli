import './Options.css'
import Header from '../../components/global/Header'
import { Link } from 'react-router-dom';

const btnAr = [
  {
    txt: 'Page 1 - Specials',
    link: '1'
  },
  {
    txt: 'Page 2 - Specials & Lunch',
    link: '2'
  },
  {
    txt: 'Page 3 - Breakfast',
    link: '3'
  }
]

export default function Options() {
  
  return (
    <>

      <div className="optionsContainer">
        <Header/>

        <div className="body">
          <div>
            Board  
          </div>

          <div className="buttons">

            {btnAr.map(btnObj => (
              <Link to={`${btnObj.link}`} style={{textDecoration: 'none'}}>
                <div className="btn">{btnObj.txt}</div>
              </Link>
            ))}

          </div>

        </div>

      </div>

    </>
  )
}