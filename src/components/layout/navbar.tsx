import Link from "next/link";
import { FC } from "react";

interface IProps {
  title: string;
}

const Navbar: FC<IProps> = (props) => {
  return (
    <>
      <nav className="flex flex-col items-center">
        <center className="flex">
          <h1 className="text-5xl">{props.title}</h1>
          <div className="flex bg-pink-600 text-white text-center items-center rounded-lg h-5 text-sm p-2">
            beta
          </div>
        </center>
        <center className="text-primary flex gap-10 justify-center">
          <Link href="/">home</Link>
          <Link href="https://github.com/angelsflyinhell/web-expl?tab=readme-ov-file#deployment">
            selfhost
          </Link>
          <Link href="/about">about</Link>
        </center>
        <div className="h-0.5 bg-primary w-screen" />
      </nav>
    </>
  );
};

export default Navbar;
