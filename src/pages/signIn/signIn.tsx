import { Checkbox, Grid, Typography, useTheme } from '@mui/material';
import DangerousIcon from '@mui/icons-material/Dangerous';
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
  notSignedIn,
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
        <Grid
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          sx={{ width: '100%' }}
        >
          <LoginTitle
            title={translations.login.title}
            fontSizeXs={40}
          />

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
              formErrors={formErrors}
            />

            <PasswordInput
              autoFocus={false}
              register={register}
              formErrors={formErrors.password}
              inputId={translations.password}
            />

            <Grid
              item
              sx={{
                display: 'flex',
                alignItems: 'center',
                height: theme.spacing(6.5),
                mb: theme.spacing(3),
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
