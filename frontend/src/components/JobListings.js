import React, { useState, useEffect } from "react";
import Header from "./Header";

const JobListings = () => {
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [minSalary, setMinSalary] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [compareModalVisible, setCompareModalVisible] = useState(false);
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  const apiUrl = "http://127.0.0.1:5000/search";

  useEffect(() => {
    fetchJobs(query, location, minSalary, currentPage);
  }, [query, location, minSalary, currentPage]);

  const fetchJobs = async (query, location, minSalary, page) => {
    try {
      const response = await fetch(
        `${apiUrl}?query=${query}&location=${location}&min_salary=${minSalary}&page=${page}`
      );
      const data = await response.json();
      setJobs(data.jobs || []);
      setTotalPages(data.total_pages || 1);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const handleCompareClick = (job) => {
    if (selectedCompanies.length < 2 && !selectedCompanies.includes(job)) {
      setSelectedCompanies([...selectedCompanies, job]);
    }
    if (selectedCompanies.length === 1) {
      setCompareModalVisible(true);
    }
  };

  const resetComparison = () => {
    setSelectedCompanies([]);
    setCompareModalVisible(false);
  };

  const styles = {
    body: { fontFamily: "Arial, sans-serif", backgroundColor: "#f4f4f4", padding: "20px" },
    container: { maxWidth: "800px", margin: "auto" },
    header: { textAlign: "center", color: "#333" },
    form: { display: "flex", gap: "10px", marginBottom: "20px" },
    input: { flex: 1, padding: "10px", borderRadius: "5px", border: "1px solid #ccc" },
    button: { padding: "10px 20px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" },
    job: { display: "flex", gap: "10px", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", marginBottom: "10px", backgroundColor: "#fff" },
    selectedJob: { border: "2px solid #007BFF", backgroundColor: "#E6F7FF" },
    jobImg: { width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover" },
    jobInfo: { flex: 1 },
    jobTitle: { margin: "0 0 5px", color: "#007BFF" },
    jobCompany: { margin: "0", fontWeight: "bold" },
    jobLocation: { margin: "5px 0" },
    jobSalary: { margin: "5px 0" },
    pagination: { textAlign: "center", marginTop: "20px" },
    paginationButton: { padding: "5px 10px", margin: "0 5px", border: "1px solid #007BFF", borderRadius: "5px", backgroundColor: "#fff", cursor: "pointer" },
    paginationButtonDisabled: { backgroundColor: "#007BFF", color: "#fff", cursor: "default" },
    modal: { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "#fff", padding: "20px", borderRadius: "5px", boxShadow: "0 2px 10px rgba(0,0,0,0.2)", zIndex: 1000 },
    overlay: { position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.5)", zIndex: 999 },
    comparisonTable: { width: "100%", borderCollapse: "collapse", marginTop: "20px" },
    tableHeader: { backgroundColor: "#007BFF", color: "#fff" },
    tableCell: { border: "1px solid #ddd", padding: "10px", textAlign: "left" },
  };

  return (
    <div>
      <Header />
    <div style={styles.body}>
      
      <div style={styles.container}>
        <h1 style={styles.header}>Job Listings</h1>
        {/* Search form */}
        <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Job title or skill (e.g., Developer)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Location (e.g., Remote)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={styles.input}
          />
          <input
            type="number"
            placeholder="Minimum Salary (e.g., 50000)"
            value={minSalary}
            onChange={(e) => setMinSalary(Number(e.target.value))}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Search
          </button>
        </form>
        {/* Job results */}
        <div id="job-results">
          {jobs.length > 0 ? (
            jobs.map((job, index) => (
              <div
                key={index}
                style={{
                  ...styles.job,
                  ...(selectedCompanies.includes(job) ? styles.selectedJob : {}),
                }}
              >
                <img src={job.logo} alt="Company Logo" style={styles.jobImg} />
                <div style={styles.jobInfo}>
                  <h2 style={styles.jobTitle}>
                    <a href={job.link} target="_blank" rel="noopener noreferrer">
                      {job.title}
                    </a>
                  </h2>
                  <p style={styles.jobCompany}>{job.company}</p>
                  <p style={styles.jobLocation}>{job.location}</p>
                  <p style={styles.jobSalary}>
                    Salary: {job.salary || "Not specified"}
                  </p>
                  <button
                    style={styles.button}
                    onClick={() => handleCompareClick(job)}
                  >
                    {selectedCompanies.includes(job)
                      ? "Selected"
                      : "Compare"}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No jobs found.</p>
          )}
        </div>
        {/* Pagination */}
        <div style={styles.pagination}>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              style={{
                ...styles.paginationButton,
                ...(currentPage === index + 1
                  ? styles.paginationButtonDisabled
                  : {}),
              }}
              disabled={currentPage === index + 1}
            >
              {index + 1}
            </button>
          ))}
        </div>
        {/* Compare Modal */}
        {compareModalVisible && selectedCompanies.length === 2 && (
          <>
            <div
              style={styles.overlay}
              onClick={() => setCompareModalVisible(false)}
            />
            <div style={styles.modal}>
              <h2>Compare Companies</h2>
              <table style={styles.comparisonTable}>
                <thead>
                  <tr>
                    <th style={styles.tableHeader}>Feature</th>
                    <th style={styles.tableHeader}>{selectedCompanies[0].company}</th>
                    <th style={styles.tableHeader}>{selectedCompanies[1].company}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={styles.tableCell}>Job Title</td>
                    <td style={styles.tableCell}>{selectedCompanies[0].title}</td>
                    <td style={styles.tableCell}>{selectedCompanies[1].title}</td>
                  </tr>
                  <tr>
                    <td style={styles.tableCell}>Location</td>
                    <td style={styles.tableCell}>{selectedCompanies[0].location}</td>
                    <td style={styles.tableCell}>{selectedCompanies[1].location}</td>
                  </tr>
                  <tr>
                    <td style={styles.tableCell}>Salary</td>
                    <td style={styles.tableCell}>{selectedCompanies[0].salary || "Not specified"}</td>
                    <td style={styles.tableCell}>{selectedCompanies[1].salary || "Not specified"}</td>
                  </tr>
                </tbody>
              </table>
              <button style={styles.button} onClick={resetComparison}>
                Reset
              </button>
            </div>
          </>
        )}
      </div>
    </div>
    </div>
  );
};

export default JobListings;
