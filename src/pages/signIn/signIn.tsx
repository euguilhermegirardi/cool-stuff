import { Grid, useTheme } from '@mui/material';
import { FormEventHandler } from 'react';
import { UseFormRegister } from 'react-hook-form';
import LoginRequest from './interfaces/loginRequest';
import ElementLink from '../../components/elementLink/elementLink';
import CoolStuffSubtitle from '../../components/login/coolStuffSubtitle/coolStuffSubtitle';
import EmailInput from '../../components/login/emailInput/emailInput';
import LoginTitle from '../../components/login/loginTitle/loginTitle';
import LoginWrapper from '../../components/login/loginWrapper/loginWrapper';
import PasswordInput from '../../components/login/passwordInput';
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
        <LoginTitle title={translations.login.title} />

        <CoolStuffSubtitle width={'50%'} />

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
            <EmailInput
              register={register}
              formErrors={formErrors}
            />

            <PasswordInput
              autoFocus={false}
              register={register}
              formErrors={formErrors.password}
              inputId={'12'}
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
