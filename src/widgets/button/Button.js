import './Button.css';
// import AddIcon from '../../assets/icons/add.svg';
import Vector from '../vector/Vector';

export default function Button({ name, icon, onClick}) {

  return (
    <div className="btnContainer">
      <div className="btnBox" onClick={onClick}>
        <Vector type={icon}/>
      </div>
    </div>
  )
};