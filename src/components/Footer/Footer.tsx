import { Button, Typography } from '@mui/material';

const Footer = () => {
  const footerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    maxWidth: '1200px',
    margin: 'auto',
    borderTop: '2px solid #d8e5e6',
    color: '#0c1629',
    '@media (max-width: 600px)': {
      padding: '10px',
    },
  };

  const copyrightStyle = {
    color: '#0c1629',
    '@media (max-width: 600px)': {
      fontSize: '14px',
    },
  };
  const footerButtonStyle = {
    color: '#0c1629',
    textTransform: 'none' as const,
    fontSize: '16px',
    fontWeight: '400',
    textAlign: 'center',
    '@media (max-width: 600px)': {
      fontSize: '14px',
    },
  };

  return (
    <footer style={footerStyle}>
      <Typography sx={copyrightStyle}>
        Tous droits réservés © Cabinet NCP {new Date().getFullYear()}
      </Typography>
      <Button
        href="https://notreconseillerpatrimonial.com/politique-de-confidentialite"
        sx={footerButtonStyle}
      >
        Politique de confidentialités
      </Button>
    </footer>
  );
};

export default Footer;
