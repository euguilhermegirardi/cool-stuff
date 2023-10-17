import { Grid, Typography } from '@mui/material';
import CharizardImg from 'assets/images/charizard.png';
import clsx from 'clsx';
import MuiSkeleton from 'components/skeleton/muiSkeleton';
import { useTranslations } from 'hooks/useTranslations';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { styles } from '../../css/sections.styles';

const FifthSection = (contentInnerWidth: any) => {
  const classes = styles(contentInnerWidth);
  const translations = useTranslations();

  return (
    <Grid className={classes.container}
      sx={{
        backgroundColor: '#b3a1254d',
        color: 'darkGrey.main',
      }}
    >
      <Grid className={classes.section}>
        <Grid className={classes.evenTxtSection}>
          <Typography className={classes.title}>
            {translations.dashboard.connectTitle}
          </Typography>

          <Typography className={classes.text}>
            {translations.dashboard.connectTxt}
          </Typography>
        </Grid>

        <Grid className={clsx(classes.imageContent, classes.oddImgSection)}>
          <LazyLoadImage
            src={CharizardImg}
            placeholder={
              <MuiSkeleton
                variant='rounded'
                width={180}
                height={180}
              />
            }
            effect='blur'
            width='100%'
            height='auto'
            alt='charmander-image'
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FifthSection;
