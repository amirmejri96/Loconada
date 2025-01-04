import React, { useEffect, useState } from 'react';
import '../Navbar 2/NavBStyle.css';
import { FetchUser } from '../../API/AuthApi';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [userInfo, setUserInfo] = useState({});
  const [showPopup, setShowPopup] = useState(false); // To control popup visibility
  const Navigate = useNavigate();

  // Fetch user info
  const GetUser = async () => {
    const data = await FetchUser();
    console.log(data);
    const user = data;
    console.log('user ', user);
    setUserInfo(user);
  };

  useEffect(() => {
    GetUser();
  }, []);

  // Handle logout
  const logout = () => {
    setShowPopup(true); // Show popup
  };

  // Close popup and redirect
  const handleClosePopup = () => {
    setShowPopup(false);
    localStorage.removeItem('token');
    Navigate('/');
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img style={{ width: '20%', paddingLeft: '200px' }} src="../../assets/icone.png" alt="Logo" />
        </div>
        <ul className="nav-links">
          {userInfo.role === "Admin" ? (
            <>
              <li><a href="/privateRoute">Accueil</a></li>
              <li><a href="/edition">Éditions</a></li>
              <li><a href="/users">Utilisateurs</a></li>
              <li><a href="/reservations">Réservations</a></li>
              <li><button onClick={logout}>Logout</button></li>
            </>
          ) : null}

          {userInfo.role === "User" ? (
            <>
              <li><a href="/privateRoute">Accueil</a></li>
              <li><a href="/about">À propos</a></li>
              <li><a href="/edition">Éditions</a></li>
              <li><button onClick={logout}>Logout</button></li>
            </>
          ) : null}
        </ul>
      </nav>

      {showPopup && (
        <div className="popup-container">
          <div className="popup">
            <h2>Hope to see you again, {userInfo.firstName || userInfo.lastName || 'User'}!</h2>
            <button className="popup-button" onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;