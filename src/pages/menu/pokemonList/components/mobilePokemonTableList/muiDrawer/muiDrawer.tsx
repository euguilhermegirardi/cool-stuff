import { Box, Drawer, Grid, Typography } from '@mui/material';
import CharizardImg from 'assets/images/charizard.png';
import MuiSkeleton from 'components/skeleton/muiSkeleton';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { MuiDrawerProps } from './interfaces/muiDrawerProps';

const MuiDrawer = ({
  isDrawerOpen,
  toggleDrawer,
  selectedPokemon
}: MuiDrawerProps) => {

  const {
    name,
    weight,
    sprites,
    stats
  }: any = selectedPokemon;

  return (
    <Drawer
      anchor='bottom'
      PaperProps={{
        style: { borderTopLeftRadius: 8, borderTopRightRadius: 8 }
      }}
      open={isDrawerOpen}
      onClose={() => toggleDrawer()}
    >
      <Grid
        sx={{
          backgroundColor: 'ceruleanBlue.main',
          padding: 2,
        }}
      >
        <Grid
          display='flex'
          flexDirection='column'
          alignItems='center'
          minHeight={500}
          sx={{
            backgroundColor: '#fafafa',
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
        >
          <Box
            component='div'
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            width='100%'
            padding={2}
            borderBottom='2px solid #B3A123'
          >
            <Typography fontSize={25} fontWeight={600} textTransform={'capitalize'}>
              {name}
            </Typography>

            <Typography fontSize={16} fontWeight={400}>
              Weight: {weight}
            </Typography>
          </Box>

          <LazyLoadImage
            src={sprites?.front_default}
            alt={selectedPokemon.name}
            placeholder={
              <MuiSkeleton
                variant='rectangular'
                width={220}
                height={220}
                color='#263238'
              />
            }
            effect='blur'
            width='220px'
            height='220px'
          />

          <Box
            component='div'
            display='flex'
            flexDirection='column'
            mx={2}
            mb={2}
            boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'}
            borderRadius={2}
          >
            <Box
              component='div'
              display='flex'
              justifyContent='center'
              borderBottom='2px solid #B3A123'
            >
              <Typography fontSize={22} fontWeight={400} textTransform='uppercase'>
                Stats
              </Typography>
            </Box>

            <Box component='div' display='flex' flexWrap='wrap' padding={1}>
              {stats?.length ? (
                <>
                  {stats.map((eachStat: any) => (
                    <Box
                      key={eachStat.stat.name}
                      flex={2}
                      display='flex'
                      flexDirection='column'
                      alignItems='center'
                      minWidth={110}
                      margin={0.3}
                      border={'1px solid #ccc'}
                    >
                      <Typography
                        textTransform='uppercase'
                        fontSize={15}
                      >
                        {eachStat.stat.name}</Typography>
                      <Typography>{eachStat.base_stat}</Typography>
                    </Box>
                  ))}
                </>
              ) : null}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default MuiDrawer;
