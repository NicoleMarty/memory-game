import React from "react";
import "../style/score.css";

function Score(props) {

  return  (
      <div>
        <div className="row">
            <div className="col s4 m4 l4">
                <h5 className="title">Clicky Game</h5>
            </div>
            <div className="col s4 m4 l4">
                <h5 className="status">props.something</h5>
            </div>
            <div className="col s2 m2 l2">
                <h5 className="current-score">Score:__</h5>
            </div>
            <div className="col s2 m2 l2">
                <h5 className="top-score">Top Score:__</h5>
            </div>
        </div>
        <div className="score-container">{props.children}</div>;
      </div>
  ) 
}

export default Score;