import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav style={{ 
      padding: '1rem 2rem', 
      backgroundColor: '#000', 
      marginBottom: '0',
      borderBottom: '1px solid #333',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 1px 3px rgba(0,0,0,0.3)'
    }}>
      {/* Logo - Updated to use detailed version */}
      <Link to="/" style={{ textDecoration: 'none' }}>
        <img 
          src="/lumina-full-logo-detailed.svg" 
          alt="Lumina - AI Study Helper" 
          style={{ height: '36px', cursor: 'pointer' }}
        />
      </Link>
      
      {/* Navigation Links */}
      <ul style={{ 
        listStyle: 'none', 
        display: 'flex', 
        gap: '2.5rem', 
        margin: 0, 
        padding: 0,
        alignItems: 'center'
      }}>
        <li>
          <Link to="/" style={{ 
            textDecoration: 'none', 
            color: '#fff', 
            fontWeight: '500',
            fontSize: '15px',
            transition: 'color 0.2s ease',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ 
            textDecoration: 'none', 
            color: '#fff', 
            fontWeight: '500',
            fontSize: '15px',
            transition: 'color 0.2s ease',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" style={{ 
            textDecoration: 'none', 
            color: '#fff', 
            fontWeight: '500',
            fontSize: '15px',
            transition: 'color 0.2s ease',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation; 