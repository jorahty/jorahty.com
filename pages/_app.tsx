import { createContext, useState, useMemo } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '../styles/global.css';

export const ColorModeContext = createContext();

export default function App({ Component, pageProps }) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [colorMode, setColorMode] = useState(undefined);

  // Generate initial theme based on `prefersDarkMode`
  const theme = useMemo(() => {
    const mode = colorMode || (prefersDarkMode ? 'dark' : 'light');
    return createTheme({
      palette: { mode },
      typography: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
        ].join(','),
        fontSize: 18,
        h4: {
          fontWeight: 800,
        },
        h5: {
          fontWeight: 800,
        },
      },
      breakpoints: {
        values: {
          mobile: 0,
          desktop: 730,
        },
      },
    });
  }, [prefersDarkMode, colorMode])

  const toggleColorMode = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  };

  return (
    <ColorModeContext.Provider value={toggleColorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}


