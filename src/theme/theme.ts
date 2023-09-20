import { createTheme, PaletteColorOptions, Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CustomPalette {
    red: PaletteColorOptions;
    bostonUniRed: PaletteColorOptions;
    ceruleanBlue: PaletteColorOptions;
    goldenYellow: PaletteColorOptions;
    goldenFoil: PaletteColorOptions;
    darkGrey: PaletteColorOptions;
  }

  interface Palette extends CustomPalette { }
  interface PaletteOptions extends CustomPalette { }
};

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    red: true;
    bostonUniRed: true;
    ceruleanBlue: true;
    goldenYellow: true;
    goldenFoil: true;
  }
};

const theme: Theme = createTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 600,
      md: 750,
      lg: 1200,
      xl: 1640,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#3B4CCA'
        }
      }
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          width: '50px',
          height: '50px',
          color: '#FF0000 !important',
          borderRadius: '50%',
        },
        svg: {
          border: '3px solid #000',
          borderRadius: '50%',
        }
      }
    }
  },
  palette: {
    red: {
      main: '#FF0000',
    },
    bostonUniRed: {
      main: '#CC0000',
    },
    ceruleanBlue: {
      main: '#3B4CCA',
    },
    goldenYellow: {
      main: '#FFDE00',
    },
    goldenFoil: {
      main: '#B3A125',
    },
    darkGrey: {
      main: '#263238',
    }
  },
});

export default theme;
