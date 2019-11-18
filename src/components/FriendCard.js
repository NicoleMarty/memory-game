import React from "react";
import "../style/friendcard.css";

function FriendCard(props) {

  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
            <span onClick={() => props.chooseFriend(props.id)} className="chooseFriend">
        X
      </span>
    </div>
  );
}

export default FriendCard;

