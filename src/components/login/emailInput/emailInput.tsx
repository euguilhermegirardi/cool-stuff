import { InputAdornment, TextField, Typography, useTheme } from '@mui/material';
import { UseFormRegister } from 'react-hook-form';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const EmailInput = ({
  register,
  formErrors,
}: {
  register: UseFormRegister<any>;
  formErrors: {
    email?: {
      message?: string;
    };
  };
}) => {
  const theme = useTheme();

  return (
    <>
      <TextField
        placeholder='email'
        type="text"
        defaultValue=''
        {...register('email')}
        error={formErrors.email?.message ? true : false}
        InputProps={{
          style: {
            height: 40,
            padding: `0 + ${theme.spacing(0.5)}`,
            borderRadius: 0,
          },
          startAdornment: (
            <InputAdornment
              position="start"
              sx={{
                color: 'ceruleanBlue.main'
              }}
            >
              <MailOutlineIcon />
            </InputAdornment>
          ),
        }}
      />

      {formErrors?.email ? (
        <Typography
          role='alert'
          color={theme.palette.error.main}
          sx={{ fontSize: 14 }}
        >
          {formErrors.email?.message}
        </Typography>
      ) : null}
    </>
  );
};

export default EmailInput;
