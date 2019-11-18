import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function List(props) {
    // Using the filter method, we can create a new array containing only images which haven't been purchased
    const notClicked = props.pictures.filter(pictures => !pictures.clicked);

    return (
        <ul className="list-group">
            {notClicked.map(pictures => (
                <li className="list-group-item" key={pictures.id}>
                   <img src={pictures.image}alt={pictures.id}></img>
                </li>
            ))}
        </ul>
    );
}

export default List;
