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

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: string) => augmentColor({ color: { main: mainColor } });

const theme = createTheme({
  palette: {
    primary: {
      main: '#3B4CCA'
    },
    red: createColor('#FF0000'),
    bostonUniRed: createColor('#CC0000'),
    ceruleanBlue: {
      main: '#3B4CCA',
      contrastText: '#FFDE00',
    },
    goldenYellow: createColor('#FFDE00'),
    goldenFoil: createColor('#B3A125'),
  },
});

export default theme;
