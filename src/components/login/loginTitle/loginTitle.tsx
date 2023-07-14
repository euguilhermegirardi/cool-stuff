import { Typography } from '@mui/material';

const LoginTitle = ({
  title,
  fontSizeXs,
}: {
  title: string,
  fontSizeXs?: number
}) => {
  return (
    <Typography
      sx={{
        color: 'goldenYellow.main',
        fontSize: {
          xs: fontSizeXs,
          md: 50
        },
        fontWeight: {
          xs: 'unset',
          md: 'bold'
        },
        textTransform: 'uppercase',
        textAlign: 'center',
        WebkitTextStrokeColor: '#3B4CCA',
        WebkitTextStrokeWidth: {
          xs: 0.5,
          sm: 1,
          md: 2
        },
      }}
    >
      {title}
    </Typography>
  )
};

export default LoginTitle;
