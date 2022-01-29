import {useState} from "react";

import "./style.css";

function DropdownComponent ({ value, onSelected, backgroundColor, size = "large", options = [] }) {
  const  [isActive, setIsActive]= useState(false);

  const handleIsActive = () => {
    setIsActive(!isActive);
  };

  const handleSelect = (option) => () => {
    onSelected(option) 
    setIsActive(false)
  };
 
  return (
    <div className={['dropdown', `dropdown--${size}`].join(' ')}>
      <div className="dropdown-btn" style={backgroundColor && {backgroundColor: backgroundColor}} onClick = {handleIsActive}>
        {value}
        <span className="fas fa-caret-down"></span>
      </div>
      
      {isActive && (
        <div className="dropdown-content" style={backgroundColor && {backgroundColor: backgroundColor}}>
          {options.map((option) =>(
            <div key={option} onClick = {handleSelect(option)} className="dropdown-item">
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}



export default DropdownComponent