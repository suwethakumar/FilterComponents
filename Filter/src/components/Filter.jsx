// src/components/Filter.jsx
import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');
  const [dateRange, setDateRange] = useState([null, null]);

  const handleFilter = () => {
    const filters = {
      text,
      category,
      dateRange
    };
    onFilter(filters); // Pass filters to parent component or API call
  };

  return (
    <div className="filter-container">
      <h2>Filter Items</h2>
      <div className="filter-group">
        <label htmlFor="text">Search:</label>
        <input
          id="text"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search by name"
        />
      </div>
      <div className="filter-group">
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="home">Home</option>
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="date-range">Date Range:</label>
        <div className="date-range-picker">
          <input
            id="date-range-start"
            type="date"
            value={dateRange[0] || ''}
            onChange={(e) => setDateRange([e.target.value, dateRange[1]])}
          />
          <span>to</span>
          <input
            id="date-range-end"
            type="date"
            value={dateRange[1] || ''}
            onChange={(e) => setDateRange([dateRange[0], e.target.value])}
          />
        </div>
      </div>
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

export default Filter;
