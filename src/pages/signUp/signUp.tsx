import { Grid, useTheme } from '@mui/material';
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
import { SignUpProps } from './interfaces/signUpProps';

const SignUp = withErrorBoundary(({
  isLoading,
  formErrors,
  register,
  onSubmit,
}: SignUpProps) => {
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
            title={translations.signUp.signUpToPokedex}
            fontSizeMd={40}
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

            <PasswordInput
              inputId={translations.signUp.confirmPasswordId}
              inputName={translations.signUp.confirmPassword}
              formErrors={formErrors.confirmPassword}
              register={register}
            />

            <MuiButton
              type='submit'
              color={theme.palette.ceruleanBlue && 'ceruleanBlue'}
              text={translations.signUp.register}
              isLoading={isLoading}
            />

            <ElementLink
              link={'/'}
              text={translations.return}
            />
          </Grid>
        </form>
      </>
    </LoginWrapper>
  );
}, ErrorFallbackComponent);

export default SignUp;
