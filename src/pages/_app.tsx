import Footer from "@/components/navbar/Footer";
import Header from "@/components/navbar/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
  style: "normal",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={poppins.className}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
