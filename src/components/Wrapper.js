import React from "react";
import "../style/wrapper.css";


function Wrapper(props) {
    
  return (
      <div>
        <div className="jumbotron">
            <h1 className="title">Memory Game</h1>
        </div>
        <div className="wrapper">{props.children}
        </div>;
      </div>
  ) 
}

export default Wrapper;
