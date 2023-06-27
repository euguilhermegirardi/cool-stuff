import { Grid, Typography } from '@mui/material';
import ElementLink from '../../components/elementLink/elementLink';
import LoginWrapper from '../../components/loginWrapper/loginWrapper';

const NotFound = () => {
  return (
    <LoginWrapper>
      <>
        <Typography
          sx={{
            color: '#FFDE00',
            fontSize: 28,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            textAlign: 'center',
            WebkitTextStrokeColor: 'blue',
            WebkitTextStrokeWidth: '1px',
          }}
        >
          Something went wrong: 404!
        </Typography>

        <ElementLink
          link={'/'}
          text={'return'}
        />
      </>
    </LoginWrapper>
  );
};

export default NotFound;
