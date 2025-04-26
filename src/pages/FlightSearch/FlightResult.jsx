import React from 'react';
import dummyData from '../../utils/dummyData';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

const FlightResult = () => {
  const handleBookFlight = (flight) => {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <svg className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                Pesanan Berhasil!
              </p>
              <div className="mt-1 text-sm text-gray-500">
                <p><span className="font-semibold">Maskapai:</span> {flight.airline}</p>
                <p><span className="font-semibold">Rute:</span> {flight.from} → {flight.to}</p>
                <p><span className="font-semibold">Waktu:</span> {flight.departureTime} - {flight.arrivalTime}</p>
                <p><span className="font-semibold">Harga:</span> Rp{flight.price.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Tutup
          </button>
        </div>
      </div>
    ), {
      duration: 5000,
      position: 'top-center',
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <Toaster />
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Hasil Pencarian
      </h1>
      <ul>
        {dummyData.map((flight) => (
          <li
            key={flight.id}
            className="mb-4 p-4 bg-gray-100 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
          >
            <div className="flex-1">
              <p className="font-medium">{flight.airline}</p>
              <p className="text-sm">{flight.from} → {flight.to}</p>
              <p className="text-sm">{flight.departureTime} - {flight.arrivalTime}</p>
              <p className="text-blue-600 font-semibold mt-1">
                Rp{flight.price.toLocaleString()}
              </p>
            </div>
            <button
              onClick={() => handleBookFlight(flight)}
              className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Pesan
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightResult;