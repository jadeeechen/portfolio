import Head from "next/head";
import Header from "../components/Header";
import Cursor from "../components/Cursor";
import Button from "../components/Button";
import Link from "next/link";
import data from "../data/portfolio.json";

export default function Contact() {
  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>Contact – {data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header />

        <div className="mt-10 laptop:mt-20 p-2 laptop:p-0">
          <h1 className="text-bold text-6xl laptop:text-8xl w-full">Contact.</h1>
          <br></br>

          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest opacity-40 mb-1">Email</p>
              <p className="text-lg">{data.email.replace("@", "[at]").replace(".", "[dot]")}</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest opacity-40 mb-1">GitHub</p>
              <a
                href="https://github.com/jadeeechen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg underline opacity-80 hover:opacity-100 transition-opacity"
              >
                github.com/jadeeechen
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest opacity-40 mb-1">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/jadeeechen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg underline opacity-80 hover:opacity-100 transition-opacity"
              >
                linkedin.com/in/jadeeechen
              </a>
            </div>
          </div>
        </div>
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit?tab=CONTACT">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
