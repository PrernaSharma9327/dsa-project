import React, { useState } from 'react';
import Profile from './Profile';

const ParentComponent = () => {
  const [profile, setProfile] = useState({});

  const handleProfileUpdate = (updatedProfile) => {
    setProfile(updatedProfile);
    console.log('Profile updated:', updatedProfile);
  };

  return <Profile onProfileUpdate={handleProfileUpdate} />;
};

export default ParentComponent;
