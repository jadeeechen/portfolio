import Head from "next/head";
import Header from "../components/Header";
import Cursor from "../components/Cursor";
import data from "../data/portfolio.json";

export default function About() {
  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>About | {data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header isBlog={true} />
        <div className="mt-10 laptop:mt-20 p-2 laptop:p-0">
          <h1 className="text-2xl text-bold">About.</h1>
          <p className="mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5 whitespace-pre-line">
            {data.aboutpara}
          </p>
        </div>
      </div>
    </div>
  );
}
