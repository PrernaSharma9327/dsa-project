import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBriefcase, FaBuilding, FaUser, FaPhone, FaUserCircle } from 'react-icons/fa';
import Preview from "../image/Preview.png";  // Correctly import the image

const Header = ({ profileImage }) => {  // Receive profileImage as a prop
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const styles = {
    header: {
      backgroundColor: '#1d4570',
      padding: '10px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#fff',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    logo: {
      height: '40px',
      marginRight: '10px',
    },
    logoText: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    nav: {
      display: 'flex',
      gap: '15px',
    },
    navLink: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '18px',
      display: 'flex',
      alignItems: 'center',
    },
    icon: {
      marginRight: '5px',
    },
    profileContainer: {
      position: 'relative',
    },
    profileButton: {
      color: '#fff',
      fontSize: '30px',  // Increased the size of the profile icon
      cursor: 'pointer',
    },
    profileImage: {
      width: '40px',  // Adjust the size of the profile image
      height: '40px',
      borderRadius: '50%',
      objectFit: 'cover',  // Ensures the image fits within the circle
      cursor: 'pointer',
    },
    dropdownMenu: {
      display: dropdownOpen ? 'block' : 'none',
      position: 'absolute',
      top: '30px',
      right: '0',
      backgroundColor: '#fff',
      color: '#333',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
      padding: '10px',
      borderRadius: '5px',
      zIndex: '10',
    },
    dropdownItem: {
      padding: '5px 10px',
      cursor: 'pointer',
      color: 'black',  // Fixed text color for dropdown items
    },
    dropdownItemHover: {
      backgroundColor: '#f1f1f1',
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img src={Preview} alt="Logo" style={styles.logo} /> {/* Use the imported image */}
        <h1 style={styles.logoText}>FreshEra Careers</h1>
      </div>
      <nav style={styles.nav}>
        <Link to="/" style={styles.navLink}>
          <FaHome style={styles.icon} /> Home
        </Link>
        <Link to="/jobs" style={styles.navLink}>
          <FaBriefcase style={styles.icon} /> Jobs
        </Link>
        <Link to="#" style={styles.navLink}>
          <FaBuilding style={styles.icon} /> Employers
        </Link>
        <Link to="/candidate" style={styles.navLink}>
          <FaUser style={styles.icon} /> Companies
        </Link>
        <Link to="/about" style={styles.navLink}>
          <FaPhone style={styles.icon} /> About Us
        </Link>
      </nav>
      <div style={styles.profileContainer}>
        {/* Display profile image if available, otherwise show the icon */}
        {profileImage ? (
          <img
            src={profileImage}
            alt="Profile"
            style={styles.profileImage}
            onClick={() => alert('Profile clicked')} // Add functionality as needed
          />
        ) : (
          <FaUserCircle
            style={styles.profileButton}
            onClick={toggleDropdown}
          />
        )}
        <div style={styles.dropdownMenu}>
          <Link to="/profile" style={styles.navLink}>
            <div style={styles.dropdownItem}>View Profile</div>
          </Link>
          <Link to="/login" style={styles.navLink}>
            <div style={styles.dropdownItem}>Logout</div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
