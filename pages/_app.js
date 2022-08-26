import Layout from "../components/Layout";
import { ToastProvider } from "../context/ToastContext";
import "../styles/globals.css";
import { useState, useEffect } from "react";
import videoBg from "../public/img/LogoOnly_60FPS.gif";
import Image from "next/dist/client/image";
import Head from "next/head";
// import loadingScreen from "./loadingScreen";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3337);
  }, []);

  return (
    <>
      <Head>
        <link rel="JoyS icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div
        style={{
          width: "auto",
          height: "auto",
          backgroundColor: "#f8fffc",
        }}
      >
        {loading ? (
          <div
            style={{
              width: "100%",
              height: "100vh",
              overflowY: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "auto",
              marginBottom: "auto",
            }}
          >
            <Image src={videoBg} layout="intrinsic" priority />
          </div>
        ) : (
          <Layout>
            <ToastProvider>
              <Component {...pageProps} />
            </ToastProvider>
          </Layout>
        )}
      </div>
    </>
  );
}

export default MyApp;
