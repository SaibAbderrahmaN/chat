// routes
import Router from "./routes";
// theme
import ThemeProvider from './theme';
import './style.css'
// components
import ThemeSettings from './components/settings';

function App() {
  return (
    <ThemeProvider>
      <ThemeSettings>
        {" "}
        <Router />{" "}
      </ThemeSettings>
    </ThemeProvider>
  );
}

export default App;
