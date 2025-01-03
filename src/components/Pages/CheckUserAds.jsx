import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const CheckUserAds = () => {
  const [bikes, setBikes] = useState([
    {
      id: 1,
      name: 'Yamaha R15',
      price: '350,000 PKR',
      condition: 'New',
      running: '200 KM',
      image: 'https://via.placeholder.com/150', 
    },
    {
      id: 2,
      name: 'Honda CG125',
      price: '180,000 PKR',
      condition: 'Old',
      running: '5,000 KM',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Suzuki GS150',
      price: '250,000 PKR',
      condition: 'Old',
      running: '1,500 KM',
      image: 'https://via.placeholder.com/150',
    },
    {
        id: 4,
        name: 'Suzuki GS150',
        price: '250,000 PKR',
        condition: 'Old',
        running: '1,500 KM',
        image: 'https://via.placeholder.com/150',
      },
  ]);

  // Delete bike handler
  const handleDelete = (id) => {
    const filteredBikes = bikes.filter((bike) => bike.id !== id);
    setBikes(filteredBikes);
  };

  // Update bike handler
  const handleUpdate = (id) => {
    alert(`Update feature for bike ID ${id} is under development!`);
  };

  return (
    <div className="mx-20 mx-auto mt-24 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl mb-10 font-bold text-center text-gray-800 mb-6">
        Your Uploaded Bikes
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {bikes.map((bike) => (
          <div
            key={bike.id}
            className="bg-gray-100 shadow-md rounded-lg p-4 flex flex-col justify-between"
          >
            <img
              src={bike.image}
              alt={bike.name}
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {bike.name}
            </h2>
            <p className="text-gray-600 mb-1">
              <span className="font-semibold">Price:</span> {bike.price}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-semibold">Condition:</span> {bike.condition}
            </p>
            <p className="text-gray-600 mb-3">
              <span className="font-semibold">Running:</span> {bike.running}
            </p>
            <div className="flex justify-between items-center">
              <button
                className="text-blue-500 hover:text-blue-700"
                onClick={() => handleUpdate(bike.id)}
              >
                <FaEdit className="inline mr-1" /> Update
              </button>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDelete(bike.id)}
              >
                <FaTrash className="inline mr-1" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckUserAds;
