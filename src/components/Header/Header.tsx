import Button from '@mui/material/Button';
import Image from 'next/image';

const Header = () => {
  const buttonStyle = {
    backgroundColor: '#11c77b',
    borderRadius: '20px',
    boxShadow: 'none',
    padding: '10px 40px',
    '&:hover': { backgroundColor: 'black' },
  };
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    maxWidth: '1200px',
    margin: 'auto',
    borderBottom: '2px solid #d8e5e6',
  };

  return (
    <header style={headerStyle}>
      <span>
        <Image src="/logo-NCP.png" alt="Logo NCP" width={180} height={90} />
      </span>
      <nav>
        <Button
          variant="contained"
          style={buttonStyle}
          href="https://calendly.com/conseiller-patrimonial-ncp/audit-patrimonial-offert"
        >
          Prendre RDV
        </Button>
      </nav>
    </header>
  );
};

export default Header;
