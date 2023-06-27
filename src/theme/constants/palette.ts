import { type Palette as PaletteType } from '@mui/material';

export const Palette: Partial<PaletteType> = {
  mode: 'light',
  common: {
    black: '#000',
    white: '#FFF',
  },
  text: {
    primary: '#767676',
    secondary: '#353535',
    disabled: '#C4C4C4',
  },

  grey: {
    50: '#FAFAFA',
    100: '#F7F7F7',
    200: '#EBEBEB',
    300: '#CFCFCF',
    400: '#C9C9C9',
    500: '#C3C3C3',
    600: '#C4C4C4',
    700: '#F7F7F7',
    800: '#AAAAAA',
    900: '#868686',
    A100: '#767676',
    A200: '#5D5D5D',
    A400: '#494949',
    A700: '#353535',
  },

  primary: {
    light: '#FCF4F4',
    main: '#C63031',
    dark: '#B22728',
    contrastText: '#FFF',
  },
  secondary: {
    light: '#E9F1FD',
    main: '#1A73E8',
    dark: '#106ADE',
    contrastText: '#FFF',
  },
  info: {
    light: '#80BCF5',
    main: '#3EA2FF',
    dark: '#2C8CE5',
    contrastText: '#FFF',
  },
  error: {
    light: '#FFEDED',
    main: '#F13838',
    dark: '#E42727',
    contrastText: '#FFF',
  },
  warning: {
    light: '#FFF6E0',
    main: '#FFB800',
    dark: '#F2AE00',
    contrastText: '#FFF',
  },
  success: {
    light: '#F0FFF7',
    main: '#2DCA73',
    dark: '#26BF6A',
    contrastText: '#FFF',
  },
};
