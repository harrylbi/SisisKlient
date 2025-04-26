import React, { useState } from 'react';
import CityInput from './components/CityInput';
import DateInput from './components/DateInput';
import PassengerSelector from './components/PassengerSelector';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const FlightSearch = () => {
  const [form, setForm] = useState({
    origin: '',
    destination: '',
    date: '',
    passengers: 1,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: name === 'passengers' ? parseInt(value) : value
    }));
  };

  const handleSubmit = () => {
    if (!form.origin || !form.destination) {
      toast.error('Asal dan tujuan harus diisi!');
      return;
    }
    navigate('/hasil');
  };

  const cities = ['Jakarta', 'Bali', 'Surabaya', 'Yogyakarta'];

  return (
    <div className="p-8 max-w-md mx-auto bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Pencarian Penerbangan</h1>
      <CityInput
        label="Asal"
        name="origin"
        options={cities}
        value={form.origin}
        onChange={handleChange}
      />
      <CityInput
        label="Tujuan"
        name="destination"
        options={cities}
        value={form.destination}
        onChange={handleChange}
      />
      <DateInput
        label="Tanggal Keberangkatan"
        name="date"
        value={form.date}
        onChange={handleChange}
      />
      <PassengerSelector
        name="passengers"
        value={form.passengers}
        onChange={handleChange}
      />
      
      <button
        onClick={handleSubmit}
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Cari Penerbangan
      </button>
    </div>
  );
};
export default FlightSearch;