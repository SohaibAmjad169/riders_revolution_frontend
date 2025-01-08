import React from 'react';
import { useNotifications } from '../../NotificationContext';

const NotificationModal = () => {
  const { showModal, notificationToShow, handleCloseModal, handleReadNotification } = useNotifications();

  if (!showModal || !notificationToShow) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md transform transition-all duration-300 scale-100 hover:scale-105">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">New Notification</h2>
          <button
            onClick={handleCloseModal}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <p className="text-lg text-gray-700 mb-4">{notificationToShow.message}</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleCloseModal}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg focus:outline-none"
          >
            Close
          </button>
          <button
            onClick={handleReadNotification}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg focus:outline-none"
          >
            Mark as Read
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
