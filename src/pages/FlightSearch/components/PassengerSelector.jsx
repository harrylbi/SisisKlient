// PassengerSelector.js
import React from 'react';

const PassengerSelector = ({ min = 1, max = 9, name, onChange, value }) => {
  const handleChange = (e) => {
    const val = Math.max(min, Math.min(max, parseInt(e.target.value) || min));
    onChange({
      ...e,
      target: {
        ...e.target,
        value: val
      }
    });
  };

  const increment = () => {
    if (value < max) {
      onChange({
        target: {
          name,
          value: value + 1
        }
      });
    }
  };

  const decrement = () => {
    if (value > min) {
      onChange({
        target: {
          name,
          value: value - 1
        }
      });
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Jumlah Penumpang
      </label>
      <div className="flex items-center">
        <button
          type="button"
          onClick={decrement}
          disabled={value <= min}
          className="p-2 bg-gray-200 rounded-l-lg disabled:opacity-50"
        >
          -
        </button>
        <input
          type="number"
          name={name}
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
          className="w-full p-2 border-t border-b border-gray-300 text-center"
        />
        <button
          type="button"
          onClick={increment}
          disabled={value >= max}
          className="p-2 bg-gray-200 rounded-r-lg disabled:opacity-50"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default PassengerSelector;