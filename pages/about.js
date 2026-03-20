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
          <h1 className="text-bold text-6xl laptop:text-8xl w-full">About.</h1>
          <div className="mt-2 flex flex-col laptop:flex-row gap-10 laptop:gap-20 items-start">
            <div className="text-lg laptop:text-xl flex-1">
              {data.aboutpara.split("\n\n").map((para, i) => (
                <p key={i} className="mt-4">{para}</p>
              ))}
            </div>
            <img
              src="/images/profile-photo.jpg"
              alt={data.name}
              className="rounded-full object-cover shrink-0 self-start laptop:mt-4 laptop:mr-10"
              style={{ width: "200px", height: "200px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
