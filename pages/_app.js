import Layout from "../components/Layout";
import { ToastProvider } from "../context/ToastContext";
import "../styles/globals.css";
import { useState, useEffect } from "react";
import videoBg from "../public/img/LogoOnly_60FPS.gif";
import Image from "next/dist/client/image";
// import loadingScreen from "./loadingScreen";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3140);
  }, []);

  return (
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
          <Image src={videoBg} layout="intrinsic" />
        </div>
      ) : (
        <Layout>
          <ToastProvider>
            <Component {...pageProps} />
          </ToastProvider>
        </Layout>
      )}
    </div>
  );
}

export default MyApp;
