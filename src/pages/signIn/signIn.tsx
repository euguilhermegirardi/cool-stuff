import { Button, Grid, InputAdornment, Paper, styled, TextField, Typography, useTheme } from '@mui/material';
import { FormEventHandler } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LoginRequest from './interfaces/loginRequest';
import ElementLink from '../../components/elementLink/elementLink';
import LoginWrapper from '../../components/loginWrapper/loginWrapper';
import MuiButton from '../../components/muiButton/muiButton';

const SignIn = ({
  onSubmit,
  register,
  formErrors,
}: {
  onSubmit: () => FormEventHandler<HTMLFormElement> | undefined;
  register: UseFormRegister<LoginRequest>;
  formErrors: {
    email?: {
      message?: string;
    };
    password?: {
      message?: string;
    };
  };
}) => {

  const theme = useTheme();

  return (
    <LoginWrapper>
      <>
        <Typography
          sx={{
            color: theme.palette.secondary.main,
            fontSize: {
              xs: 35,
              md: 50
            },
            fontWeight: 'bold',
            textTransform: 'uppercase',
            WebkitTextStrokeColor: theme.palette.primary.main,
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

        <form
          onSubmit={onSubmit()}
          style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
        >
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
              defaultValue=''
              {...register('email')}
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

            {formErrors.email ? (
              <Typography role='alert' color='red'>
                {/* {formErrors.email?.message} */}
                error
              </Typography>
            ) : null}

            <TextField
              placeholder='password'
              type="password"
              defaultValue=''
              {...register('password')}
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

            <MuiButton
              type='submit'
              color='ceruleanBlue'
              text='Sign In'
            />

            <ElementLink
              link={'/sign-up'}
              text={'sign up'}
            />
          </Grid>
        </form>
      </>
    </LoginWrapper>
  );
};

export default SignIn;
