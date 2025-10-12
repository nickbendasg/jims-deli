import './OnlineUsers.css';
import Avatar from './Avatar';
import { useTheme } from '../../hooks/useTheme';
import { useDisplay } from '../../hooks/useDisplay';

export default function OnlineUsers({ users }) {

  const { mode } = useTheme();
  const { rightbar, adjustRight } = useDisplay();

  
  return (
    <>
      {users && users.map(user => (
        <div 
          key={user.id} 
          className="user-list-item" 
          style={ user.online ? {order: 1} : {order: 2}}
        >
          <Avatar src={user.photoURL} />
          {rightbar === 'max' && (
            <>
              <span>{user.displayName}</span>
              {user.online && <span className="online-user"></span>}
            </>
          )}
        </div>
      ))}
    </>
  );
};

// My Profile, ?My Company, Design, Settings, Permissions, Billing, Logout