import React from "react";
import '../css/SecondaryCard.css'

function SecondaryCard({title, description}) {
    return(
    <div className="Secondary-card">
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
    );
}

export default SecondaryCard;