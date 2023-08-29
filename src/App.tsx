import { Provider } from "react-redux";
import { store } from "./store";
import TipCalculator from "./components/TipCalculator";
import GlobalStyles from "./components/GlobalStyles";
import { ThemeProvider } from "styled-components";

const theme = {
  primaryColor: "#047cfb",
  backgroundColor: "#121d20",
};

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <TipCalculator />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
