import React from "react";
import "./style.css";

function Cards(props) {
    return (

        <div className="card" onClick={() => props.hasBeenClicked(props.id)}>
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong id={props.id}>Name:</strong> {props.name}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Cards;