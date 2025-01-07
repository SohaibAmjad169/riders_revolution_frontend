import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import SDK from '../../config';
import Spinner from '../loader/Spinner';

// Modal component to handle bike updates
const UpdateBikeModal = ({ isOpen, onClose, bike, onUpdate }) => {
  // Initialize updatedBike state only when the bike prop is provided.
  const [updatedBike, setUpdatedBike] = useState({
    name: bike?.name || '',
    price: bike?.price || '',
    rating: bike?.rating || '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Ensure that the state updates when the bike changes (e.g., when a bike is selected for editing).
  useEffect(() => {
    if (bike) {
      setUpdatedBike({
        name: bike.name,
        price: bike.price,
        rating: bike.rating,
      });
    }
  }, [bike]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBike((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await axios.put(`${SDK.BASE_URL}/Bike/UpdateABike`, {
        ID: bike._id,
        bikeData: updatedBike,
      });
      onUpdate(response.data.bike); // Pass updated bike data back to the parent
      onClose(); // Close the modal
    } catch (err) {
      setError(err.response?.data?.error || "Failed to update the bike.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen || !bike) return null; // Don't render if modal is closed or bike is null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg">
        <h2 className="text-2xl mb-4">Update Bike</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={updatedBike.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={updatedBike.price}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Rating (0-5)</label>
            <input
              type="number"
              name="rating"
              value={updatedBike.rating}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              min="0"
              max="5"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className={`${loading ? 'bg-gray-400' : 'bg-blue-500'
                } px-4 py-2 text-white rounded-lg`}
            >
              {loading ? 'Updating...' : 'Update'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const CheckUserAds = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBike, setSelectedBike] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  const userName = user?.Name || "User";

  const getUserBikes = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${SDK.BASE_URL}/Bike/GetUserBikes/${userName}`);
      console.log(response.data);
      setData(response.data.data);
    } catch (error) {
      console.error('Error fetching user bikes:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserBikes();
  }, []);

  const handleUpdate = (bike) => {
    setSelectedBike(bike);
    setIsModalOpen(true);
  };

  const handleUpdateSuccess = (updatedBike) => {
    const updatedData = data.map((bike) =>
      bike._id === updatedBike._id ? updatedBike : bike
    );
    setData(updatedData);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this bike?");
    if (!confirmDelete) return;

    setLoading(true);
    try {
      await axios.delete(`${SDK.BASE_URL}/Bike/RemoveBike?ID=${id}`);
      const filteredBikes = data.filter((bike) => bike._id !== id);
      setData(filteredBikes);
      alert("Bike deleted successfully!");
    } catch (error) {
      console.error('Error deleting bike:', error);
      alert("Failed to delete bike. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleStartSellTimer = async (bikeId) => {
    try {
      const response = await axios.put(`${SDK.BASE_URL}/Wishlist/startTimer?bikeId=${bikeId}`);
  
      if (response.data.success) {
        alert("Timer started successfully!");
        getUserBikes();  
      } else {
        alert("Failed to start timer!");
      }
    } catch (error) {
      console.error("Error starting the timer:", error);
      alert("An error occurred while starting the timer.");
    }
  };
  


  return (
    <div className="mx-20 mx-auto mt-24 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl mb-10 font-bold text-center text-gray-800 mb-6">
        Your Uploaded Bikes
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {data.map((bike) => (
            <div
              key={bike._id}
              className="bg-gray-100 shadow-md rounded-lg p-4 flex flex-col justify-between"
            >
              <img
                src={`${SDK.IMAGES_URL}/${bike.image}`}
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
                <span className="font-semibold">Condition:</span> {bike.Used ? "Used" : "New"}
              </p>
              <div className="flex justify-between items-center">
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() => handleUpdate(bike)}
                >
                  <FaEdit className="inline mr-1" /> Update
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(bike._id)}
                >
                  <FaTrash className="inline mr-1" /> Delete
                </button>
              </div>
              <button
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 mt-5"
                onClick={() => handleStartSellTimer(bike._id)}
              >
                Start Sell Timer
              </button>
            </div>
          ))}
        </div>
      )}
      <UpdateBikeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        bike={selectedBike}
        onUpdate={handleUpdateSuccess}
      />
    </div>
  );
};

export default CheckUserAds;
