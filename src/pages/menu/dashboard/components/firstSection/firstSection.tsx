import { Grid, Typography } from '@mui/material';
import GengarImg from 'assets/images/gengar.png';
import clsx from 'clsx';
import MuiSkeleton from 'components/skeleton/muiSkeleton';
import { useTranslations } from 'hooks/useTranslations';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { styles } from '../../css/sections.styles';

const FirstSection = (contentInnerWidth: any) => {
  const classes = styles(contentInnerWidth);
  const translations = useTranslations();

  return (
    <Grid className={classes.container}>
      <Grid className={classes.section}>
        <Grid className={classes.evenTxtSection}>
          <Typography className={classes.title}>
            {translations.dashboard.worldOfPokemonTitle}
          </Typography>

          <Typography className={classes.text}>
            {translations.dashboard.worldOfPokemonTxt}
          </Typography>
        </Grid>

        <Grid className={clsx(classes.imageContent, classes.evenImgSection)}>
          <LazyLoadImage
            src={GengarImg}
            placeholder={
              <MuiSkeleton
                variant='rounded'
                width={230}
                height={230}
              />
            }
            effect='blur'
            width='100%'
            height='auto'
            alt='gengar-image'
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FirstSection;
