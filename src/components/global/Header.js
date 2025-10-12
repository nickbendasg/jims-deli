import './Header.css'
import Vector from '../../widgets/vector/Vector';

import Avatar from './Avatar';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useDisplay } from '../../hooks/useDisplay';

export default function Header() {
  const { user } = useAuthContext();
  const { rightbar, adjustRight } = useDisplay();

  return (
    <div className="head">
      <Vector type={'chevronLeft'}/>
      <div>Jim's Grocery & Deli</div>

        <div className="head-box" onClick={() => adjustRight('max')}>
          {rightbar == null && (
            <Avatar src={user.photoURL}/>
          )}
        </div>
    </div>
  )
}