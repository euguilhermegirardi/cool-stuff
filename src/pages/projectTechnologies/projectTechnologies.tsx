import { Grid, List, ListItem, Typography, useTheme } from '@mui/material';
import { NavLink } from 'react-router-dom';
import CharizardsImg from 'assets/images/charizards.png';
import CrystalBattleImg from 'assets/images/crystal.png';
import GyaradosImg from 'assets/images/gyarados.png';
import MuiToolbar from 'components/muiToolbar/muiToolbar';
import MuiSkeleton from 'components/skeleton/muiSkeleton';
import { useTranslations } from 'hooks/useTranslations';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { navbarPages } from 'shared/css/navbarPages.styles';
import { projectTechnologies } from './models/projectTechnologies';

type TechnologyType = {
  id: number;
  title: string;
  description: string;
  url: string;
};

const ProjectTechnologies = () => {
  const theme = useTheme();
  const classes = navbarPages();
  const translations = useTranslations();

  return (
    <Grid
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(3),
        width: '100%',
        height: '100%'
      }}
    >
      <MuiToolbar />

      <Grid className={classes.mainContent}>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              lg: 'row'
            },
            flexWrap: 'wrap'
          }}
        >
          <Grid
            sx={{
              flex: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              width: '100%',
              margin: 0,
              padding: 0,
            }}
          >
            <Grid>
              <Typography className={classes.title}>
                {translations.projectStatistics.title}
              </Typography>
            </Grid>

            <Grid
              sx={{
                display: {
                  xs: 'flex',
                  md: 'none'
                },
                alignSelf: 'center',
              }}
            >
              <LazyLoadImage
                src={CrystalBattleImg}
                placeholder={
                  <MuiSkeleton
                    variant='rounded'
                    width={400}
                    height={281}
                  />
                }
                effect='blur'
                width='100%'
                height='auto'
                alt='crystal-game-image'
              />
            </Grid>

            <List sx={{ marginTop: 2 }}>
              {projectTechnologies.map((technology: TechnologyType) => (
                <ListItem
                  disablePadding
                  key={technology.id}
                  sx={{
                    display: 'flex',
                    flexDirection: {
                      xs: 'column',
                      md: 'row'
                    },
                    justifyContent: {
                      xs: 'center',
                      md: 'flex-start'
                    },
                    alignItems: 'flex-start',
                    marginBottom: 1.5,
                    fontSize: 15,
                    fontWeight: 400,
                  }}
                >
                  <NavLink
                    to={technology.url}
                    target="_blank"
                    style={{
                      fontWeight: 'bold',
                      color: '#000',
                    }}
                  >
                    {technology.title}
                  </NavLink>

                  <Typography>- {technology.description}</Typography>
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid
            sx={{
              flex: 2,
              display: {
                xs: 'none',
                md: 'flex'
              },
              alignSelf: 'center',
              minWidth: 450
            }}
          >
            <Grid
              sx={{
                flex: 2,
                display: {
                  xs: 'none',
                  md: 'flex'
                },
                alignSelf: 'center',
                minWidth: 450,
                maxWidth: 500
              }}
            >
              <LazyLoadImage
                src={CharizardsImg}
                placeholder={
                  <MuiSkeleton
                    variant='rounded'
                    width={500}
                    height={281}
                  />
                }
                effect='blur'
                width='100%'
                height='auto'
                alt='charizards-image'
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          sx={{
            display: {
              xs: 'none',
              lg: 'flex'
            },
            alignSelf: 'center',
            height: 190,
            maxWidth: 600,
          }}
        >
          <LazyLoadImage
            src={GyaradosImg}
            placeholder={
              <MuiSkeleton
                variant='rounded'
                width={600}
                height={208}
              />
            }
            effect='blur'
            width='100%'
            height='auto'
            alt='gyarados-image'
          />
        </Grid>
      </Grid>
    </Grid >
  );
};

export default ProjectTechnologies;
