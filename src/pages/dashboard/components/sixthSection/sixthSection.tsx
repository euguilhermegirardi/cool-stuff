import { Grid, Typography } from '@mui/material';
import SquirtleImg from 'assets/images/squirtle.jpeg';
import clsx from 'clsx';
import MuiSkeleton from 'components/skeleton/muiSkeleton';
import { useTranslations } from 'hooks/useTranslations';
import { styles } from 'pages/dashboard/css/sections.styles';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const SixthSection = (contentInnerWidth: any) => {
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
            {translations.dashboard.discoverTitle}
          </Typography>

          <Grid display='flex' flexDirection='column'>
            <Typography className={classes.text}>
              {translations.dashboard.discoverTxt}
            </Typography>

            <Typography className={classes.text}>
              {translations.dashboard.discoverTxt2}
            </Typography>

            <Typography className={classes.text}>
              {translations.dashboard.discoverTxt3}
            </Typography>
          </Grid>
        </Grid>

        <Grid className={clsx(classes.imageContent, classes.oddImgSection)}>
          <LazyLoadImage
            src={SquirtleImg}
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
            alt='squirtle-image'
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SixthSection;
