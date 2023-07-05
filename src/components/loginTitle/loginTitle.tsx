import { Typography } from '@mui/material';

const LoginTitle = ({ title }: { title: string }) => {
  return (
    <Typography
      sx={{
        color: 'goldenYellow.main',
        fontSize: {
          xs: 30,
          md: 38
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
