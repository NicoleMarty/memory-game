import React from "react";
import "../style/friendcard.css";

function FriendCard(props) {

  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Address:</strong> {props.location}
          </li>
        </ul>
      </div>
            <span onClick={() => props.chooseFriend(props.id)} className="chooseFriend">
        REMOVE
      </span>

    </div>
  );
}

export default FriendCard;

