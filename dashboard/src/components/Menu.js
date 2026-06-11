import React, { useState } from "react";

import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div>
          <div className="profile" onClick={handleProfileClick}>
            <div className="avatar">ZU</div>
            <p className="username">USERID</p>
          </div>

          {isProfileDropdownOpen && (
            <div
              style={{
                position: "absolute",
                right: "20px",
                top: "60px",
                width: "220px",
                background: "white",
                border: "1px solid #ddd",
                borderRadius: "8px",
                boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
                zIndex: 1000,
              }}
            >
              <div style={{ padding: "12px" }}>
                <strong>Makarand Patil</strong>
                <p
                  style={{
                    margin: 0,
                    fontSize: "13px",
                    color: "gray",
                  }}
                >
                  makarand@gmail.com
                </p>
              </div>

              <hr />

              <Link
                to="/profile"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <div style={{ padding: "10px" }}>My Profile</div>
              </Link>

              <Link
                to="/account"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <div style={{ padding: "10px" }}>Account Details</div>
              </Link>

              <Link
                to="/settings"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <div style={{ padding: "10px" }}>Settings</div>
              </Link>

              <Link
                to="/support"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <div style={{ padding: "10px" }}>Support</div>
              </Link>

              <div
                style={{
                  padding: "10px",
                  color: "red",
                  cursor: "pointer",
                }}
                onClick={() => {
                  localStorage.removeItem("isLoggedIn");

                  window.location.href = "http://localhost:3000/login";
                }}
              >
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;