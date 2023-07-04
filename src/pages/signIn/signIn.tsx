import { Grid, InputAdornment, TextField, Typography, useTheme } from '@mui/material';
import { FormEventHandler } from 'react';
import { UseFormRegister } from 'react-hook-form';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LoginRequest from './interfaces/loginRequest';
import ElementLink from '../../components/elementLink/elementLink';
import LoginWrapper from '../../components/loginWrapper/loginWrapper';
import MuiButton from '../../components/muiButton/muiButton';
import { useTranslations } from '../../hooks/useTranslations';
import ApplicationRoutes from '../../utils/navigation/applicationRoutes';

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
  const translations = useTranslations();

  return (
    <LoginWrapper>
      <>
        <Typography
          sx={{
            color: 'goldenYellow.main',
            fontSize: {
              xs: 35,
              md: 50
            },
            fontWeight: 'bold',
            textTransform: 'uppercase',
            WebkitTextStrokeColor: '#3B4CCA',
            WebkitTextStrokeWidth: 2,
          }}
        >
          {translations.login.title}
        </Typography>

        <Grid
          sx={{
            width: '100%',
          }}
        >
          <Typography
            sx={{
              color: 'darkGrey.main',
              textAlign: 'center',
              marginLeft: {
                xs: theme.spacing(13),
                md: theme.spacing(22),
              },
              fontStyle: 'italic',
              fontWeight: 100,
            }}
          >
            {translations.login.subtitle}
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
                xs: theme.spacing(3),
                md: theme.spacing(5)
              },
              padding: `0 + ${theme.spacing(2)}`,
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
                  padding: `0 + ${theme.spacing(0.5)}`,
                  borderRadius: 0,
                },
                startAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{
                      color: 'ceruleanBlue.main'
                    }}
                  >
                    <MailOutlineIcon />
                  </InputAdornment>
                ),
              }}

            />

            {formErrors.email ? (
              <Typography role='alert' color='bostonUniRed.main'>
                {formErrors.email?.message}
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
                  padding: `0 + ${theme.spacing(0.5)}`,
                  borderRadius: 0,
                  marginTop: 10,
                  marginBottom: 10,
                },
                endAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{
                      color: 'ceruleanBlue.main'
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
              text={translations.login.signIn}
            />

            <ElementLink
              link={ApplicationRoutes.signUp}
              text={translations.login.singUp}
            />
          </Grid>
        </form>
      </>
    </LoginWrapper>
  );
};

export default SignIn;
