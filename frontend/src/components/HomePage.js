import React, { useState } from "react";
import Header from "./Header";
const HomePage = () => {
  const [filter, setFilter] = useState("");
  const [salaryFilter, setSalaryFilter] = useState([0, 100000]);

  const filteredCompanies = companyLogos.filter(logo =>
    logo.name.toLowerCase().includes(filter.toLowerCase())
  );

  const filteredJobs = jobCategories.filter(category =>
    category.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <Header />
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroLeft}>
          <h1 style={styles.heroTitle}>Finding the Job Beyond Borders</h1>
          <p style={styles.heroSubtitle}>
            Discover job opportunities, research the fastest-growing companies, and start your career journey.
          </p>
          <div style={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search by company or role..."
              style={styles.searchInput}
            />
            <input
              type="text"
              placeholder="Location"
              style={styles.searchInput}
            />
            <button style={styles.searchButton}>Search</button>
          </div>
        </div>
      </section>

      {/* Company Logo Marquee */}
      <section style={styles.sliderSection}>
        <h2 style={styles.sliderTitle}>Top Companies</h2>
        <div style={styles.marqueeContainer}>
          <div style={styles.marquee}>
            {companyLogos.map((logo, index) => (
              <div key={index} style={styles.sliderLogoContainer}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={styles.sliderLogo}
                />
                <p>{logo.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Filter Slider */}
      <section style={styles.filterSliderSection}>
        <h2 style={styles.sliderTitle}>Filter Companies</h2>
        <input
          type="text"
          placeholder="Search by company name..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={styles.filterInput}
        />
        <div style={styles.sliderContainer}>
          {filteredCompanies.map((logo, index) => (
            <div key={index} style={styles.sliderLogoContainer}>
              <img
                src={logo.src}
                alt={logo.alt}
                style={styles.sliderLogo}
              />
              <p>{logo.name}</p>
            </div>
          ))}
        </div>
      </section>

      

      

      {/* User Reviews Section */}
      <section style={styles.reviewsSection}>
        <h2 style={styles.reviewsTitle}>What Our Users Say</h2>
        <div style={styles.reviewsContainer}>
          {userReviews.map((review, index) => (
            <div key={index} style={styles.reviewCard}>
              <img
                src={review.photo}
                alt={review.name}
                style={styles.reviewPhoto}
              />
              <p style={styles.reviewText}>{review.text}</p>
              <p style={styles.reviewerName}>- {review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>About Us</h4>
            <p style={styles.footerText}>
              Learn more about our mission to connect people with the best job opportunities worldwide.
            </p>
          </div>
          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Contact</h4>
            <p style={styles.footerText}>Email: support@jobportal.com</p>
            <p style={styles.footerText}>Phone: +91 9876543210</p>
          </div>
          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Follow Us</h4>
            <p style={styles.footerText}>
              <a href="#" style={styles.footerLink}>LinkedIn</a> | 
              <a href="#" style={styles.footerLink}>Twitter</a> | 
              <a href="#" style={styles.footerLink}>Facebook</a>
            </p>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <p style={styles.footerBottomText}>
            &copy; 2025 JobPortal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

// Sample Data for Companies, Categories, and Reviews
const companyLogos = [
    { src: "https://logo.clearbit.com/google.com", alt: "Google", name: "Google" },
  { src: "https://logo.clearbit.com/microsoft.com", alt: "Microsoft", name: "Microsoft" },
  { src: "https://logo.clearbit.com/apple.com", alt: "Apple", name: "Apple" },
  { src: "https://logo.clearbit.com/amazon.com", alt: "Amazon", name: "Amazon" },
  { src: "https://logo.clearbit.com/meta.com", alt: "Meta", name: "Meta" },
  { src: "https://logo.clearbit.com/tesla.com", alt: "Tesla", name: "Tesla" },
  { src: "https://logo.clearbit.com/salesforce.com", alt: "Salesforce", name: "Salesforce" },
  { src: "https://logo.clearbit.com/ibm.com", alt: "IBM", name: "IBM" },
  { src: "https://logo.clearbit.com/spotify.com", alt: "Spotify", name: "Spotify" },
  { src: "https://logo.clearbit.com/linkedin.com", alt: "LinkedIn", name: "LinkedIn" },
  { src: "https://logo.clearbit.com/yahoo.com", alt: "Yahoo", name: "Yahoo" }, // New company
  { src: "https://logo.clearbit.com/adobe.com", alt: "Adobe", name: "Adobe" }, // New company
  { src: "https://logo.clearbit.com/zoom.us", alt: "Zoom", name: "Zoom" }, // New company
  { src: "https://logo.clearbit.com/airbnb.com", alt: "Airbnb", name: "Airbnb" }, // New company
  { src: "https://logo.clearbit.com/snapchat.com", alt: "Snapchat", name: "Snapchat" }, // New company
];

const jobCategories = [
  "Information Technology",
  "Finance",
  "Marketing",
  "Healthcare",
  "Education",
  "Engineering",
];

const userReviews = [
  {
    text: "This platform helped me secure a great job in Bangalore!",
    name: "Ravi Kumar",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    text: "The best platform for job seekers, highly recommended.",
    name: "Anjali Sharma",
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    text: "Thanks to JobPortal, I joined an amazing company in Mumbai!",
    name: "Vikram Singh",
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    text: "A user-friendly interface and excellent opportunities.",
    name: "Neha Patel",
    photo: "https://randomuser.me/api/portraits/women/4.jpg",
  }
];



const styles = {

    salarySliderContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      },
      salarySlider: {
        width: "80%",
      },
  hero: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px 20px",
    backgroundColor: "#f3f4f6",
    borderRadius: "8px",
    backgroundImage: "url('https://www.bacancytechnology.com/img/banner/job-banner-1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    width: "100%",
    color: "#fff",
  },
  heroLeft: {
    maxWidth: "50%",
    paddingRight: "20px",
  },
  heroTitle: {
    fontSize: "3em",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  heroSubtitle: {
    fontSize: "1.2em",
    marginBottom: "20px",
  },
  searchContainer: {
    display: "flex",
    gap: "10px",
  },
  searchInput: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    fontSize: "1em",
    width: "200px",
  },
  searchButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "1.2em",
    border: "none",
    cursor: "pointer",
  },
  sliderSection: {
    padding: "40px 20px",
    textAlign: "center",
  },
  sliderTitle: {
    fontSize: "2em",
    marginBottom: "20px",
  },
  marqueeContainer: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    marginBottom: "30px",
  },
  marquee: {
    display: "inline-block",
    animation: "scroll 30s linear infinite",
  },
  sliderLogoContainer: {
    display: "inline-block",
    marginRight: "20px",
    textAlign: "center",
  },
  sliderLogo: {
    width: "100px",
    height: "auto",
  },
  filterSliderSection: {
    padding: "20px 0",
    backgroundColor: "#f9fafb",
  },
  filterInput: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    fontSize: "1em",
    marginBottom: "20px",
  },
  filterSliderContainer: {
    display: "flex",
    gap: "10px",
    overflowX: "scroll",
    padding: "10px",
  },
  filterCard: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "1.2em",
    textAlign: "center",
    flexShrink: 0,
  },
  reviewsSection: {
    padding: "40px 20px",
    backgroundColor: "#f9fafb",
    textAlign: "center",
  },
  reviewsTitle: {
    fontSize: "2em",
    marginBottom: "20px",
  },
  reviewsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  reviewCard: {
    maxWidth: "300px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
  },
  reviewPhoto: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    marginBottom: "10px",
  },
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
  },
  footerContent: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginBottom: "20px",
  },
  footerSection: {
    maxWidth: "300px",
    textAlign: "left",
  },
  footerTitle: {
    fontSize: "1.5em",
    marginBottom: "10px",
    color: "#f9a825",
  },
  footerText: {
    fontSize: "1em",
    lineHeight: "1.5",
  },
  footerLink: {
    color: "#f9a825",
    textDecoration: "none",
  },
  footerBottom: {
    borderTop: "1px solid #555",
    paddingTop: "10px",
  },
  footerBottomText: {
    fontSize: "0.9em",
  },
};

// CSS for Marquee animation
const stylesMarquee = `
  @keyframes scroll {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
`;

export default HomePage;