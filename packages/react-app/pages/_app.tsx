import "../styles/globals.css";
import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { CeloProvider, Alfajores } from '@celo/react-celo';
import '@celo/react-celo/lib/styles.css';

import Layout from "../components/Layout";

function App({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
     const importTE = async () => {
    (await import("tw-elements")).default;
  };
  importTE();
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <CeloProvider
        dapp={{
          name: 'celo-composer dapp',
          description: 'My awesome celo-composer description',
          url: 'https://example.com',
          icon: 'https://example.com/favicon.ico',
        }}
        defaultNetwork={Alfajores.name}
        connectModal={{
          providersOptions: { searchable: true },
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CeloProvider>
    )
  }
}

export default App;