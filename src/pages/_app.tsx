import type { AppProps } from 'next/app';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { Plus_Jakarta_Sans } from '@next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
});
export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    typography: {
      fontFamily: [
        plusJakartaSans.style.fontFamily,
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ].join(','),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
