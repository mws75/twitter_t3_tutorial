import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";

import { api } from " /utils/api";

import " /styles/globals.css";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Head>
        {" "}
        {/*This wasn't coming in because I had the wrong import,
      Always check your imoprts when weird things happen. */}
        <title>TinyTweet</title>
        <meta name="description" content="hello" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster position="bottom-center" />
      <Component {...pageProps} />
      hello
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
