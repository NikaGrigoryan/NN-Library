import React from 'react';

import './style.css';


const Avatar = ({ imageUrl, name, size = "small"}) => {
  return (<div className ={`Avatar-container Avatar-container--${size}`} >
      {imageUrl && < img className = "Avatar-image" alt = "avatar" src = {imageUrl}/>}
      {imageUrl === undefined && name !== "" &&
       <div className="Avatar-name">
         {name.substring(0,2)}
      </div>}
    </div>)
}

export default Avatar;