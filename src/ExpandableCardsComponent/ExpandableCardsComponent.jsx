import React, { useState } from "react";
import ExpandableCard from "./ExpandableCard/ExpandableCard.jsx";

import './ExpandableCardComponents.scss';

function ExpandableCardsComponent(props) {
  const [data, setData] = useState(props.data);

  const changeActive = (id) => {
    const newState = [...data];
    newState.map((item) => {
      item.active = item.id === id ? !item.active : false
    })
    setData(newState);
  };

  return (
    <div className="cards_container">
      { data.map((card) => (
          <ExpandableCard 
            key={card.id}
            data={card}
            changeActive={changeActive}
          />
        ))
      }
    </div>
  )
}

export default ExpandableCardsComponent;