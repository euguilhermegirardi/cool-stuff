import { InputAdornment, TextField, Typography, useTheme } from '@mui/material';
import { UseFormRegister } from 'react-hook-form';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const EmailInput = ({
  register,
  formErrors,
}: {
  register: UseFormRegister<any>;
  formErrors?: {
    message?: string;
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
        error={!!formErrors?.message}
        InputProps={{
          style: {
            height: 40,
            padding: `0 + ${theme.spacing(0.5)}`,
            borderRadius: 0,
            marginBottom: theme.spacing(1)
          },
          startAdornment: (
            <InputAdornment
              position="start"
              sx={{ color: 'ceruleanBlue.main' }}
            >
              <MailOutlineIcon />
            </InputAdornment>
          ),
        }}
      />

      {formErrors ? (
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

export default EmailInput;
