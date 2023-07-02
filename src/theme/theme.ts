import { createTheme, PaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CustomPalette {
    red: PaletteColorOptions;
    bostonUniRed: PaletteColorOptions;
    ceruleanBlue: PaletteColorOptions;
    goldenYellow: PaletteColorOptions;
    goldenFoil: PaletteColorOptions;
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

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 600,
      md: 750,
      lg: 1200,
      xl: 1640,
    },
  },
  palette: {
    red: {
      main: '#FF0000',
      contrastText: '#FFF',
    },
    bostonUniRed: {
      main: '#CC0000',
      contrastText: '#FFF',
    },
    ceruleanBlue: {
      main: '#3B4CCA',
      contrastText: '#FFF',
    },
    goldenYellow: {
      main: '#FFDE00',
      contrastText: '#FFF',
    },
    goldenFoil: {
      main: '#B3A125',
      contrastText: '#FFF',
    },
  },
});

export default theme;
