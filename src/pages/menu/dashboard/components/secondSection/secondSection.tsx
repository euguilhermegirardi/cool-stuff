import { Grid, Typography } from '@mui/material';
import AerodactylImg from 'assets/images/aerodactyl.png';
import clsx from 'clsx';
import MuiSkeleton from 'components/skeleton/muiSkeleton';
import { useTranslations } from 'hooks/useTranslations';
import { styles } from 'pages/menu/dashboard/css/sections.styles';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const SecondSection = (contentInnerWidth: any) => {
  const classes = styles(contentInnerWidth);
  const translations = useTranslations();

  return (
    <Grid
      className={classes.container}
      sx={{
        backgroundColor: '#b3a1254d',
        color: 'darkGrey.main',
      }}
    >
      <Grid className={classes.section}>
        <Grid className={classes.oddTxtSection}>
          <Typography className={classes.title}>
            {translations.dashboard.exploreTitle}
          </Typography>

          <Typography className={classes.text}>
            {translations.dashboard.exploreTxt}
          </Typography>
        </Grid>

        <Grid className={clsx(classes.imageContent, classes.oddImgSection)}>
          <LazyLoadImage
            src={AerodactylImg}
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
            alt='aerodactly-image'
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SecondSection;
