import { indigo, amber } from './colors';
import Color from 'color';

const primary = Color(indigo);
const secondary = Color(amber);

const defaultTheme = {
  palette: {
    primary: {
      light: primary.lighten(0.25).hex(),
      main: primary.hex(),
      dark: primary.darken(0.25).hex(),
    },
    secondary: {
      light: secondary.lighten(0.25).hex(),
      main: secondary.hex(),
      dark: secondary.darken(0.25).hex(),
    },
  },
  typography: {
    h1: {
      margin: 0,
      color: primary.hex(),
      fontSize: '2rem',
    },
    h2: {
      margin: 0,
      color: 'rgb(0, 0, 0, 0.75)',
      fontSize: '1.5rem',
    },
    h3: {
      margin: 0,
      color: 'rgb(0, 0, 0, 0.87)',
      fontSize: '1.25rem',
    },
    h4: {
      margin: 0,
      color: 'rgb(0, 0, 0, 0.87)',
      fontSize: '1rem',
    },
    h5: {
      margin: 0,
      color: 'rgb(0, 0, 0, 0.87)',
      fontSize: '0.85rem',
    },
    h6: {
      margin: 0,
      color: 'rgb(0, 0, 0, 0.87)',
      fontSize: '0.6rem',
    },
    p: {
      margin: 0,
      lineHeight: '2rem',
      color: 'rgba(0, 0, 0, 0.87)',
      fontSize: '0.87rem',
    },
  },
  spacing: (index) => 8 * index,
  shape: {
    radius: 8,
  },
  shadow: {},
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
};

export default defaultTheme;
