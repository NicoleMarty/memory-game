import React from 'react';
import logo from '../logo.svg';
import '../style/main.css';

function main() {
    function flipCard(button) {
        button.preventDefault();
        console.log("the image was clicked");
    }
    return (
        <div className="container">
            <button className="flipButton" onClick={flipCard}>
                <div className="card">
                    <img className="logo" src={logo} alt="react-logo"></img>
                </div>

                Flip It!
</button>
        </div>
    )
}

export default main;