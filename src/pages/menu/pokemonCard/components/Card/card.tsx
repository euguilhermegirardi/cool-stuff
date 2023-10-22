import { Box, Grid, Typography } from '@mui/material';
import MuiSkeleton from 'components/skeleton/muiSkeleton';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Card = ({
  name,
  hp,
  sprite,
  height,
  weight,
  moves,
  types,
  abilities,
}: {
  name: string;
  hp: number;
  sprite: string;
  height: number;
  weight: number;
  moves: {
    move: {
      name: string;
    }
  }[];
  types: {
    type: {
      name: string;
    }
  }[];
  abilities: {
    ability: {
      name: string
    }
  }[];
}) => {
  return (
    <Grid
      sx={{
        minHeight: 450,
        maxWidth: 330,
        borderRadius: 2,
        backgroundColor: '#a0922c',
        p: 1.5
      }}
    >
      <Grid
        sx={{
          backgroundColor: '#fff8c9',
          height: '100%'
        }}
      >
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Box
            component='div'
            display='flex'
            justifyContent='space-between'
            width='100%'
            p={0.5}
          >
            <Typography
              sx={{
                textTransform: 'capitalize',
                fontWeight: 'bold'
              }}
            >
              {name}
            </Typography>
            <Typography
              sx={{
                color: '#f00',
                fontWeight: 'bold'
              }}
            >
              {hp} HP
            </Typography>
          </Box>

          <Box
            component='div'
            display='flex'
            justifyContent='center'
            width='80%'
            sx={{
              my: 2,
              border: '5px solid #a99b34',
              boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px',
              width: '80%',
              backgroundColor: '#e5e5f7',
              opacity: '0.8',
              backgroundImage: 'repeating-radial-gradient( circle at 0 0, transparent 0, #e5e5f7 10px ), repeating-linear-gradient( #191b22, #a99b34 )',
            }}
          >
            <LazyLoadImage
              src={sprite}
              placeholder={
                <MuiSkeleton
                  variant='rounded'
                  width={210}
                  height={210}
                />
              }
              effect='blur'
              width='220px'
              height='auto'
              alt={name}
            />
          </Box>

          <Box
            component='div'
            display='flex'
            justifyContent='space-around'
            width='70%'
            sx={{
              borderRadius: 1,
              p: 0.2,
              background: 'linear-gradient(to right, #a99b34 0%, #a99b34 10%, #ffec6a 32%, #ffec6a 50%, #a99b34 100%)'
            }}
          >
            <Typography fontSize={11}>Height: {height}</Typography>
            <Typography fontSize={11}>Weight: {weight}</Typography>
          </Box>

          <Box
            component='div'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            my={2}
            p={0.5}
            borderBottom='2px solid #000'
            width='100%'
          >
            <Typography flex={1} textAlign='center'>{moves[0]?.move.name}</Typography>
            <Typography flex={1} textAlign='center'>{moves[1]?.move.name}</Typography>
            <Typography flex={1} textAlign='center'>{moves[2]?.move.name}</Typography>
          </Box>

          <Box
            component='div'
            display='flex'
            justifyContent='space-between'
            width='100%'
            py={0.5}
            px={2}
          >
            <Typography>Type: {types[0]?.type.name}</Typography>
            <Typography> {types[1]?.type.name}</Typography>
          </Box>

          <Box
            component='div'
            display='flex'
            justifyContent='flex-start'
            py={0.5}
            px={2}
            width='100%'
          >
            <Typography>Abilities: {abilities[0]?.ability.name}</Typography>
            <Typography marginLeft={1}>{abilities[1]?.ability.name}</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid >
  );
};

export default Card;
