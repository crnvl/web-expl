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
        <meta name="description" content={props.description} />
      </Head>
      <div className="bg-background text-text overflow-x-hidden">
        <Navbar title={props.title} />
        {props.children}
      </div>
    </>
  );
};

export default PageLayout;
