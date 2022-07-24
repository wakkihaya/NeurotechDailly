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
          <meta name="copyright" content="Neurotech Daily" />
          <meta
            name="description"
            content="Neurotech Daily, a Podcast that interview the cutting-edge founders, developers, and innovators in the neurotech space."
          />
          <meta property="og:type" content="website" />
          <meta name="og:title" property="og:title" content="Neurotech Daily" />
          <meta
            name="og:description"
            property="og:description"
            content="Neurotech Daily, a Podcast that interview the cutting-edge founders, developers, and innovators in the neurotech space."
          />
          <meta
            name="keywords"
            content="neurotech,neurotechjp,braintech,neurotechnology,interview,neurotechdaily"
          />
          <meta property="og:site_name" content="Neurotech Daily" />
          <meta property="og:url" content="https://neurotechdaily.com" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Neurotech Ddaily" />
          <meta
            name="twitter:description"
            content="Neurotech Daily, a Podcast that interview the cutting-edge founders, developers, and innovators in the neurotech space."
          />
          <meta
            name="twitter:image"
            content="https://neurotechdaily.com/ogp.jpg"
          />
          <meta
            name="image"
            property="og:image"
            content="https://neurotechdaily.com/ogp.jpg"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
