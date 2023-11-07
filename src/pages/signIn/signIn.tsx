import { Box, Grid, Typography, useTheme } from '@mui/material';
import DangerousIcon from '@mui/icons-material/Dangerous';
import ElementLink from 'components/elementLink/elementLink';
import { ErrorFallbackComponent } from 'components/errorFallbackComponent/errorFallbackComponent';
import CoolStuffSubtitle from 'components/login/coolStuffSubtitle/coolStuffSubtitle';
import EmailInput from 'components/login/emailInput/emailInput';
import LoginTitle from 'components/login/loginTitle/loginTitle';
import LoginWrapper from 'components/login/loginWrapper/loginWrapper';
import PasswordInput from 'components/login/passwordInput';
import MuiButton from 'components/muiButton/muiButton';
import { useTranslations } from 'hooks/useTranslations';
import { withErrorBoundary } from 'react-error-boundary';
import ApplicationRoutes from 'utils/navigation/applicationRoutes';
import { SignInProps } from './interfaces/signInProps';

const SignIn = withErrorBoundary(({
  isLoading,
  notSignedIn,
  formErrors,
  register,
  onSubmit,
}: SignInProps) => {
  const theme = useTheme();
  const translations = useTranslations();

  return (
    <LoginWrapper>
      <>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <LoginTitle
            title={translations.login.title}
            fontSizeXs={40}
            fontSizeMd={50}
          />

          <CoolStuffSubtitle />
        </Grid>

        <form
          onSubmit={onSubmit()}
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%'
          }}
        >
          <Grid
            item
            sx={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: {
                xs: theme.spacing(3),
                md: theme.spacing(3)
              },
              padding: `0 + ${theme.spacing(2)}`,
              width: {
                xs: '100%',
                md: '90%',
              }
            }}
          >
            {notSignedIn ? (
              <Grid
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  border: `1px solid ${theme.palette.error.main}`,
                  mb: theme.spacing(1.5),
                  padding: theme.spacing(1, 2),
                }}
              >
                <DangerousIcon sx={{ color: `${theme.palette.error.main}` }} />

                <Typography
                  sx={{
                    color: `${theme.palette.error.main}`,
                    ml: theme.spacing(1),
                  }}
                >
                  {translations.login.notSignedIn}
                </Typography>
              </Grid>
            ) : null}

            <EmailInput
              register={register}
              formErrors={formErrors.email}
            />

            <PasswordInput
              inputId={translations.password}
              inputName={translations.password}
              formErrors={formErrors.password}
              register={register}
            />

            <MuiButton
              type='submit'
              color={theme.palette.ceruleanBlue && 'ceruleanBlue'}
              text={translations.login.signIn}
              isLoading={isLoading}
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
}, ErrorFallbackComponent);

export default SignIn;
