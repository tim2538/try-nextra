'use client';
import { PaletteMode } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { Comfortaa, Prompt } from 'next/font/google';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    gradient: Palette['primary'];
  }
  interface PaletteOptions {
    gradient: PaletteOptions['primary'];
  }
}

const prompt = Prompt({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
});

const comfortaa = Comfortaa({
  weight: ['700'],
  subsets: ['latin'],
  display: 'swap'
});

const theme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: {
              main: '#1877f2',
              contrastText: '#ffffff'
            },
            secondary: {
              main: '#eb0014',
              contrastText: '#ffffff'
            },
            error: {
              main: '#fa3c3c',
              contrastText: '#ffffff'
            },
            success: {
              main: '#42b72a',
              contrastText: '#ffffff'
            },
            background: {
              default: '#f0f2f5'
            },
            text: {
              primary: '#1c1e21',
              disabled: '#dddddd'
            },
            gradient: {
              main: 'linear-gradient(to right, #1877f2, #0059b2)'
            }
          }
        : {
            // palette values for dark mode
            primary: {
              main: '#007fff',
              contrastText: '#fafafa'
            },
            secondary: {
              main: '#eb0014',
              contrastText: '#fafafa'
            },
            error: {
              main: '#fa3c3c',
              contrastText: '#fafafa'
            },
            success: {
              main: '#42b72a',
              contrastText: '#fafafa'
            },
            background: {
              default: '#0d1117',
              paper: '#161b22'
            },
            text: {
              primary: '#fafafa',
              disabled: 'rgba(250, 250, 250, 0.5)'
            },
            gradient: {
              main: '#66b2ff'
            }
          })
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920
      }
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: Number.MAX_VALUE
          },
          sizeSmall: {
            padding: '4px 10px'
          },
          sizeMedium: {
            padding: '6px 16px'
          },
          sizeLarge: {
            padding: '8px 22px'
          }
        }
      },
      MuiDialog: {
        defaultProps: {
          style: {
            backdropFilter: 'blur(2px)'
          }
        },
        styleOverrides: {
          paper: {
            borderRadius: '16px'
          }
        }
      },
      MuiFormHelperText: {
        defaultProps: {
          style: {
            lineHeight: 1.2
          }
        }
      }
    }
  });

export { comfortaa, prompt, theme };
