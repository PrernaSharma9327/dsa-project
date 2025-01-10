import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import image from "../image/image.png";

const Login = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your login logic here

    // Navigate to the home page after successful login
    navigate('/');
  };

  const styles = {
    body: {
      margin: 0,
      fontFamily: 'Arial, sans-serif',
      background: `url('https://media.istockphoto.com/id/621921512/photo/futuristic-earth-map-technology-abstract-background.jpg?b=1&s=612x612&w=0&k=20&c=_ZNqjtDrqskt2ZFQxepU5oF7J-8mHs8sdYD0HmVtuUY=') no-repeat center center fixed`,
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    container: {
      display: 'flex',
      width: '1000px',
      height: '500px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      borderRadius: '8px',
      overflow: 'hidden',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
    },
    sideImage: {
      width: '60%',
      background: `url('${image}') no-repeat center center`,
      backgroundSize: 'cover',
    },
    formContainer: {
      width: '60%',
      padding: '30px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    formHeader: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '10px',
      textAlign: 'center',
    },
    formDescription: {
      fontSize: '14px',
      color: '#666',
      marginBottom: '20px',
      textAlign: 'center',
    },
    formGroup: {
      marginBottom: '20px',
    },
    label: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#333',
      display: 'block',
      marginBottom: '5px',
    },
    input: {
      width: '100%',
      padding: '10px',
      fontSize: '14px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    inputFocus: {
      borderColor: '#007bff',
      outline: 'none',
    },
    formActions: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    link: {
      fontSize: '14px',
      color: '#007bff',
      textDecoration: 'none',
    },
    linkHover: {
      textDecoration: 'underline',
    },
    formButton: {
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    signupText: {
      textAlign: 'center',
      fontSize: '14px',
      marginTop: '10px',
    },
    signupLink: {
      color: '#007bff',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        {/* Side Image */}
        <div style={styles.sideImage}></div>

        {/* Form Section */}
        <div style={styles.formContainer}>
          <div style={styles.formHeader}>Welcome Back!</div>
          <div style={styles.formDescription}>
            Sign in to access your account and explore our features.
          </div>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="email">
                Email Address
              </label>
              <input
                style={styles.input}
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="password">
                Password
              </label>
              <input
                style={styles.input}
                type="password"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div style={styles.formActions}>
              <a style={styles.link} href="#">
                Forgot Password?
              </a>
              <button style={styles.formButton} type="submit">
                Sign In
              </button>
            </div>
          </form>
          <div style={styles.signupText}>
            Don't have an account?{' '}
            <a style={styles.signupLink} href="/signup">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
