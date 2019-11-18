import React from "react";
import "../style/wrapper.css";
import Header from "./Header";


function Wrapper(props) {
    
  return (
      <div>
      <Header />
      <div className="wrapper">{props.children}</div>;
      </div>
  ) 
}

export default Wrapper;
