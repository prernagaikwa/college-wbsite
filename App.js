import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import logo from "./assets/logo.png";
import collegePhoto from "./assets/images.jpeg";

// Import page components
import About from "./pages/About";
import Courses from "./pages/Courses";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import FormPage from "./pages/FormPage";

function App() {
  const [hoveredNav, setHoveredNav] = useState(null);

  const theme = {
    primary: "#4da6ff",
    dark: "#0059b3",
    light: "#e6f3ff",
  };

  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      maxWidth: "950px",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: "#fafafa",
      color: theme.dark,
    },
    topBanner: {
      backgroundColor: theme.primary,
      color: "#fff",
      padding: "15px 20px",
      borderRadius: "8px",
      textAlign: "center",
      fontSize: "1.8rem",
      fontWeight: "900",
      marginBottom: "20px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    },
    header: {
      backgroundColor: theme.dark,
      color: "#ffffff",
      padding: "15px 25px",
      borderRadius: "8px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      marginBottom: "40px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.15)",
    },
    logo: {
      height: "60px",
      marginRight: "15px",
    },
    headerLeft: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    collegeName: {
      fontSize: "1.6rem",
      fontWeight: "800",
      letterSpacing: "0.5px",
    },
    nav: {
      display: "flex",
      gap: "18px",
      flexWrap: "wrap",
    },
    navLink: (hovered) => ({
      color: hovered ? theme.primary : "#ffffff",
      textDecoration: "none",
      fontWeight: "600",
      fontSize: "1rem",
      cursor: "pointer",
      padding: "6px 12px",
      borderRadius: "6px",
      backgroundColor: hovered ? "#ffffff22" : "transparent",
      transition: "all 0.3s ease",
    }),
    hero: {
      backgroundColor: theme.light,
      borderRadius: "12px",
      padding: "50px 30px",
      textAlign: "center",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      marginBottom: "50px",
      color: theme.dark,
    },
    heroImage: {
      maxWidth: "100%",
      borderRadius: "12px",
      marginBottom: "20px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      width: "500px",
      height: "auto",
    },
    heroTitle: {
      fontSize: "2.6rem",
      marginBottom: "15px",
      fontWeight: "800",
    },
    heroText: {
      fontSize: "1.2rem",
      marginBottom: "25px",
    },
    ctaButton: {
      backgroundColor: theme.primary,
      border: "none",
      padding: "14px 40px",
      borderRadius: "8px",
      color: "#ffffff",
      fontWeight: "700",
      fontSize: "1.1rem",
      cursor: "pointer",
      boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
      transition: "all 0.3s ease",
    },
    footer: {
      textAlign: "center",
      color: "#555",
      fontSize: "0.9rem",
      padding: "15px 0",
      borderTop: "1px solid #ccc",
      marginTop: "60px",
    },
  };

  return (
    <div style={styles.container}>
      {/* Banner */}
      <div style={styles.topBanner}>
        Welcome to D. Y. Patil College of Engineering, Kolhapur 🎓
      </div>

      {/* Header with Navbar */}
      <header style={styles.header}>
        <div style={styles.headerLeft}>
          <img src={logo} alt="College Logo" style={styles.logo} />
          <h1 style={styles.collegeName}>D. Y. Patil College of Engineering</h1>
        </div>
        <nav aria-label="Primary navigation" style={styles.nav}>
          {[
            { id: "about", label: "About", path: "/about" },
            { id: "courses", label: "Courses", path: "/courses" },
            { id: "events", label: "Events", path: "/events" },
            { id: "contact", label: "Contact", path: "/contact" },
          ].map(({ id, label, path }) => (
            <Link
              key={id}
              to={path}
              style={styles.navLink(hoveredNav === id)}
              onMouseEnter={() => setHoveredNav(id)}
              onMouseLeave={() => setHoveredNav(null)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <section style={styles.hero}>
              <img
                src={collegePhoto}
                alt="D. Y. Patil College Campus"
                style={styles.heroImage}
              />
              <h2 style={styles.heroTitle}>Empowering Students for Tomorrow</h2>
              <p style={styles.heroText}>
                A legacy of excellence, innovation, and leadership in education.
              </p>

              {/* Navigate to FormPage */}
              <Link to="/apply" style={{ textDecoration: "none" }}>
                <button
                  style={styles.ctaButton}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = theme.dark)
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = theme.primary)
                  }
                >
                  Apply Now
                </button>
              </Link>
            </section>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<FormPage />} /> {/* ✅ new form page */}
      </Routes>

      {/* Footer */}
      <footer style={styles.footer}>
        © {new Date().getFullYear()} D. Y. Patil College of Engineering, Kolhapur.
        All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
