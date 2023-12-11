import ReactDOM from "react-dom/client";
import { StoreProvider } from 'easy-peasy';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import App from "./App.tsx";
import "./index.css";
import store from "./store/index.ts";


const StoreProviderOverride = StoreProvider as any;
const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <StoreProviderOverride store={store}>
    <MuiThemeProvider theme={darkTheme}>
      <App />
    </MuiThemeProvider>
  </StoreProviderOverride>
  // </React.StrictMode>,
);
