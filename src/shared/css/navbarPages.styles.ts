import { makeStyles } from '@material-ui/core/styles';

export const navbarPages = makeStyles((theme) => ({
  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    padding: theme.spacing(5, 8),
    border: '2px',
    borderRadius: 3,
    boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px',
  },
  title: {
    fontSize: 20,
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'flex-start',
    },
    textTransform: 'uppercase',
    fontWeight: 600,
    marginBottom: 10,
  },
}),
);
