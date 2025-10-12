import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TiThMenuOutline } from 'react-icons/ti';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { IconButton, Badge, Menu, MenuItem } from '@mui/material'; // Import Badge component
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import { IconContext } from 'react-icons';

function Sidebar({ isLoggedIn }) {
  const [sidebar, setSidebar] = useState(false);
  const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);
  const [anomalyClicked, setAnomalyClicked] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0); // State for notification count

  const handleAnomalyClick = () => {
    setAnomalyClicked(!anomalyClicked);
  };

  const showSidebar = () => {
    if (!isLoggedIn) {
      setSidebar(!sidebar);
    }
  };

  const handleNotificationClick = (event) => {
    setNotificationAnchorEl(event.currentTarget);
    setNotificationCount(1); // Reset notification count when opening the menu
  };

  const handleNotificationClose = () => {
    setNotificationAnchorEl(null);
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          {/* Menu Icon */}
          <Link to="#" className="menu-bars" onClick={showSidebar}>
            <TiThMenuOutline />
          </Link>

          {/* Spacer to push notification icon to the right */}
          <div className="spacer" />

          {/* Notification Icon with Badge */}
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            className="notification-icon"
            onClick={handleNotificationClick}
          >
            <Badge badgeContent={notificationCount} color="error"> {/* Badge component */}
              <IoMdNotificationsOutline />
            </Badge>
          </IconButton>
        </div>

        {/* Sidebar */}
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
             
              </Link>
            </li>
            {SidebarData.map((item, index) => (
              <React.Fragment key={index}>
                <li className={item.cName} onClick={item.title === 'Anomaly' ? handleAnomalyClick : null}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                  {item.title === 'Anomaly' && anomalyClicked && item.subNav && (
                    <ul className="subNav">
                      {item.subNav.map((subItem, subIndex) => (
                        <li key={subIndex} className={subItem.cName}>
                          <Link to={subItem.path}>
                            {subItem.icon}
                            <span>{subItem.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </React.Fragment>
            ))}
          </ul>
        </nav>

        {/* Notification Menu */}
        <Menu
          anchorEl={notificationAnchorEl}
          open={Boolean(notificationAnchorEl)}
          onClose={handleNotificationClose}
        >
          <MenuItem onClick={handleNotificationClose}>New entry has been added by admin</MenuItem>
        </Menu>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
