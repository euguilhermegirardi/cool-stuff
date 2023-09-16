import { Grid, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ElementLinkProps from './interfaces/elementLinkProps';

const ElementLink = ({
  link,
  text,
}: ElementLinkProps) => {
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
            fontSize: 13,
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
