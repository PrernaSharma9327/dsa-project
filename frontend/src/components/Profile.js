import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({ onProfileUpdate }) => {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    profilePhoto: null,
  });

  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate(); // For navigation to the homepage

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { files } = e.target;
    setProfileData((prev) => ({
      ...prev,
      profilePhoto: files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onProfileUpdate) {
      onProfileUpdate(profileData);
      setSuccessMessage('Profile updated successfully!');
      setTimeout(() => {
        setSuccessMessage('');
        navigate('/'); // Navigate to the home page after submission
      }, 2000);
    } else {
      console.error('onProfileUpdate is not provided.');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(to bottom right, #f0f9ff, #e0f7ff)',
      }}
    >
      <div
        style={{
          padding: '30px',
          width: '500px',
          background: '#fff',
          borderRadius: '12px',
          boxShadow: '0px 8px 16px rgba(0,0,0,0.2)',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#007BFF' }}>Update Profile</h2>
        <form onSubmit={handleSubmit}>
          {/* Success Message */}
          {successMessage && (
            <div
              style={{
                backgroundColor: '#d4edda',
                color: '#155724',
                padding: '10px',
                borderRadius: '5px',
                marginBottom: '15px',
                border: '1px solid #c3e6cb',
              }}
            >
              {successMessage}
            </div>
          )}

          {/* Name */}
          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontWeight: 'bold' }}>Name</label>
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                margin: '5px 0',
                borderRadius: '6px',
                border: '1px solid #ddd',
              }}
            />
          </div>

          {/* Email */}
          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontWeight: 'bold' }}>Email</label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                margin: '5px 0',
                borderRadius: '6px',
                border: '1px solid #ddd',
              }}
            />
          </div>

          {/* Phone */}
          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontWeight: 'bold' }}>Phone</label>
            <input
              type="text"
              name="phone"
              value={profileData.phone}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                margin: '5px 0',
                borderRadius: '6px',
                border: '1px solid #ddd',
              }}
            />
          </div>

          {/* Address */}
          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontWeight: 'bold' }}>Address</label>
            <input
              type="text"
              name="address"
              value={profileData.address}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                margin: '5px 0',
                borderRadius: '6px',
                border: '1px solid #ddd',
              }}
            />
          </div>

          {/* Profile Photo */}
          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontWeight: 'bold' }}>Profile Photo</label>
            <input
              type="file"
              name="profilePhoto"
              accept="image/*"
              onChange={handleFileChange}
              style={{
                padding: '10px',
                fontSize: '14px',
                borderRadius: '5px',
                border: '1px solid #ddd',
              }}
            />
            {profileData.profilePhoto && (
              <img
                src={URL.createObjectURL(profileData.profilePhoto)}
                alt="Profile Preview"
                style={{
                  marginTop: '10px',
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              width: '100%',
              backgroundColor: '#007BFF',
              color: '#fff',
              padding: '12px',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              fontSize: '16px',
              cursor: 'pointer',
              boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
            }}
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
