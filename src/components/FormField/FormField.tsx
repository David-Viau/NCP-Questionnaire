import { Button, TextField, Box, MenuItem, Typography } from '@mui/material';

export default function FormPropsTextFields() {
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
  };
  const investExp = [
    {
      value: 'novice',
      label: 'Novice',
    },
    {
      value: 'intermediaire',
      label: 'Intermédiaire',
    },
    {
      value: 'expert',
      label: 'Expert',
    },
  ];

  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, maxWidth: '30ch' } }}
      noValidate
      autoComplete="on"
    >
      <div
        style={{
          marginBottom: '20px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <TextField required id="outlined-name" label="Nom" type="text" />
        <TextField required id="outlined-age" label="Email" type="email" />
        <TextField
          select
          id="outlined-exp"
          label="Expérience en investissement"
          type="select"
        >
          {investExp.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          id="outlined-phone"
          label="Numéro de téléphone"
          type="text"
        />
        <Typography variant="body2" color="textSecondary">
          Données protégées. Respect des lois RGPD.
        </Typography>
      </div>
      <Button variant="contained" sx={buttonStyle} type="submit">
        Envoyer
      </Button>
    </Box>
  );
}
