import React from "react";
import "../style/friendcard.css";

function FriendCard(props) {

  return (
    <div className="chooseFriend" onClick={() => props.chooseFriend(props.id)}>
      <div className="card">
        <div className="card-image">
          <img className="friendImage"
            alt={props.name} 
            src={props.image} 
          />
        </div>
      </div>
    </div>  
  );
}

export default FriendCard;

