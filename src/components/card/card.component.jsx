import React from 'react';

import './card.styles.css';

export const Card = ({beast}) => {
    return (
    <div className="card-container">
        <img src={`https://robohash.org/${beast.id}?set=set2&size=200x200`} alt=""/>
        <h2>
        {beast.name}
        </h2>
        <p>{beast.email}</p>
    </div>
    )
}