import React from 'react';
import '../style/header.css';

function Header() {
    return (
        <div className="row">
            <div className="header col s12 m12 l12">
                    <h1>Memory Game</h1>
                    <p className="lead">Click on any card to start.</p>
                </div>
            </div>
    )
}

export default Header;