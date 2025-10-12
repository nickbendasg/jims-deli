=== File: src/pages/dashboard/Dashboard.js ===
=== Content ===
import './Dashboard.css'
import Header from '../../components/global/Header';
import { Link } from 'react-router-dom';
import Vector from '../../widgets/vector/Vector';

const buttons = [
  {
    txt: 'Home',
    svg: 'home',
    link: '/'
  },
  {
    txt: 'Menu',
    svg: 'silverware',
    link: '/board'
  },
  {
    txt: 'Old Menu',
    svg: 'paperbag',
    link: '/menu'
  },
  {
    txt: 'Printer',
    svg: 'printer',
    link: '/printingpress'
  },
  {
    txt: 'Settings',
    svg: 'settings',
    link: '/settings'
  },
  {
    txt: 'Account',
    svg: 'user',
    link: '/account'
  }
];

export default function Dashboard() {

  return (
    <>
      <Header/>
      <div className="dash">
        <div className="title">
          Dashboard
        </div>
        <div className="board">
          {buttons.map(btn => (
            <Link to={btn.link} style={{textDecoration: 'none'}}>
              <div className="box">
                <div className='btn'>
                  <Vector type={btn.svg} classText={'svg'}/>
                </div>
                <div className='words'>
                  {btn.txt}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
=== End of src/pages/dashboard/Dashboard.js ===

