import { Button, Grid, InputAdornment, TextField, useTheme } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ElementLink from '../../components/elementLink/elementLink';
import CoolStuffSubtitle from '../../components/login/coolStuffSubtitle/coolStuffSubtitle';
import LoginTitle from '../../components/login/loginTitle/loginTitle';
import LoginWrapper from '../../components/login/loginWrapper/loginWrapper';
import { useTranslations } from '../../hooks/useTranslations';

const SignUp = () => {
  const theme = useTheme();
  const translations = useTranslations();

  return (
    <LoginWrapper>
      <>
        <LoginTitle title={translations.signUp.signUpToPokedex} />

        <CoolStuffSubtitle width={'83%'} />

        <Grid
          item
          sx={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: {
              xs: theme.spacing(3),
              md: theme.spacing(4)
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
            {translations.signUp.register}
          </Button>

          <ElementLink
            link={'/'}
            text={translations.return}
          />
        </Grid>
      </>
    </LoginWrapper>
  );
};

export default SignUp;
