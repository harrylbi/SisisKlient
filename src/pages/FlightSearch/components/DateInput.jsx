// DateInput.js
import React from 'react';

const DateInput = ({ label, name, onChange, value }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <input
      type="date"
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

export default DateInput;