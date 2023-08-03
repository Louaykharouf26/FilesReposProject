import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:4000'); // Replace with your server's WebSocket URL

    socket.onmessage = (event) => {
      try {
        const notification = JSON.parse(event.data);
        setNotifications((prevNotifications) => [...prevNotifications, notification]);
      } catch (error) {
        console.error('Error parsing notification:', error);
      }
    };

    return () => {
      socket.close();
    };
  }, []);

  // ... Rest of the component code to display the notifications in the navbar

  return (
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        {/* ... Other navbar items ... */}

        <li className="nav-item dropdown">
          <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
            <i className="bi bi-bell"></i>
            <span className="badge bg-primary badge-number">{notifications.length}</span>
          </a>
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
            <li className="dropdown-header">
              You have {notifications.length} new notifications
              <a href="#">
                <span className="badge rounded-pill bg-primary p-2 ms-2">View all</span>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider"></hr>
            </li>
            {notifications.map((notification, index) => (
              <li className="notification-item" key={index}>
                {notification.type === 'success' ? (
                  <i className="bi bi-check-circle text-success"></i>
                ) : (
                  <i className="bi bi-exclamation-circle text-warning"></i>
                )}
                <div>
                  <h4>{notification.title}</h4>
                  <p>{notification.message}</p>
                  <p>{notification.timestamp}</p>
                </div>
              </li>
            ))}
            <li>
              <hr className="dropdown-divider"></hr>
            </li>
            <li className="dropdown-footer">
              <a href="#">Show all notifications</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
