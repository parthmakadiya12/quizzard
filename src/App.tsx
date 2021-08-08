import { FC } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import store from "./store/store";
import Routing from "./routing/Routing";
import useTheme from "./styles/useTheme";
import { Toggle } from "./common";
import { darkTheme, GlobalStyles, lightTheme } from "./styles/theme";
import registerIcons from "./registerFaIcons";

import "./App.css";

registerIcons();
const App: FC = () => {
  const [theme, toggleTheme] = useTheme();

  const themeMode = theme === "dark" ? darkTheme : lightTheme;

  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={themeMode}>
          <Toggle theme={theme} toggleTheme={toggleTheme} />
          <GlobalStyles />
          <BrowserRouter>
            <Routing />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </div>
  );
};

export default App;
