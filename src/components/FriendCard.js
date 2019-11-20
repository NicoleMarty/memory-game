import React from "react";

import "../style/friendcard.css";

function FriendCard(props) {

  return (
    <button className="chooseFriend" onClick={() => props.chooseFriend(props.id)}>
      <div className="card">
        <div className="img-container">
          <img className="friendImage"
            alt={props.name} 
            src={props.image} 
          />
        </div>
      </div>
    </button>  
  );
}

export default FriendCard;

