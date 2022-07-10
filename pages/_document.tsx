import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

type WithNonceProp = {
  nonce: string;
};

export default class MyDocument extends Document<WithNonceProp> {
  render(): JSX.Element {
    const nonce = this.props.nonce;
    return (
      <Html lang="en">
        <Head nonce={nonce}>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Antonio:regular,bold"
          />
          <link rel="canonical" href="https://neurotechdaily.com" />
          <title>Neurotech Daily</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
