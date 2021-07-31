import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { useStore } from "../utils/store";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import Layout from "../components/Layout";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {

  const store = useStore(pageProps.initialReduxState);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline/>
        <Layout {...pageProps} >
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
