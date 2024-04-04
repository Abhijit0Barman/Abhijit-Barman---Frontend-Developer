import { Html, Head, Main, NextScript } from "next/document";
import { ProviderWeb3Model } from "../ProviderWeb3Model";

export default function Document() {
  return (
    <Html lang="en">
      <ProviderWeb3Model>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </ProviderWeb3Model>
    </Html>
  );
}
