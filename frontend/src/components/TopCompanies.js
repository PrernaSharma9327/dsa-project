import React, { useState, useEffect } from 'react';
import Header from './Header';

const TopCompanies = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [schedule, setSchedule] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const companies = [
    { name: "Google", description: "Innovative search and AI solutions.", logo: "https://logo.clearbit.com/google.com" },
    { name: "Apple", description: "Designing the future with innovative technology.", logo: "https://logo.clearbit.com/apple.com" },
    { name: "Microsoft", description: "Empowering productivity and cloud computing.", logo: "https://logo.clearbit.com/microsoft.com" },
    { name: "Amazon", description: "Leading e-commerce and cloud services provider.", logo: "https://logo.clearbit.com/amazon.com" },
    { name: "Meta", description: "Connecting the world through social platforms.", logo: "https://logo.clearbit.com/meta.com" },
    { name: "Tesla", description: "Revolutionizing electric vehicles and energy.", logo: "https://logo.clearbit.com/tesla.com" },
    { name: "Netflix", description: "Providing the world’s leading streaming service.", logo: "https://logo.clearbit.com/netflix.com" },
    { name: "Adobe", description: "Creative software solutions for everyone.", logo: "https://logo.clearbit.com/adobe.com" },
    { name: "Spotify", description: "Music streaming service with over 70 million tracks.", logo: "https://logo.clearbit.com/spotify.com" },
    { name: "Twitter", description: "A global platform for real-time information.", logo: "https://logo.clearbit.com/twitter.com" },
    { name: "Dropbox", description: "Cloud storage and file synchronization service.", logo: "https://logo.clearbit.com/dropbox.com" },
    { name: "Slack", description: "Collaboration and communication platform for teams.", logo: "https://logo.clearbit.com/slack.com" },
  ];
  
  useEffect(() => {
    if (selectedCompany) {
      const fetchSchedule = async () => {
        const fakeData = {
            "Google": {
              events: [
                "Day 1: Introduction to Google",
                "Day 2: Technical Test",
                "Day 3: Group Discussion",
                "Day 4: System Design Interview",
                "Day 5: HR Interview",
              ],
              resources: [
                { name: "Google Careers", link: "https://careers.google.com" },
                { name: "Interview Prep", link: "https://grow.google/interview" },
              ],
              additionalInfo: "Google focuses on collaborative problem-solving and innovative thinking during its placement process."
            },
            "Apple": {
              events: [
                "Day 1: Orientation",
                "Day 2: Coding Challenge",
                "Day 3: Behavioral Interview",
                "Day 4: Technical Interview",
                "Day 5: Final Offer Discussion",
              ],
              resources: [
                { name: "Apple Careers", link: "https://www.apple.com/jobs" },
                { name: "Interview Guide", link: "https://developer.apple.com/interview" },
              ],
              additionalInfo: "Apple values creativity and design-thinking skills during its placement process."
            },
            "Microsoft": {
              events: [
                "Day 1: Overview of Microsoft Culture",
                "Day 2: Coding Round",
                "Day 3: Team Collaboration Exercise",
                "Day 4: System Design Interview",
                "Day 5: HR Interview",
              ],
              resources: [
                { name: "Microsoft Careers", link: "https://careers.microsoft.com" },
                { name: "Interview Prep", link: "https://www.microsoft.com/en-us/learn" },
              ],
              additionalInfo: "Microsoft seeks candidates who demonstrate leadership and problem-solving capabilities."
            },
            "Amazon": {
              events: [
                "Day 1: Amazon Orientation",
                "Day 2: Online Assessment",
                "Day 3: Problem-Solving Interviews",
                "Day 4: Leadership Principles Evaluation",
                "Day 5: Final Decision",
              ],
              resources: [
                { name: "Amazon Jobs", link: "https://www.amazon.jobs" },
                { name: "Leadership Principles", link: "https://www.amazon.jobs/en/principles" },
              ],
              additionalInfo: "Amazon emphasizes its leadership principles during the hiring process."
            },
            "Meta": {
              events: [
                "Day 1: Meta Introduction",
                "Day 2: Coding Challenge",
                "Day 3: Teamwork Simulation",
                "Day 4: Behavioral Interviews",
                "Day 5: Technical Final Round",
              ],
              resources: [
                { name: "Meta Careers", link: "https://www.metacareers.com" },
                { name: "Interview Prep", link: "https://engineering.fb.com" },
              ],
              additionalInfo: "Meta looks for innovative thinkers who align with its mission to connect the world."
            },
            "Tesla": {
              events: [
                "Day 1: Tesla Overview",
                "Day 2: Technical Screening",
                "Day 3: Coding and Problem Solving",
                "Day 4: Culture Fit Discussion",
                "Day 5: Offer Negotiation",
              ],
              resources: [
                { name: "Tesla Careers", link: "https://www.tesla.com/careers" },
                { name: "Engineering at Tesla", link: "https://www.tesla.com/engineering" },
              ],
              additionalInfo: "Tesla values technical expertise and passion for sustainable energy solutions."
            },
            "Netflix": {
              events: [
                "Day 1: Introduction to Netflix Culture",
                "Day 2: Coding Challenge",
                "Day 3: Behavioral Interviews",
                "Day 4: Technical Interviews",
                "Day 5: Offer Discussion",
              ],
              resources: [
                { name: "Netflix Careers", link: "https://jobs.netflix.com" },
                { name: "Interview Guide", link: "https://www.netflixrecruiting.com" },
              ],
              additionalInfo: "Netflix seeks candidates who demonstrate leadership and innovative thinking."
            },
            "Adobe": {
              events: [
                "Day 1: Adobe Overview",
                "Day 2: Technical Assessment",
                "Day 3: Team Collaboration",
                "Day 4: Behavioral Interviews",
                "Day 5: Final Interviews",
              ],
              resources: [
                { name: "Adobe Careers", link: "https://www.adobe.com/careers" },
                { name: "Interview Prep", link: "https://www.adobe.com/careers/meet-us" },
              ],
              additionalInfo: "Adobe values creativity and collaboration across teams."
            },
            "Spotify": {
              events: [
                "Day 1: Spotify Introduction",
                "Day 2: Coding Round",
                "Day 3: Behavioral Interviews",
                "Day 4: Team Exercise",
                "Day 5: Offer Discussion",
              ],
              resources: [
                { name: "Spotify Careers", link: "https://www.spotifyjobs.com" },
                { name: "Spotify Interview Prep", link: "https://www.spotify.com/us/about-us" },
              ],
              additionalInfo: "Spotify values creativity and technical proficiency."
            },
            "Twitter": {
              events: [
                "Day 1: Twitter Introduction",
                "Day 2: Technical Round",
                "Day 3: Team Collaboration",
                "Day 4: System Design Interview",
                "Day 5: Final Interview",
              ],
              resources: [
                { name: "Twitter Careers", link: "https://careers.twitter.com" },
                { name: "Interview Prep", link: "https://blog.twitter.com" },
              ],
              additionalInfo: "Twitter seeks candidates with problem-solving and teamwork skills."
            },
            "Dropbox": {
              events: [
                "Day 1: Dropbox Overview",
                "Day 2: Coding Challenge",
                "Day 3: Behavioral Interview",
                "Day 4: System Design Interview",
                "Day 5: Offer Negotiation",
              ],
              resources: [
                { name: "Dropbox Careers", link: "https://www.dropbox.com/jobs" },
                { name: "Interview Prep", link: "https://www.dropbox.com/engineering" },
              ],
              additionalInfo: "Dropbox values problem-solving skills and cultural fit."
            },
            "Slack": {
              events: [
                "Day 1: Introduction to Slack",
                "Day 2: Technical Screening",
                "Day 3: Coding Exercise",
                "Day 4: Behavioral Interviews",
                "Day 5: Final Interviews",
              ],
              resources: [
                { name: "Slack Careers", link: "https://slack.com/careers" },
                { name: "Interview Prep", link: "https://slack.engineering" },
              ],
              additionalInfo: "Slack values innovation and collaboration among teams."
            },
          };
          
        
        setSchedule(fakeData[selectedCompany]);
      };
      fetchSchedule();
    }
  }, [selectedCompany]);

  const handleCompanyClick = (company) => {
    setSelectedCompany(company.name);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCompany(null);
  };

  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#fdfdfd',
  };

  const headingStyle = {
    fontSize: '32px',
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center',
  };

  // Adjusted card container to ensure 2 vertical cards per row
  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Ensure proper distribution
    gap: '20px', // Add gap between cards
  };

  // Adjusted card style for vertical cards and 2 per row
  const cardStyle = {
    width: '350px', // Two cards per row
    height: '250px', // Adjust height to make it vertical
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    marginBottom: '20px', // Add spacing between rows
  };

  const cardHoverStyle = {
    ...cardStyle,
    transform: 'scale(1.02)',
  };

  const logoStyle = {
    width: '80px',
    height: '80px',
    marginRight: '20px',
    borderRadius: '10px',
  };

  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '30px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',
    zIndex: 1000,
    width: '80%',
    maxHeight: '90%',
    overflowY: 'auto',
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
  };

  const resourceLinkStyle = {
    color: '#007bff',
    textDecoration: 'none',
  };

  return (
    <div>
      <Header />
    <div style={containerStyle}>
      
      <h1 style={headingStyle}>Top Companies</h1>
      <div style={cardContainerStyle}>
        {companies.map((company, index) => (
          <div
            key={index}
            style={cardStyle}
            onClick={() => handleCompanyClick(company)}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img src={company.logo} alt={`${company.name} logo`} style={logoStyle} />
            <div>
              <h2>{company.name}</h2>
              <p>{company.description}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering the card click
                  handleCompanyClick(company);
                }}
                style={{
                  padding: '10px 20px',
                  marginTop: '10px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                More Info
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && schedule && (
        <>
          <div style={overlayStyle} onClick={closeModal}></div>
          <div style={modalStyle}>
            <h2>{selectedCompany} Placement Schedule Planner</h2>
            <ul>
              {schedule.events.map((event, idx) => (
                <li key={idx}>{event}</li>
              ))}
            </ul>
            <h3>Resources:</h3>
            <ul>
              {schedule.resources.map((resource, idx) => (
                <li key={idx}>
                  <a href={resource.link} style={resourceLinkStyle} target="_blank" rel="noopener noreferrer">
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
            <h4>Additional Information:</h4>
            <p>{schedule.additionalInfo}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </>
      )}
    </div>
    </div>
  );
};

export default TopCompanies;
