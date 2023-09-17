import { makeStyles, Theme } from '@material-ui/core/styles';

export const styles = makeStyles((theme: Theme) => ({
  container: {
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1, 2)
    },
  },
  section: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    alignItems: 'flex-start',
    margin: '0 15px',
    padding: '15px 0'
  },
  evenTxtSection: {
    [theme.breakpoints.down('xs')]: {
      order: 1,
    },
    [theme.breakpoints.up('md')]: {
      order: 2,
    },
    flex: 2,
    padding: '13px 10px'
  },
  evenImgSection: {
    [theme.breakpoints.down('xs')]: {
      order: 2,
    },
    [theme.breakpoints.up('md')]: {
      order: 1,
    },
  },
  oddTxtSection: {
    [theme.breakpoints.down('xs')]: {
      order: 1,
    },
    [theme.breakpoints.up('md')]: {
      order: 1,
    },
    flex: 2,
    padding: '13px 10px'
  },
  oddImgSection: {
    mixBlendMode: 'multiply',
    [theme.breakpoints.down('xs')]: {
      order: 2,
    },
    [theme.breakpoints.up('md')]: {
      order: 2,
    },
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 3
  },
  text: {
    textAlign: 'justify',
    fontSize: 17,
  },
  imageContent: {
    display: 'grid',
    placeSelf: 'center',
    width: 230,
    height: 'auto',
  },
}),
);
