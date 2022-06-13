import React from "react";
import './ExpandableCard.scss';

function ExpandableCard(props) {
  
  return (
     <div 
      className={props.data.active? 'card_active' : 'card'} 
      style={{ backgroundImage: `url(${props.data.imageURL})`}}
      onClick={() => props.changeActive(props.data.id)}>
        <h3> {props.data.title} </h3> 
    </div>  
    )
    }

export default ExpandableCard;