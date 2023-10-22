import { Grid, InputAdornment, TextField, Typography, useTheme } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GhostImg from 'assets/images/ghost.png';
import Pokeball from 'assets/images/pokeball.png';
import MuiButton from 'components/muiButton/muiButton';
import MuiToolbar from 'components/muiToolbar/muiToolbar';
import MuiSkeleton from 'components/skeleton/muiSkeleton';
import { useTranslations } from 'hooks/useTranslations';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { navbarPages } from 'shared/css/navbarPages.styles';
import { ContactUsProps } from './interfaces/contactUsProps';

const ContactUs = ({
  isLoading,
  register,
  formErrors,
  onSubmit,
}: ContactUsProps) => {
  const theme = useTheme();
  const classes = navbarPages();
  const translations = useTranslations();

  return (
    <Grid
      display={'flex'}
      flexDirection={'column'}
      sx={{
        padding: theme.spacing(3),
        width: '100%',
        height: '100vh'
      }}
    >
      <MuiToolbar />

      <Grid className={classes.mainContent} sx={{ height: '100%' }}>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: {
              xs: 'space-between',
              md: 'flex-start'
            },
            flexWrap: 'wrap',
            height: '100%'
          }}
        >
          <Grid display={'flex'} flexDirection={'column'}>
            <Typography className={classes.title}>
              {translations.contactUs.title}
            </Typography>

            <Grid maxWidth={'50%'}>
              <Typography fontSize={22} mb={2} sx={{ display: { xs: 'none', lg: 'block' } }}>
                {translations.contactUs.subtitle}
              </Typography>
            </Grid>
          </Grid>

          <Grid
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'flex-start'}
            sx={{
              flexDirection: {
                xs: 'column',
                lg: 'row'
              },
              marginTop: {
                sx: 0,
                lg: 2
              }
            }}
          >
            <Grid flex={2} width={'100%'} mb={2}>
              <form
                name='contact'
                data-netlify='true'
                onSubmit={onSubmit()}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  width: '100%'
                }}
              >
                <input type="hidden" name="form-name" value="contact" />

                <TextField
                  placeholder='name'
                  type='text'
                  defaultValue=''
                  {...register('name')}
                  error={!!formErrors?.name?.message}
                  InputProps={{
                    style: {
                      height: 40,
                      paddingLeft: theme.spacing(0.5),
                      borderRadius: 0,
                      marginBottom: 20
                    },
                    startAdornment: (
                      <InputAdornment
                        position="start"
                      >
                        <img src={Pokeball} alt="pokeball-icon" style={{ width: 30 }} />
                      </InputAdornment>
                    ),
                  }}
                />

                {formErrors?.name?.message ? (
                  <Typography
                    role='alert'
                    color={theme.palette.error.main}
                    sx={{ fontSize: 14, marginBottom: theme.spacing(1) }}
                  >
                    {formErrors?.name?.message}
                  </Typography>
                ) : null}

                <TextField
                  placeholder='email'
                  type='text'
                  defaultValue=''
                  {...register('email')}
                  error={!!formErrors?.email?.message}
                  InputProps={{
                    style: {
                      height: 40,
                      paddingLeft: theme.spacing(0.5),
                      borderRadius: 0,
                      marginBottom: 20
                    },
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        sx={{ color: '#000' }}
                      >
                        <MailOutlineIcon sx={{ width: 30 }} />
                      </InputAdornment>
                    ),
                  }}
                />

                {formErrors?.email?.message ? (
                  <Typography
                    role='alert'
                    color={theme.palette.error.main}
                    sx={{ fontSize: 14, marginBottom: theme.spacing(1) }}
                  >
                    {formErrors?.email?.message}
                  </Typography>
                ) : null}

                <TextField
                  placeholder='Message...'
                  type='text'
                  defaultValue=' '
                  {...register('message')}
                  error={!!formErrors?.message?.message}
                  InputProps={{
                    style: {
                      marginBottom: 20
                    }
                  }}
                  multiline
                  minRows={4}
                  maxRows={10}
                />

                {formErrors?.message?.message ? (
                  <Typography
                    role='alert'
                    color={theme.palette.error.main}
                    sx={{ fontSize: 14, marginBottom: theme.spacing(1) }}
                  >
                    {formErrors?.message?.message}
                  </Typography>
                ) : null}

                <MuiButton
                  type='submit'
                  color={theme.palette.ceruleanBlue && 'ceruleanBlue'}
                  text={'submit'}
                  isLoading={isLoading}
                />
              </form>
            </Grid>

            <Grid
              flex={2}
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'flex-end'}
              width={'100%'}
              sx={{
                '& > span': {
                  display: 'flex !important',
                  justifyContent: 'center'
                }
              }}
            >
              <LazyLoadImage
                src={GhostImg}
                placeholder={
                  <MuiSkeleton
                    variant='rounded'
                    width={345}
                    height={227}
                  />
                }
                effect='blur'
                width='100%'
                height='auto'
                alt='ghost-pokemon'
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  maxWidth: '400px',
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactUs;
