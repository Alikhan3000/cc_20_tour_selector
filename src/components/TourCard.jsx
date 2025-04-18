import React from "react";
// Importing React library to use JSX and React components
const TourCard = ({id, name, image, info, price, onNotInterested}) => {

    return (
        <div className="tour-card" key={id}>
            <img src={image} alt={name} className="tour-image" />
            <h2>{name}</h2>
            <p>{info}</p>
            <p className="tour-price">${price}</p>
            <button onClick={() => onNotInterested(id)}>Not Interested</button>
        </div>
    );
}
export default TourCard;