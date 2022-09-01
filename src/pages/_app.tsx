import type { AppProps } from "next/app";
import "assets/styles/global.scss";
import Sidebar from "components/layout/Sidebar";
import TitleBar from "components/layout/TitleBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="flex z-10 relative">
        <Sidebar />
        <div className="flex-1 p-4 border-1 border-dashed">
          <TitleBar />
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;