import "../styles/global.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { AppProps } from "next/app";
import VietnamImg from "@/components/img-country/VietnamImg";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }: AppProps) {
  // const router = useRouter();
  // console.log(router.pathname);
  // const country = router.asPath.replace("/", "").split("/");
  // console.log(country);
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
export default MyApp;
