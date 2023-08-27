import { Provider } from "react-redux";
import { store } from "./store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <>
        <h1>teste</h1>
      </>
    </Provider>
  );
}

export default App;
