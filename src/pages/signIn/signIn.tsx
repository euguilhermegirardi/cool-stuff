import { Checkbox, Grid, Typography, useTheme } from '@mui/material';
import { SignInProps } from './interfaces/signInProps';
import ElementLink from '../../components/elementLink/elementLink';
import CoolStuffSubtitle from '../../components/login/coolStuffSubtitle/coolStuffSubtitle';
import EmailInput from '../../components/login/emailInput/emailInput';
import LoginTitle from '../../components/login/loginTitle/loginTitle';
import LoginWrapper from '../../components/login/loginWrapper/loginWrapper';
import PasswordInput from '../../components/login/passwordInput';
import { MuiCheckBox, MuiCheckedItemBox } from '../../components/login/styledCheckbox/styledCheckbox';
import MuiButton from '../../components/muiButton/muiButton';
import { useTranslations } from '../../hooks/useTranslations';
import ApplicationRoutes from '../../utils/navigation/applicationRoutes';

const SignIn = ({
  defaultValue,
  formErrors,
  register,
  handleRememberMe,
  onSubmit,
}: SignInProps) => {
  const theme = useTheme();
  const translations = useTranslations();

  return (
    <LoginWrapper>
      <>
        <Grid display={'flex'} flexDirection={'column'} alignItems={'flex-end'}>
          <LoginTitle
            title={translations.login.title}
            fontSizeXs={40}
          />

          <CoolStuffSubtitle width={'50%'} />
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
              inputId={'12'}
            />

            <Grid
              item
              sx={{
                display: 'flex',
                alignItems: 'center',
                height: theme.spacing(6.5),
                mb: 3,
              }}
            >
              <Checkbox
                disableRipple
                defaultChecked={defaultValue ? true : false}
                icon={<MuiCheckBox />}
                checkedIcon={<MuiCheckedItemBox />}
                inputProps={{ 'aria-label': 'remember_me_checkbox' }}
                onChange={handleRememberMe}
                sx={{
                  padding: theme.spacing(1, 1, 1, 0.2)
                }}
              />
              <Typography
                sx={{
                  fontSize: 15,
                  color: 'ceruleanBlue.main'
                }}
              >
                {translations.login.rememberMe}
              </Typography>
            </Grid>

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
