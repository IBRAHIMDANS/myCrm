import Document, { Head, Html, Main, NextScript } from "next/document";
import theme from "../theme";
import { ServerStyleSheets } from "@material-ui/styles";
import { Children } from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main}/>
          <meta name="description" content="CRM APP"/>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (context) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = context.renderPage;

  context.renderPage = (_: { enhanceComponent: (Component: any) => any; enhanceApp: (App: any) => (props: any) => any }) =>
    originalRenderPage({
      enhanceApp: (App: any) => (props: any) => sheets.collect(
        <App {...props} />),
      enhanceComponent: (Component: any) => Component,
    });

  const initialProps = await Document.getInitialProps(context);

  return {
    ...initialProps,
    styles: [
      ...Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
export default MyDocument;
