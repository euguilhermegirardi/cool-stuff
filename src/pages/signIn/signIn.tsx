import { Button, Grid, InputAdornment, Paper, styled, TextField, Typography } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const SignIn = () => {
  return (
    <Grid
      container
      justifyContent={'flex-start'}
      alignItems={'center'}
      flexDirection={'column'}
      sx={{
        margin: '0 auto',
        padding: '5rem 0',
        backgroundColor: '#fff',
        borderRadius: 2,
        width: {
          xs: 390,
          md: 500
        },
        height: {
          xs: 500,
          md: 650
        },
      }}
    >
      <Typography
        sx={{
          color: '#FFDE00',
          fontSize: {
            xs: 35,
            md: 50
          },
          fontWeight: 'bold',
          textTransform: 'uppercase',
          WebkitTextStrokeColor: 'blue',
          WebkitTextStrokeWidth: '1.5px',
        }}
      >
        Pokedex
      </Typography>

      <Grid
        sx={{
          width: '100%',
        }}
      >
        <Typography
          sx={{
            color: '#263238',
            textAlign: 'center',
            marginLeft: {
              xs: '7rem',
              md: '11rem'
            },
            fontStyle: 'italic',
            fontWeight: 100,
          }}
        >
          cool stuff
        </Typography>
      </Grid>

      <Grid
        item
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: {
            xs: '3rem',
            md: '5rem'
          },
          padding: '0 2rem',
          width: {
            xs: '100%',
            md: '90%',
          }
        }}
      >
        <TextField
          placeholder='email'
          type="text"
          InputProps={{
            style: {
              height: 40,
              padding: '0, 5px',
              borderRadius: 0,
            },
            startAdornment: (
              <InputAdornment
                position="start"
                sx={{
                  color: '#3B4CCA'
                }}
              >
                <MailOutlineIcon />
              </InputAdornment>
            ),
          }}

        />

        <TextField
          placeholder='password'
          type="password"
          InputProps={{
            style: {
              height: 40,
              padding: '0, 5px',
              borderRadius: 0,
              marginTop: '10px',
              marginBottom: '10px',
            },
            endAdornment: (
              <InputAdornment
                position="start"
                sx={{
                  color: '#3B4CCA'
                }}
              >
                <VisibilityOffIcon />
              </InputAdornment>
            ),
          }}

        />

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#3B4CCA',
            color: '#FFDE00',
            marginTop: '1rem',
            height: {
              xs: 'unset',
              md: '3rem'
            }
          }}
        >
          Sign In
        </Button>
      </Grid>
    </Grid>
  );
};

export default SignIn;
