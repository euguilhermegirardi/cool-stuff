import { Box, Grid, List, ListItem, Toolbar, Typography, useTheme } from '@mui/material';
import { NavLink } from 'react-router-dom';
import AlakazamImg from 'assets/images/alakazam.png';
import GyaradosImg from 'assets/images/gyarados.png';
import SquirtleImg from 'assets/images/squirtle.jpeg';
import { projectTechnologies } from './models/projectTechnologies';

type TechnologyType = {
  id: number;
  title: string;
  description: string;
  url: string;
};

const ProjectTechnologies = () => {
  const theme = useTheme();

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
      <Toolbar
        sx={{
          minHeight: {
            xs: '100px',
            md: '120px',
            lg: '110px'
          }
        }}
      />

      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          padding: theme.spacing(2),
          border: '2px',
          borderRadius: 3,
          boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px',
        }}
      >
        <Grid sx={{ display: 'flex' }}>
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
              <Typography
                sx={{
                  fontSize: 20,
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  marginBottom: 2,
                }}
              >
                Project Technologies
              </Typography>
            </Grid>

            <List>
              {projectTechnologies.map((technology: TechnologyType) => (
                <ListItem
                  disablePadding
                  key={technology.id}
                  sx={{
                    marginBottom: 1.5,
                    fontSize: 14.5,
                    fontWeight: 400,
                  }}
                >
                  <NavLink
                    to={technology.url}
                    style={{
                      fontWeight: 'bold',
                      color: '#000',
                      marginRight: '5px'
                    }}
                  >
                    {technology.title}
                  </NavLink>- {technology.description}
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid
            sx={{
              flex: 2,
              display: 'flex',
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
            display: 'flex',
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
    </Grid>
  );
};

export default ProjectTechnologies;
