import Button from '@mui/material/Button';
import Image from 'next/image';
import { Box } from '@mui/material';

const Header = () => {
  const buttonStyle = {
    backgroundColor: '#11c77b',
    borderRadius: '20px',
    boxShadow: 'none',
    padding: '8px 20px',
    '&:hover': { backgroundColor: 'black' },
    // Styles responsives pour le bouton
    '@media (max-width: 600px)': {
      padding: '6px 15px', // Plus petit padding en mode mobile
      fontSize: '0.7rem', // Réduction de la taille de la police
    },
    '@media (max-width: 370px)': {
      padding: '5px 10px', // Plus petit padding en mode mobile
      fontSize: '0.7rem', // Réduction de la taille de la police
    },
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    maxWidth: '1200px',
    margin: 'auto',
    borderBottom: '2px solid #d8e5e6',
    '@media (max-width: 600px)': {
      padding: '10px',
      paddingBottom: '30px',
    },
  };

  const logoBoxStyle = {
    // Styles responsives pour le conteneur du logo
    width: '180px',
    height: '90px',
    '@media (max-width: 600px)': {
      width: '120px',
      height: '60px',
    },
    '@media (max-width: 370px)': {
      width: '100px',
      height: '40px',
    },
  };

  const starsBoxStyle = {
    // Styles responsives pour le conteneur des étoiles
    width: '100px',
    height: '20px',
    '@media (max-width: 600px)': {
      width: '70px',
      height: '14px',
    },
    '@media (max-width: 370px)': {
      width: '50px',
      height: '10px',
    },
  };

  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '40px',
    '@media (max-width: 600px)': {
      gap: '10px',
    },
  };

  return (
    <Box component="header" sx={headerStyle}>
      <Box
        sx={logoBoxStyle} // Styles responsives pour le conteneur
      >
        <Image
          src="/logo-NCP.png"
          alt="Logo NCP"
          layout="responsive"
          width={180}
          height={90}
        />
      </Box>
      <Box component="nav" sx={navStyle}>
        <Box
          sx={starsBoxStyle} // Styles responsives pour le conteneur
        >
          <Image
            src="/stars-newGreen-2.png"
            alt="stars"
            layout="responsive"
            width={100}
            height={20}
          />
        </Box>
        <Button
          variant="contained"
          sx={buttonStyle} // Utilisation des styles MUI responsives
          href="https://calendly.com/conseiller-patrimonial-ncp/audit-patrimonial-offert"
        >
          Prendre RDV
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
