import { Button } from '@mui/material';

const Footer = () => {
  const footerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    maxWidth: '1200px',
    margin: 'auto',
    borderTop: '2px solid #d8e5e6',
  };
  const footerButtonStyle = {
    color: '#0c1629',
    textTransform: 'none' as const,
    fontSize: '16px',
    fontWeight: '400',
  };

  return (
    <footer style={footerStyle}>
      <p style={{ color: '#0c1629' }}>
        Tous droits réservés © Cabinet NCP {new Date().getFullYear()}
      </p>
      <Button href="/" style={footerButtonStyle}>
        Politique de confidentialités
      </Button>
    </footer>
  );
};

export default Footer;
