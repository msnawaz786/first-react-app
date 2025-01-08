
import './App.css'
import React, { useState } from 'react';

function Counter() {
  // State to hold the counter value
  const [count, setCount] = useState(0);

  // Function to handle increment
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Function to handle decrement
  const handleDecrement = () => {
    if (count > 0) setCount(count - 1); // Optional: Prevent negative values
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Counter: {count}</h1>
      <div className="space-x-4">
        <button
          onClick={handleIncrement}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Value
        </button>
        <button
          onClick={handleDecrement}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Remove Value
        </button>
      </div>
    </div>
  );
}

export default Counter;
