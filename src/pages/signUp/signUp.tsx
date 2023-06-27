import { Button, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ElementLink from '../../components/elementLink/elementLink';
import LoginWrapper from '../../components/loginWrapper/loginWrapper';

const SignUp = () => {
  return (
    <LoginWrapper>
      <>
        <Typography
          sx={{
            color: '#FFDE00',
            fontSize: {
              xs: 30,
              md: 38
            },
            fontWeight: 'bold',
            textTransform: 'uppercase',
            WebkitTextStrokeColor: 'blue',
            WebkitTextStrokeWidth: '1.5px',
          }}
        >
          Sign Up to Pokedex
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
                xs: '16rem',
                md: '22rem'
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

          <TextField
            placeholder='repeat password'
            type="password"
            InputProps={{
              style: {
                height: 40,
                padding: '0, 5px',
                borderRadius: 0,
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
            Register
          </Button>

          <ElementLink
            link={'/'}
            text={'return'}
          />
        </Grid>
      </>
    </LoginWrapper>
  );
};

export default SignUp;
