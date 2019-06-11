import React from 'react';
import './StarWars.css';

import Character from './Character';

const CharacterList = props => {
  return (
    <div className='container'>
      {props.swItem.map(item => 
      <Character 
        swItem={item} 
        key={item.name}
      />)}
    </div>
  );
}; 




export default CharacterList;