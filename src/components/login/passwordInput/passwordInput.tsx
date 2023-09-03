import { Box, IconButton, InputAdornment, TextField, Typography, useTheme } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Locker from 'assets/icons/locker.svg';
import { PasswordInputProps } from './interfaces/passwordInputProps';

const PasswordInput = ({
  inputId,
  inputName,
  showPassword,
  formErrors,
  handleMouseDownPassword,
  register,
  handleShowPassword,
}: PasswordInputProps) => {
  const theme = useTheme();

  return (
    <>
      <TextField
        placeholder={inputName}
        type={showPassword ? 'text' : 'password'}
        defaultValue=''
        {...register(inputId)}
        error={!!formErrors?.message}
        InputProps={{
          style: {
            height: 40,
            padding: `0 + ${theme.spacing(0.5)}`,
            borderRadius: 0,
            marginBottom: theme.spacing(1)
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
        <Typography
          role='alert'
          color={theme.palette.error.main}
          sx={{ fontSize: 14 }}
        >
          {formErrors.message}
        </Typography>
      ) : null}
    </>
  );
};

export default PasswordInput;
