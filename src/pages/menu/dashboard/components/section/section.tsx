import { Grid, Typography } from '@mui/material';
import clsx from 'clsx';
import MuiSkeleton from 'components/skeleton/muiSkeleton';
import { styles } from 'pages/menu/dashboard/css/sections.styles';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Section = ({
  oddSection,
  contentInnerWidth,
  title,
  subtitle,
  subtitle2,
  subtitle3,
  image,
  altImage,
  skeletonWidth,
  skeletonHeight,
}: {
  oddSection: boolean;
  contentInnerWidth: any;
  title: string;
  subtitle: string;
  subtitle2?: string;
  subtitle3?: string;
  image: string;
  altImage: string;
  skeletonWidth: number;
  skeletonHeight: number;
}) => {
  const classes = styles(contentInnerWidth);

  return (
    <Grid
      className={classes.container}
      sx={{
        backgroundColor: oddSection ? '#b3a1254d' : 'unset',
        color: oddSection ? 'darkGrey.main' : 'inherit',
      }}
    >
      <Grid className={classes.section}>
        <Grid className={classes.txtSection} sx={{ order: oddSection ? '1' : '2' }}>
          <Typography className={classes.title}>
            {title}
          </Typography>

          <Typography className={classes.text}>
            {subtitle}
          </Typography>

          <Typography className={classes.text}>
            {subtitle2}
          </Typography>

          <Typography className={classes.text}>
            {subtitle3}
          </Typography>
        </Grid>

        <Grid
          className={clsx(classes.imageContent, classes.ImgSection)}
          sx={{ order: oddSection ? '2' : '1' }}
        >
          <LazyLoadImage
            src={image}
            placeholder={
              <MuiSkeleton
                variant='rounded'
                width={skeletonWidth}
                height={skeletonHeight}
              />
            }
            effect='blur'
            width='100%'
            height='auto'
            alt={altImage}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Section;
