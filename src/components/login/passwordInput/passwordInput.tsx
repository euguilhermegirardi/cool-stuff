import { Box, IconButton, InputAdornment, TextField, Typography, useTheme } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { PasswordInputProps } from './interfaces/passwordInputProps';
import Locker from '../../../assets/icons/locker.svg';

const PasswordInput = ({
  autoFocus,
  register,
  formErrors,
  showPassword,
  handleShowPassword,
  handleMouseDownPassword,
  inputId,
}: PasswordInputProps) => {
  const theme = useTheme();

  return (
    <>
      <TextField
        placeholder='password'
        type={showPassword ? 'text' : 'password'}
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
          startAdornment: (
            <InputAdornment position='start'
              sx={{
                color: 'ceruleanBlue.main'
              }}
            >
              <Box
                component='img'
                alt='password-locker'
                src={Locker}
                sx={{ color: 'ceruleanBlue.main' }}
              />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge='end'
                sx={{
                  color: 'ceruleanBlue.main'
                }}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}

      />

      {formErrors?.message ? (
        <Typography role='alert' color={theme.palette.error.main}>
          {formErrors.message}
        </Typography>
      ) : null}
    </>
  );
};

export default PasswordInput;
