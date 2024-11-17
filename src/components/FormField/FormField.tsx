import { Button, TextField, Box, MenuItem } from '@mui/material';

export default function FormPropsTextFields() {
  const buttonStyle = {
    backgroundColor: '#11c77b',
    borderRadius: '20px',
    boxShadow: 'none',
    padding: '10px 40px',
    '&:hover': { backgroundColor: 'black' },
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
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
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
        <TextField required id="outlined-age" label="Age" type="text" />
        <TextField
          required
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
        <TextField required id="outlined-name" label="Nom" type="text" />
        <TextField
          required
          id="outlined-phone"
          label="Numéro de téléphone"
          type="text"
        />
      </div>
      <Button variant="contained" style={buttonStyle} type="submit">
        Envoyer
      </Button>
    </Box>
  );
}
