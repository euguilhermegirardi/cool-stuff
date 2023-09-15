import { Box, Grid, List, ListItem, Typography, useTheme } from '@mui/material';
import { NavLink } from 'react-router-dom';
import AlakazamImg from 'assets/images/alakazam.png';
import CrystalBattleImg from 'assets/images/crystal.png';
import GyaradosImg from 'assets/images/gyarados.png';
import SquirtleImg from 'assets/images/squirtle.jpeg';
import MuiToolbar from 'components/muiToolbar/muiToolbar';
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
              md: 'row'
            }
          }}
        >
          <Grid
            sx={{
              flex: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              margin: 0,
              padding: 0,
            }}
          >
            <Grid>
              <Typography className={classes.title}>
                Project Technologies
              </Typography>
            </Grid>

            <Grid
              sx={{
                display: {
                  xs: 'flex',
                  md: 'none'
                },
                alignSelf: 'center',
                width: '100%',
              }}
            >
              <Box
                component="img"
                sx={{
                  height: '100%',
                  width: '100%',
                }}
                src={CrystalBattleImg}
                alt='Pokemon-logo'
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
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
          >
            <Grid
              sx={{
                display: 'flex',
                alignSelf: 'flex-end',
              }}
            >
              <Grid
                sx={{

                  height: 250,
                  width: 210,
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: '100%',
                    width: '100%',
                  }}
                  src={AlakazamImg}
                  alt='Pokemon-logo'
                />
              </Grid>
            </Grid>

            <Grid
              sx={{
                display: 'flex',
                alignSelf: 'flex-start',
              }}
            >
              <Grid
                sx={{
                  height: 180,
                  width: 170,
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: '100%',
                    width: '100%',
                    mixBlendMode: 'multiply'
                  }}
                  src={SquirtleImg}
                  alt='Pokemon-logo'
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          sx={{
            display: {
              xs: 'none',
              md: 'flex'
            },
            alignSelf: 'center',
            height: 190,
            width: 700,
          }}
        >
          <Box
            component="img"
            sx={{
              height: '100%',
              width: '100%',
            }}
            src={GyaradosImg}
            alt='Pokemon-logo'
          />
        </Grid>
      </Grid>
    </Grid >
  );
};

export default ProjectTechnologies;
