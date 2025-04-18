import React, { useState } from "react";

const DestinationSelector = ({ tours, selected, onChange }) => {
    const tours = [...new Set(tours.map((tour) => tour.name))]; // Extract unique tour names
    const options = ["All Destinations", ...tours]; // Add "All Destinations" option
   
    const handleChange = (event) => {
        const newDestination = event.target.value;
        setSelectedDestination(newDestination);
        onChange(newDestination); // Pass the selected destination up to App.jsx
    };

    // Extract unique tour names
    const uniqueTours = [...new Set(tours.map((tour) => tour.name))];
    return (
        <div>
            <label htmlFor="destination-select">Select a Destination:</label>
            <select
                id="destination-select"
                value={selectedDestination}
                onChange={handleChange}
            >
                <option value="All Destinations">
                    -- Choose a destination --
                </option>
                {uniqueTours.map((tour) => (
                    <option key={tour} value={tour}>
                        {tour}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DestinationSelector;