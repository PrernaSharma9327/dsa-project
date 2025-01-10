import React from "react";
import { Target, Users, Star } from "lucide-react";
import Header from "./Header";

const AboutUs = () => {
  const styles = {
    container: {
      background: "linear-gradient(to bottom right, #d7f3fc, #f0fcff)", // Gradient inside
      borderRadius: "15px",
      padding: "40px",
      maxWidth: "1200px",
      margin: "20px auto",
      fontFamily: "Arial, sans-serif",
      border: "4px solid", // Single border effect
      borderColor: "cyan", // Border color (bluish or cyan)
      boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)", // Depth
      display: "flex", // Horizontal layout for text and image
      flexDirection: "row", // Keep layout as row
      gap: "20px",
      alignItems: "stretch", // Ensure equal height for both sections
    },
    textContainer: {
      flex: 1, // Allow text section to take equal space
      padding: "20px",
      background: "linear-gradient(to bottom, #ffffff, #eaf9ff)", // Gradient for the text section
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      display: "flex",
      flexDirection: "column", // Align the text and features vertically
    },
    sectionTitle: {
      fontWeight: "bold",
      fontSize: "32px",
      marginBottom: "20px",
      color: "#004f6e", // Cyan tone for text
    },
    feature: {
      display: "flex",
      alignItems: "center",
      marginBottom: "15px",
      border: "1px solid #a6e8ff", // Subtle cyan border for features
      padding: "10px",
      borderRadius: "8px",
      background: "linear-gradient(to right, #e6f7ff, #cceeff)", // Gradient inside features
    },
    icon: {
      width: "40px",
      height: "40px",
      backgroundColor: "#004f6e", // Dark cyan for the icon
      color: "#fff",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginRight: "15px",
      fontSize: "20px",
    },
    featureText: {
      lineHeight: "1.5",
      color: "#333",
    },
    imageContainer: {
      flex: 1, // Allow image section to take equal space
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    image: {
      width: "100%", // Make the image fill its container
      height: "100%", // Ensure full height
      objectFit: "cover", // Maintain aspect ratio
      borderRadius: "10px",
      border: "2px solid cyan", // Image border for consistency
    },
  };

  return (
    <div>
      {/* Header */}
      <Header />

      {/* About Us Section */}
      <div style={styles.container}>
        {/* Text Section */}
        <div style={styles.textContainer}>
          <h2 style={styles.sectionTitle}>About Us</h2>
          <p style={{ marginBottom: "20px", color: "#555", lineHeight: "1.8" }}>
            Welcome to our website! We are dedicated to providing the best
            services and products to our customers. With a focus on innovation
            and excellence, we strive to make a positive impact in our field.
            Our mission is to deliver top-notch solutions that cater to the
            needs of our users and create value for our community.
          </p>

          <div style={styles.feature}>
            <div style={styles.icon}>
              <Target />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: "20px", fontWeight: "bold" }}>
                Target Audience
              </h3>
              <p style={styles.featureText}>
                Our platform is designed to cater to diverse audiences,
                ensuring that everyone finds value and utility in our services.
              </p>
            </div>
          </div>

          <div style={styles.feature}>
            <div style={styles.icon}>
              <Users />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: "20px", fontWeight: "bold" }}>
                Preferred by Many
              </h3>
              <p style={styles.featureText}>
                Trusted by a growing community of users who appreciate the
                quality and reliability we bring to the table.
              </p>
            </div>
          </div>

          <div style={styles.feature}>
            <div style={styles.icon}>
              <Star />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: "20px", fontWeight: "bold" }}>
                Valuing Clients
              </h3>
              <p style={styles.featureText}>
                Our clients are at the heart of everything we do. Your
                satisfaction and success are our top priorities.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div style={styles.imageContainer}>
          <img
            src="https://gharexpert.com/User_Images/120201715604.jpg"
            alt="About Us"
            style={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
