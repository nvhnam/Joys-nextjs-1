import Layout from "../components/Layout";
import { ToastProvider } from "../context/ToastContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ToastProvider>

      <Component {...pageProps} />
      </ToastProvider>
    </Layout>
  );
}

export default MyApp;
