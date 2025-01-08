import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import SDK from './config'; // Assuming SDK has the base URL

// Create Context
const NotificationContext = createContext();

// Create a custom hook to access the context
export const useNotifications = () => {
  return useContext(NotificationContext);
};

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [notificationToShow, setNotificationToShow] = useState(null);

  const user = JSON.parse(localStorage.getItem('user'));
  const userEmail = user?.Email || 'User';

  // Function to fetch notifications
  const fetchNotifications = async () => {
    try {
      const response = await axios.get(`${SDK.BASE_URL}/Wishlist/get/notification?userEmail=${userEmail}`);
      if (response.data.success) {
        setNotifications(response.data.notifications);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  // Function to mark notification as read
  const markAsRead = async (notificationId) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notif) =>
        notif._id === notificationId ? { ...notif, status: 'read' } : notif
      )
    );

    await axios.put(`${SDK.BASE_URL}/Wishlist/notifications/?_id=${notificationId}`, { status: 'read' });
  };

  // Check for unread notifications every 5 seconds
  useEffect(() => {
    fetchNotifications();
    const intervalId = setInterval(() => {
      fetchNotifications();
    }, 5000); // 5 seconds interval

    return () => clearInterval(intervalId);
  }, [userEmail]);

  // Show modal for unread notifications
  useEffect(() => {
    const unreadNotification = notifications.find((notif) => notif.status === 'unread');
    if (unreadNotification) {
      setNotificationToShow(unreadNotification);
      setShowModal(true);
    }
  }, [notifications]);

  // Modal close handler
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Modal read handler
  const handleReadNotification = () => {
    if (notificationToShow) {
      markAsRead(notificationToShow._id);
      setShowModal(false);
    }
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        showModal,
        notificationToShow,
        handleCloseModal,
        handleReadNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
