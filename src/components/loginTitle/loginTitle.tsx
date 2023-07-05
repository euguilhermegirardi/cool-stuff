import { Typography } from '@mui/material';

const LoginTitle = ({
  title,
  fontSize,
}: {
  title: string;
  fontSize: number;
}) => {

  return (
    <Typography
      sx={{
        color: 'goldenYellow.main',
        fontSize: {
          xs: 35,
          md: fontSize
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
