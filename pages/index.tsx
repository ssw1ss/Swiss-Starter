import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Swiss Starter</title>
        <meta name="description" content="Swiss next.js starter repo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-2xl font-semibold">Swiss Starter</h1>
    </div>
  );
};

export default Home;
