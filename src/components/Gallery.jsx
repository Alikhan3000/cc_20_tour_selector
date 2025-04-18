import React from "react";
import Tour from "./Tour"; // Import the Tour component

const Gallery = ({ tours, selectedDestination, setTours, loading, error }) => {
    const filteredTours = selectedDestination === "All Destinations"
        ? tours // If "All Destinations" is selected, show all tours
        : tours.filter((tour) => tour.name === selectedDestination); // Filter tours based on the selected destination

    // Not interested option:
    const handleNotInterested = (id) => {
        const updatedTours = tours.filter((tour) => tour.id !== id); // Filter out the tour with the given ID
        setTours(updatedTours); // Update the tours state with the filtered tours
    };

    // Logic to reload the tours
    const handleReloadTours = () => {
        window.location.reload(); // Reload the page to reset the tours
    };

    if (loading) {
        return <div>Loading...</div>; // Show loading message while data is being fetched
    }

    if (error) {
        return <div>Error: {error}</div>; // Show error message if there was an error fetching data
    }

    if (filteredTours.length === 0) {
        return (
            <div>
                <p>No tours available for this destination.</p>
                <button onClick={handleReloadTours}>Reload Tours</button> {/* Button to reload tours */}
            </div>
        );
    }

    return (
        <div className="gallery">
            {filteredTours.map((tour) => (
                <Tour
                    key={tour.id}
                    tour={tour} // Pass the individual tour object to the Tour component
                    onNotInterested={handleNotInterested} // Pass the function to handle "Not Interested" action
                />
            ))}
            <button onClick={handleReloadTours}>Reload Tours</button> {/* Button to reload tours */}
        </div>
    );
};

export default Gallery;