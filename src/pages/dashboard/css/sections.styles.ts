import { makeStyles, Theme } from '@material-ui/core/styles';

export const styles = makeStyles(({ breakpoints }: Theme) => ({
  mainSection: {
    paddingTop: 4,
    paddingBottom: 3
  },
  firstSection: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    [breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    alignItems: 'flex-start',
    margin: '0 15px',
    padding: '15px 0'
  },
  evenTxtSection: {
    [breakpoints.down('xs')]: {
      order: 1,
    },
    [breakpoints.up('md')]: {
      order: 2,
    },
    flex: 2,
    padding: '13px 10px'
  },
  evenImgSection: {
    [breakpoints.down('xs')]: {
      order: 2,
    },
    [breakpoints.up('md')]: {
      order: 1,
    },
  },
  oddTxtSection: {
    [breakpoints.down('xs')]: {
      order: 1,
    },
    [breakpoints.up('md')]: {
      order: 1,
    },
    flex: 2,
    padding: '13px 10px'
  },
  oddImgSection: {
    [breakpoints.down('xs')]: {
      order: 2,
    },
    [breakpoints.up('md')]: {
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%'
  },
  image: {
    maxHeight: 180,
    maxWidth: 180,
  }
}),
);
