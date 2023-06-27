import { Grid, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const ElementLink = ({
  link,
  text,
  onClick,
}: {
  link: string;
  text: string;
  onClick?: () => void;
}) => {
  return (
    <Grid
      item
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Link
        component={RouterLink}
        to={link}
        onClick={onClick}
        sx={{
          textTransform: 'uppercase',
          textDecoration: 'none',
        }}
      >
        <Typography
          variant='body1'
          sx={{
            marginTop: 3,
            fontWeight: 'bold',
            fontSize: '13px',
            textDecoration: 'underline',
            '&:hover': {
              opacity: 0.5,
              transition: '0.2s ease-in',
            }
          }}
        >
          {text}
        </Typography>
      </Link>
    </Grid>
  );
};

export default ElementLink;
