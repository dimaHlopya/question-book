import { createTheme } from '@mui/material/styles';

import { Palette } from './constants/palette';
import { Typography } from './constants/typography';

const theme = createTheme({
  typography: {
    fontFamily: 'Manrope, sans-serif',
  },
  palette: Palette,
});

theme.components = {
  MuiCssBaseline: {
    styleOverrides: { fontFamily: 'Manrope, sans-serif' },
  },
  MuiTypography: {
    styleOverrides: {
      root: {
        color: theme.palette.text.primary,
      },
      ...Typography,
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {
        color: theme.palette.secondary.main,
        textDecoration: 'none',
        cursor: 'pointer',
        fontWeight: 600,
      },
    },
  },
  MuiButton: {
    defaultProps: {
      variant: 'contained',
    },
    styleOverrides: {
      root: {
        fontWeight: 600,
        textTransform: 'unset',
        width: 'min-content',
        whiteSpace: 'nowrap',
      },
    },
    variants: [
      {
        props: { variant: 'text' },
        style: {
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    ],
  },
  MuiInputBase: {
    defaultProps: {
      size: 'small',
    },
    styleOverrides: {
      root: {
        boxSizing: 'border-box',
        height: '40px',
        minWidth: '160px',
        color: theme.palette.text.secondary,
        fontWeight: 500,
        '&:focus-within fieldset, &:focus-visible fieldset': {
          border: `1px solid ${theme.palette.text.secondary}!important`,
        },
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      size: 'small',
    },
    styleOverrides: {
      root: {
        '& label.Mui-focused': {
          color: `${theme.palette.text.secondary}!important`,
          '&:hover fieldset': {
            border: `1px solid ${theme.palette.text.disabled}!important`,
          },
        },
      },
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      asterisk: { color: theme.palette.primary.main },
    },
  },
  MuiTabs: {
    defaultProps: { orientation: 'vertical' },
    styleOverrides: {
      root: {
        width: 'max-content',
        fontWeight: '500',
        backgroundColor: theme.palette.grey['50'],
        '& .MuiTab-root.Mui-selected': {
          backgroundColor: theme.palette.common.white,
          borderRight: `1px solid ${theme.palette.common.white}`,
        },
        '& .MuiTabs-indicator': { display: 'none' },
      },
    },
  },
  MuiTab: {
    defaultProps: { disableRipple: true },
    styleOverrides: {
      root: {
        alignItems: 'start',
        width: '100%',
        textTransform: 'none',
        color: theme.palette.text.primary,
        borderRight: `1px solid ${theme.palette.grey['200']}`,
        borderBottom: `1px solid ${theme.palette.grey['200']}`,
      },
    },
  },
};

export default theme;
