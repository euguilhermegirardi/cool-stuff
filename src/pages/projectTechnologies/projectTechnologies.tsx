import { Grid, Toolbar, Typography } from '@mui/material';
import { projectTechnologies } from './models/projectTechnologies';

type TechnologyType = {
  title: string;
  description: string;
};

const ProjectTechnologies = () => {
  return (
    <Grid>
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
          justifyContent: 'flex-start',
          mt: 3,
          padding: 0,
          height: '100vh',
        }}
      >
        <Grid>
          <Typography
            sx={{
              fontSize: 18,
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            Project Technologies
          </Typography>
        </Grid>

        <Grid>
          <Typography
            sx={{
              marginTop: 2,
              marginBottom: 2.5,
              fontSize: 16,
              fontWeight: 400,
            }}
          >
            I used several technologies to develop this website:
          </Typography>
        </Grid>

        {projectTechnologies.map((technology: TechnologyType, index: number) => (
          <Typography
            key={index}
            sx={{
              marginBottom: 1.5,
              fontSize: 14.5,
              fontWeight: 400,
            }}
          >
            <strong>{technology.title}</strong> - {technology.description}
          </Typography>
        ))}
      </Grid>
    </Grid>
  );
};

export default ProjectTechnologies;
