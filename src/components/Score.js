import React from "react";
import "../style/score.css";

function Score(props) {

  return  (
      <div>
            <div className="title">
      Clicky Game
      </div>     
  <div className="score">{props.children}</div>;
      </div>
  ) 
}

export default Score;