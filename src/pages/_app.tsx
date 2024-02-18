import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Pixelify_Sans } from "next/font/google";
import PageLayout from "@/layout/page-layout";

const pixelifySans = Pixelify_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={pixelifySans.className}>
        <div className="w-screen h-screen">
          <PageLayout
            title="web-expl"
            description="Explore the web in 3-dimensional space."
          >
            <Component {...pageProps} />
          </PageLayout>
        </div>
      </div>
    </>
  );
}
