import React, { useEffect, useState } from "react";
import Spinner from "../loader/Spinner";
import axios from "axios";
import SDK from "../../config";

const Wishlist = () => {
  const [loading, setLoading] = useState(true);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [bikeId, setBikeId] = useState("")
  const user = JSON.parse(localStorage.getItem("user"));
  const userEmail = user?.Email;

  const getAllWishlist = async () => {
    try {
      const response = await axios.get(
        `${SDK.BASE_URL}/Wishlist/getWishlistByEmail?email=${userEmail}`
      );
      setWishlistItems(response.data.wishlist);
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllWishlist();
  }, []);

  const calculateRemainingTime = (updatedAt) => {
    const updatedTime = new Date(updatedAt).getTime();
    const endTime = updatedTime + 12 * 60 * 60 * 1000;
    const currentTime = new Date().getTime();
    const timeLeft = endTime - currentTime;

    if (timeLeft > 0) {
      return {
        hours: Math.floor((timeLeft / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((timeLeft / (1000 * 60)) % 60),
        seconds: Math.floor((timeLeft / 1000) % 60),
      };
    } else {
      return null;
    }
  };

  const Timer = ({ timer, updatedAt }) => {
    const [remainingTime, setRemainingTime] = useState(
      timer ? calculateRemainingTime(updatedAt) : null
    );

    useEffect(() => {
      if (!timer) return;

      const interval = setInterval(() => {
        const timeLeft = calculateRemainingTime(updatedAt);
        if (timeLeft) {
          setRemainingTime(timeLeft);
        } else {
          clearInterval(interval);
          setRemainingTime(null);
        }
      }, 1000);

      return () => clearInterval(interval);
    }, [timer, updatedAt]);

    if (!timer) {
      return <p className="text-blue-600 font-semibold">Timer Not Started</p>;
    }

    if (!remainingTime) {
      return <p className="text-red-600 font-semibold">Time Expired</p>;
    }

    return (
      <div className="text-green-600 font-bold text-lg">
        {`${remainingTime.hours}h : ${remainingTime.minutes}m : ${remainingTime.seconds}s`}
      </div>
    );
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen mt-24">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
        Wishlist Items
      </h1>
      {wishlistItems.length > 0 ? (
        wishlistItems.map((item) => (
          <div
            key={item._id}
            className="flex items-center bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200 p-6"
          >
            {/* Image Section */}
            <div className="w-1/4">
              <img
                src={`${SDK.IMAGES_URL}/${item.bikeImage}`}
                alt="Bike"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Details Section */}
            <div className="w-1/2 pe-6 ps-24">
              <p className="text-gray-700 text-lg font-normal mb-2">
                <strong className="text-gray-900">Bike Name:</strong>{" "}
                {item.bikeName}
              </p>
              <p className="text-gray-700 text-lg font-normal mb-2">
                <strong className="text-gray-900">Bike Price:</strong>{" "}
                {item.bikePrice}
              </p>
              <p className="text-gray-700 text-lg font-normal mb-2">
                <strong className="text-gray-900">Bike Rating:</strong>{" "}
                {item.bikeRating}
              </p>
              <p className="text-gray-700 text-lg font-normal mb-2">
                <strong className="text-gray-900">User Name:</strong>{" "}
                {item.userName}
              </p>
              <p className="text-gray-700 text-lg font-normal mb-2">
                <strong className="text-gray-900">User Email:</strong>{" "}
                {item.userEmail}
              </p>
            </div>

            {/* Timer Section */}
            <div className="w-1/4 text-center">
              <Timer timer={item.timer} updatedAt={item.updatedAt} />
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600">No items in the wishlist.</p>
      )}
    </div>
  );
};

export default Wishlist;
