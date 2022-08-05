import React from 'react';
import './activityItem.css';

function Item({activity, children}) {
    return (
    <div className="item"> 
      {children}
      <div className="card-bottom">
        <p>{activity}</p>
      </div> 
    </div> 
    )
}

export default Item