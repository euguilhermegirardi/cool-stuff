import { makeStyles, Theme } from '@material-ui/core/styles';

export interface StyleProps {
  contentInnerWidth: number;
};

export const styles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  container: {
    [theme.breakpoints.up('lg')]: {
      padding: ({ contentInnerWidth }) => `15px calc(${contentInnerWidth}px - (${contentInnerWidth}px - 100px))`
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
    flex: 2,
    [theme.breakpoints.down('xs')]: {
      order: 1,
    },
    [theme.breakpoints.up('md')]: {
      order: 2,
    },
    [theme.breakpoints.down('md')]: {
      padding: '13px 10px'
    },
    [theme.breakpoints.up('md')]: {
      order: 2,
      padding: '13px 50px'
    },
    [theme.breakpoints.up('xl')]: {
      order: 2,
      padding: '13px 250px',
    },
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
    flex: 2,
    [theme.breakpoints.down('xs')]: {
      order: 1,
    },
    [theme.breakpoints.up('md')]: {
      order: 1,
    },
    [theme.breakpoints.down('md')]: {
      padding: '13px 10px'
    },
    [theme.breakpoints.up('md')]: {
      order: 2,
      padding: '13px 50px'
    },
    [theme.breakpoints.up('xl')]: {
      order: 2,
      padding: '13px 250px',
    },
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
    [theme.breakpoints.down('md')]: {
      fontSize: 16,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 17.5,
    },
    [theme.breakpoints.up('xl')]: {
      letterSpacing: theme.spacing(0.15),
    },
  },
  imageContent: {
    display: 'grid',
    placeSelf: 'center',
    width: 230,
    height: 'auto',
  },
}),
);
