import "./App.css";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoute } from "./routes/AppRoute";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/common/ScrollToTop";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <AppRoute />
        <Footer />
      </Router>
    </ThemeProvider>

  );
}

export default App;
