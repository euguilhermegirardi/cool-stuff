import { Grid, Typography } from '@mui/material';
import MachampImg from 'assets/images/machamp.png';
import clsx from 'clsx';
import MuiSkeleton from 'components/skeleton/muiSkeleton';
import { useTranslations } from 'hooks/useTranslations';
import { styles } from 'pages/dashboard/css/sections.styles';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ThirdSection = () => {
  const classes = styles();
  const translations = useTranslations();

  return (
    <Grid className={classes.container}>
      <Grid className={classes.section}>
        <Grid className={classes.evenTxtSection}>
          <Typography className={classes.title}>
            {translations.dashboard.collectTitle}
          </Typography>

          <Typography className={classes.text}>
            {translations.dashboard.collectTxt}
          </Typography>
        </Grid>

        <Grid className={clsx(classes.imageContent, classes.evenImgSection)}>
          <LazyLoadImage
            src={MachampImg}
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
            alt='machamp-image'
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ThirdSection;
