// src/App.jsx
import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import './App.css';

// Example mock data for demonstration purposes
const fetchItems = async (filters) => {
  // Simulate an API call with filters
  const mockData = [
    { id: 1, name: 'Laptop', category: 'electronics', date: '2023-01-01' },
    { id: 2, name: 'Shirt', category: 'fashion', date: '2023-02-15' },
    { id: 3, name: 'Blender', category: 'home', date: '2023-03-30' },
  ];

  const { text, category, dateRange } = filters;
  const [startDate, endDate] = dateRange;

  return mockData.filter(item => {
    const matchesText = item.name.toLowerCase().includes(text.toLowerCase());
    const matchesCategory = !category || item.category === category;
    const matchesDate =
      (!startDate || new Date(item.date) >= new Date(startDate)) &&
      (!endDate || new Date(item.date) <= new Date(endDate));

    return matchesText && matchesCategory && matchesDate;
  });
};

function App() {
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    // Initialize with default filters
    fetchItems({ text: '', category: '', dateRange: [null, null] }).then(setFilteredItems);
  }, []);

  const handleFilter = async (filters) => {
    const items = await fetchItems(filters);
    setFilteredItems(items);
  };

  return (
    <div className="App">
      <Filter onFilter={handleFilter} />
      <div className="items-container">
        <h2>Filtered Items</h2>
        <ul>
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <li key={item.id}>{item.name} - {item.category} - {item.date}</li>
            ))
          ) : (
            <li>No items found</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
