import './App.css';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
      <Footer />
    </ThemeProvider>

  );
}

export default App;
