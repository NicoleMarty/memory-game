import React from 'react';
import logo from '../logo.svg';
import '../style/main.css';

const memoryCard =

    <div className="col s12 m6 l3">
        <div className="card">
            <div className="card-image">
                <img src={logo}></img>
            </div>
        </div>
    </div>



function main() {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 m6 l3">
                    {memoryCard}
                </div>
                <div className="col s12 m6 l3">
                    {memoryCard}
                </div>
                <div className="col s12 m6 l3">
                    {memoryCard}
                </div>
                <div className="col s12 m6 l3">
                    {memoryCard}
                </div>
            </div>
            <div className="row">
                <div className="col s12 m6 l3">
                    {memoryCard}
                </div>
                <div className="col s12 m6 l3">
                    {memoryCard}
                </div>
                <div className="col s12 m6 l3">
                    {memoryCard}
                </div>
                <div className="col s12 m6 l3">
                    {memoryCard}
                </div>
            </div>
            <div className="row">
                <div className="col s12 m6 l3">
                    {memoryCard}
                </div>
                <div className="col s12 m6 l3">
                    {memoryCard}
                </div>
                <div className="col s12 m6 l3">
                    {memoryCard}
                </div>
                <div className="col s12 m6 l3">
                    {memoryCard}
                </div>
            </div>
            <div className="row">
                <div className="col s12 m6 l3">
                    {memoryCard}
                </div>
                <div className="col s12 m6 l3">
                    {memoryCard}
                </div>
                <div className="col s12 m6 l3">
                    {memoryCard}
                </div>
                <div className="col s12 m6 l3">
                    {memoryCard}
                </div>
            </div>
        </div>
    );
}

export default main;