import React from "react";
import "../style/wrapper.css";


function Wrapper(props) {
    
  return (
      <div>
        <div className="row title-row">
            <h1 className="title">Mean Girl Memory Game</h1>
            <h5 className="directions">Careful not to click any more than once or you'll lose your chance to make them all your minions.</h5>
            <p className="lead">(So fetch.)</p>
           
        </div>
        <div class="container">
          <div className="wrapper">{props.children}
            </div>;
          </div>
      </div>
  ) 
}

export default Wrapper;
