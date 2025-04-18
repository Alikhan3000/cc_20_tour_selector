import React from "react";

const DestinationSelector = ({ tours, selected, onChange }) => {
    const optionsTours = [...new Set(tours.map((tour) => tour.name))]; // Extract unique tour names
    const options = ["All Destinations", ...optionsTours]; // Add "All Destinations" option
   
    const handleChange = (event) => {
        const selectedValue = event.target.value; // Get the selected value from the dropdown
        onChange(selectedValue); // Update the selected destination in the parent component
    }
   
    return (
        <div>
            <label htmlFor="destination-select">Select a Destination:</label>
            <select
                id="destination-select"
                value={selected}
                onChange={handleChange}
            >
                <option value="All Destinations">
                    -- Choose a destination --
                </option>
                {options.map((tour) => (
                    <option key={tour} value={tour}>
                        {tour}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DestinationSelector;