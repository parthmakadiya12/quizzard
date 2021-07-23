import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { darkTheme, GlobalStyles, lightTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

import "./App.css";
import Routing from "./routing/Routing";
import useTheme from "./styles/useTheme";
import { Toggle } from "./common";

library.add(faSun, faMoon)

const App: FC = () => {
  const [theme, toggleTheme] = useTheme();

  const themeMode = theme === "dark" ? darkTheme : lightTheme;

  return (
    <div className="App">
      <ThemeProvider theme={themeMode}>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <GlobalStyles />
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
