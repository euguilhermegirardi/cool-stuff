import { Box, Grid, InputAdornment, Paper, styled, TextField, Typography } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ElementWrapper from '../../components/elementWrapper/elementWrapper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const SignIn = () => {
  return (
    <Grid
      container
      justifyContent={'space-evenly'}
      alignItems={'center'}
      flexDirection={'column'}
      sx={{
        margin: '0 auto',
        width: {
          xs: 390,
          md: 500
        },
        height: {
          xs: 500,
          md: 650
        },
        backgroundColor: '#fff',
        borderRadius: 3,
      }}
    >
      <ElementWrapper xs={4}>
        <Typography
          sx={{
            color: '#f7f7',
            fontSize: 30,
            fontWeight: 'bold',
            textTransform: 'uppercase'
          }}
        >
          Sign In
        </Typography>
      </ElementWrapper>

      <ElementWrapper xs={6}>
        <Grid item sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField 
            placeholder='email'
            variant='outlined'
            type="text"
            InputProps={{
              style: {
                height: 40,
                padding: '0, 5px',
                borderRadius: 0,
              },
              startAdornment: (
                <InputAdornment position="start">
                  <Box component="img" alt="Search" src={MailOutlineIcon} />
                </InputAdornment>
              ),
            }}
          
          />
          <input type="text" />
        </Grid>
      </ElementWrapper>

      <ElementWrapper xs={2}>
        <button>Sign In</button>
      </ElementWrapper>
    </Grid>
  );
};

export default SignIn;
