import "../styles/globals.css";
import App from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import React from "react";
import store from "../redux/store";

// This default export is required in a new `pages/_app.js` file.
/*export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}*/

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const appProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    console.log(appProps);
    return { appProps: appProps };
  }

  render() {
    const { Component, appProps } = this.props;
    return (
      <Provider store={store}>
        <Component {...appProps} />
      </Provider>
    );
  }
}

const makestore = () => store;

export default withRedux(makestore)(MyApp);
