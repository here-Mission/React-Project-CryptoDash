import { Link } from "react-router";
import { useState } from "react";

const NotFound = () => {
  const styles = {
    container: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      textAlign: 'center',
      color: '#fff',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 999,
      boxShadow: 'inset 0 0 50px rgba(102, 126, 234, 0.5)', // soft inner glow
    },
    title: {
      fontSize: '96px',
      fontWeight: '900',
      marginBottom: '20px',
      letterSpacing: '10px',
      color: '#fff',
      textShadow: `
        0 0 8px #a78bfa,
        0 0 16px #8b5cf6,
        0 0 24px #7c3aed,
        0 0 32px #6d28d9`
    },
    message: {
      fontSize: '28px',
      marginBottom: '40px',
      fontWeight: '600',
      textShadow: '1px 1px 5px rgba(0,0,0,0.3)',
      maxWidth: '600px',
    },
    link: {
      fontSize: '22px',
      color: '#ffe066',
      textDecoration: 'none',
      fontWeight: '700',
      padding: '14px 30px',
      borderRadius: '30px',
      background: 'rgba(255, 255, 255, 0.15)',
      boxShadow: '0 8px 15px rgba(111, 66, 193, 0.2)',
      transition: 'all 0.3s ease',
    },
    linkHover: {
      background: 'rgba(255, 255, 255, 0.35)',
      boxShadow: '0 10px 20px rgba(111, 66, 193, 0.4)',
      color: '#fff',
    }
  };

  const [hovered, setHovered] = useState(false);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>
        Oops! The page you're looking for does not exist.
      </p>
      <Link
        to="/"
        style={hovered ? { ...styles.link, ...styles.linkHover } : styles.link}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
