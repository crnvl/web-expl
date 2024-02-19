import Navbar from "@/components/layout/navbar";
import Head from "next/head";
import { FC } from "react";

interface IProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const PageLayout: FC<IProps> = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="title" content={props.title} />
        <meta name="description" content={props.description} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:image" content="/banner.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={props.title} />
        <meta property="twitter:description" content={props.description} />
        <meta property="twitter:image" content="/banner.png" />
      </Head>
      <div className="bg-background text-text overflow-x-hidden">
        <Navbar title={props.title} />
        {props.children}
      </div>
    </>
  );
};

export default PageLayout;
