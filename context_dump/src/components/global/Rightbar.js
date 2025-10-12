=== File: src/components/global/Rightbar.js ===
=== Content ===
import './Rightbar.css';
import { useCollection } from '../../hooks/useCollection';
import Avatar from './Avatar';
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useTheme } from '../../hooks/useTheme';
// import { useGapi } from '../../hooks/useGapi';
import DropList from '../../widgets/droplist/DropList';
import OnlineUsers from './OnlineUsers';
import { useState } from 'react';
import Vector from '../../widgets/vector/Vector';
import { useDisplay } from '../../hooks/useDisplay';

export default function Rightbar({ hide }) {

  const { user } = useAuthContext();
  const { error, documents } = useCollection('users');
  const { logout, isPending } = useLogout();
  const { mode } = useTheme();
  // const { google, apiIsReady } = useGapi();
  const { rightbar, adjustRight } = useDisplay();


  const [ userTab, setUserTab ] = useState(true);
  const [ debugTab, setDebugTab ] = useState(false);
  const [ chatTab, setChatTab ] = useState(false);
  const [ notificationTab, setNotificationTab ] = useState(false);


  const displayRight = (e) => {
    e.stopPropagation();
    // console.log(e);
    if(rightbar === 'max' && userTab) {
      adjustRight('min');
    } else {
      adjustRight(null);
    };
  };

  const displayLeft = (e) => {
    e.stopPropagation();
    // console.log(e);
    adjustRight('max');
  };


  let isMe = null;
  const notMe = documents ? documents.filter(doc => {
    if(doc.id === user.uid) { isMe = doc };
    return (doc.id !== user.uid);
  }): null;
  
  const tabSeed = [
    {
      title: 'Users',
      icon: 'users',
      body: function() {
        return (
          <OnlineUsers users={notMe}/>
        );
      },
      state: function() {
        return userTab;
      },
      callback: function() {
        return setUserTab;
      }
    },
    {
      title: 'Chat',
      icon: 'chat',
      body: function() {
        return (
          <div>
            Chat Placeholder
          </div>
        );
      },
      state: function() {
        return chatTab;
      },
      callback: function() {
        return setChatTab;
      }
    },
    {
      title: 'Notifications',
      icon: 'notification',
      body: function() {
        return (
          <div>
            Notifications Placeholder
          </div>
        );
      },
      state: function() {
        return notificationTab;
      },
      callback: function() {
        return setNotificationTab;
      }
    },
    {
      title: 'Debugger',
      icon: 'bug',
      body: function() {
        return (
          <div>
            Debug Placeholder
          </div>
        );
      },
      state: function() {
        return debugTab;
      },
      callback: function() {
        return setDebugTab;
      }
    },
  ];

  const tabObject = {
    array: [],
    seed: tabSeed,
    init: function() {
      let tabO = this;
      tabO.seed.forEach(seedObj => {
        tabO.array.push({
          ...seedObj,
          activate: function() {
            tabO.deactivateAll();
            seedObj.callback()(true);
          },
          deactivate: function() {
            seedObj.callback()(false);
          }
        })
      });
    },
    getActive: function() {
      let tabO = this;
      let count;
      for(count = 0; count < tabO.array.length; count++){
        let grabTab = tabO.array[count];
        if(grabTab.state()){
          return grabTab;
        };
      };
      return false;
    },
    deactivateAll: function() {
      let tabO = this;
      let count;
      for(count = 0; count < tabO.array.length; count++) {
        let grabTab = tabO.array[count];
        grabTab.deactivate();
      };
    }
  };
  tabObject.init();
  const tabActive = tabObject.getActive();

  const meLinkList = [
    {
      title: 'My Profile',
      type: 'link',
      path: '/profile'
    },
    {
      title: 'My Compnay',
      type: 'link',
      path: '/company'
    },
    {
      title: 'Design',
      type: 'link',
      path: '/profile/design'
    },
    {
      title: 'Settings',
      type: 'link',
      path: '/profile/settings'
    },
    {
      title: 'Permissions',
      type: 'link',
      path: '/profile/permissions'
    },
    {
      title: 'Billing',
      type: 'link',
      path: '/billing'
    },
    {
      title: 'Logout',
      type: 'action',
      callback: logout
    },
  ]


  
  return (
    <>
      {(rightbar && hide !== true) && (
        <div className={`right-bar ${mode} ${rightbar}`}>
          <div className={`right-bar-top ${rightbar}`}>
            <div className="right-bar-icons">
              {tabObject.array && tabObject.array.map(tab => (
                <div 
                  key={Math.random()} 
                  onClick={tab.activate}
                  className={`icon ${tab.state() && 'active'}`}
                >
                  <Vector type={tab.icon} classText="svg" />
                </div>
              ))}
            </div>
            {rightbar === 'max' && (
              <h2>{tabActive ? tabActive.title : 'Nothing Active'}</h2>
            )}
            {error && <div className="error">{error}</div>}
          </div>
          <div className="right-bar-middle">
            {tabActive && (
              tabActive.body()
            )}
          </div>
          <div className="right-bar-bottom">
            {isMe && (
              <DropList
                list={meLinkList}
              >
                <div className={`current-user-box ${rightbar}`}>
                  {rightbar !== 'max' && (
                    <div className='icon-box' onClick={displayLeft}>
                      <Vector type="chevronLeft" />
                    </div>
                  )}
                  <div className="user-list-item">
                    <Avatar src={user.photoURL} />  
                    {(rightbar != 'min' &&
                      <>
                      <span>{user.displayName}</span>
                      </>
                    )}
                  </div>
                  <div className='icon-box' onClick={displayRight}>
                    <Vector type="chevronRight" />
                  </div>
                </div>
              </DropList>
            )}
          </div>
        </div>
      )}
    </>
  );
};
=== End of src/components/global/Rightbar.js ===

