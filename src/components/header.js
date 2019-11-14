import React from 'react';
import logo from '../logo.svg';
import '../style/header.css';

function header() {
    return (
        <div className="row">
            <div className="header col s12 m12 l12">
                <div className="container">
                    <h1>Musical Memory Game</h1>
                    <p className="lead">Click on any card to start.</p>
                </div>
            </div>
        </div>

    );
}

export default header;