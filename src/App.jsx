import React, { useState, useEffect } from 'react';
import Gallery from './components/Gallery'; // Import the Gallery component
import DestinationSelector from './components/DestinationSelector'; // Import the DestinationSelector component
// App Component
const App = () => {
  const [tours, setTours] = useState([]); // State to store tour data
  const [loading, setLoading] = useState(true); // Tracks whether data is being loaded
  const [error, setError] = useState(null); // Stores any error messages from the API
  const [filter, setFilter] = useState(''); // Stores the filter input for searching tours

  useEffect(() => {
    // Fetches tour data from the API, handles loading state, and manages errors
    const fetchTours = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://course-api.com/react-tours-project');
        if (!response.ok) throw new Error('Failed to fetch tours');
        const data = await response.json();
        setTours(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  const filteredTours = tours.filter((tour) =>
    tour.name.toLowerCase().includes(filter.toLowerCase()) // Filters tours based on the search input
  );

  return (
    <div className="App">
      <h1>Tours</h1>
      <DestinationSelector
        tours={tours} // Passes tour data to the DestinationSelector component
        selected={selectedDestination} // Passes the currently selected destination
        onCharge={setSelectedDestination} // Updates the selected destination
      />
      <Gallery
        tours={tours} // Passes tour data to the Gallery component
        selectedDestination={selectedDestination} // Passes the selected destination
        setTours={setTours} // Allows the Gallery component to update the tours
        loading={loading} // Passes the loading state
        error={error} // Passes any error messages
      />
    </div>
  );
};
export default Gallery;