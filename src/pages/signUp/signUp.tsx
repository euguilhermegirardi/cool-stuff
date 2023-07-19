import { Grid, Typography, useTheme } from '@mui/material';
import { SignUpProps } from './interfaces/signUpProps';
import ElementLink from '../../components/elementLink/elementLink';
import CoolStuffSubtitle from '../../components/login/coolStuffSubtitle/coolStuffSubtitle';
import EmailInput from '../../components/login/emailInput/emailInput';
import LoginTitle from '../../components/login/loginTitle/loginTitle';
import LoginWrapper from '../../components/login/loginWrapper/loginWrapper';
import PasswordInput from '../../components/login/passwordInput';
import MuiButton from '../../components/muiButton/muiButton';
import { useTranslations } from '../../hooks/useTranslations';

const SignUp = ({
  passwordDoNotMatch,
  formErrors,
  register,
  validateInput,
  onSubmit,
}: SignUpProps) => {
  const theme = useTheme();
  const translations = useTranslations();

  return (
    <LoginWrapper>
      <>
        <Grid
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          sx={{ width: '100%' }}
        >
          <LoginTitle title={translations.signUp.signUpToPokedex} />

          <CoolStuffSubtitle />
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
              formErrors={formErrors}
            />

            <PasswordInput
              autoFocus={false}
              register={register}
              formErrors={formErrors.password}
              inputId={translations.password}
              validateInput={validateInput}
            />

            <PasswordInput
              autoFocus={false}
              register={register}
              formErrors={formErrors.password}
              inputId={translations.signUp.confirmPasswordId}
              validateInput={validateInput}
            />

            {passwordDoNotMatch ? (
              <Typography
                sx={{
                  margin: theme.spacing(-1, 0, 2, 0),
                  fontSize: 14,
                  color: theme.palette.error.main
                }}
              >
                {translations.signUp.doNotMatch}
              </Typography>
            ) : null}

            <MuiButton
              type='submit'
              color='ceruleanBlue'
              text={translations.signUp.register}
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
};

export default SignUp;
