import { Typography } from '@mui/material';

const LoginTitle = ({
  title,
  fontSizeXs,
}: {
  title: string,
  fontSizeXs: number
}) => {
  return (
    <Typography
      sx={{
        color: 'goldenYellow.main',
        fontSize: {
          xs: fontSizeXs,
          md: 50
        },
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        WebkitTextStrokeColor: '#3B4CCA',
        WebkitTextStrokeWidth: 2,
      }}
    >
      {title}
    </Typography>
  )
};

export default LoginTitle;
