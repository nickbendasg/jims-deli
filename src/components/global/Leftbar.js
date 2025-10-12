import './Leftbar.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import DashboardIcon from '../../assets/svg/dashboard_icon.svg';
import AddIcon from '../../assets/svg/add_icon.svg';
import Avatar from './Avatar';
import { useAuthContext } from '../../hooks/useAuthContext';
// import ThemeSelector from '../ThemeSelector';
import { useTheme } from '../../hooks/useTheme';
import Vector from '../../widgets/vector/Vector';
import { useDisplay } from '../../hooks/useDisplay';
import ThemeSelector from './ThemeSelector';

export default function Leftbar({ hide }) { 

  const { user } = useAuthContext();
  const { color } = useTheme();

  const { leftbar, adjustLeft } = useDisplay();

  const cssClass = leftbar ? 'max' : 'min';


  const toggleLeft = () => {
    adjustLeft(!leftbar);
  };

  const linkAr = [
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

  return (

    <>
      {hide !== true && (
        <div className={`leftbar ${cssClass}`} style={{ background: color }}>
          <div className={`leftbar-content`}>
            <div className="leftBtn" onClick={toggleLeft}>

            </div>
            <div className="user">
            </div>
            <nav className="links">
              <ul>
                {linkAr && linkAr.map(linkObj => (
                  <li key={Math.random()}>
                    <NavLink to={linkObj.link}> 
                      <div className='iconBox'>
                        <Vector type={linkObj.svg}/>
                      </div>
                      {leftbar && <span>{linkObj.txt}</span>}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {String(leftbar)}

          {leftbar && <ThemeSelector />}
        </div>
      )}
    </>
  );
};