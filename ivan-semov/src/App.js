import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import VerticalTabs from "./Components/Tabs/TabPanel";

function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <div
      className="App"
      style={{
        backgroundImage:
          "url('/abstract-flowing-neon-wave-background.jpg')",
        backgroundRepeat: 'no-repeat',
      }}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <VerticalTabs />
      </ThemeProvider>
    </div>
  );
}

export default App;
