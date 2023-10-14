import { Provider } from "react-redux";
import { store } from "./store";
import TipCalculator from "./components/TipCalculator";
import { ThemeProvider } from "@/components/theme-provider";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
        <TipCalculator />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
