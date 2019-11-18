import React from "react";

import List from './List';

const pictures = [
    {
        id: 1,
        image: '../wheres-waldo.jpg',
        isClicked: false
    },
    {
        id: 2,
        image: '../waldo-lollapalooza.png',
        isClicked: false

    },
    {
        id: 3,
        image: 'waldo-factory.jpg',
        isClicked: false
    },
    {
        id: 4,
        image: '../waldo-majorlazer',
        isClicked: false
    }];

function Images() {
    return <List pictures={pictures} />;
}

export default Images;