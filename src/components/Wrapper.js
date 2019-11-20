import React from "react";
import Header from "./Header";
import "../style/wrapper.css";


function Wrapper(props) {
    
  return (
      <div>
      <Header />
      <div className="wrapper">{props.children}</div>;
      </div>
  ) 
}

export default Wrapper;
