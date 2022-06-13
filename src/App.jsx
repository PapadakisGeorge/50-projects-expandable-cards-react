import React from 'react';
import ExpandableCardsComponent from './ExpandableCardsComponent/ExpandableCardsComponent';
import {
  data
} from './constants/data';

const App = () => {
  

  return ( 
    <ExpandableCardsComponent 
      data={data}/>
    );
}

export default App;