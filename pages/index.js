import Head from "next/head";
import Header from "../components/Header";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import data from "../data/portfolio.json";

export default function Home() {
  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header />

        <div className="flex flex-col items-center justify-center mt-20 laptop:mt-32 text-center">
          {/* Profile image circle */}
          <img
            src="/images/profile-photo.jpg"
            alt={data.name}
            className="rounded-full mb-6 object-cover"
            style={{ width: "160px", height: "160px" }}
          />

          {/* Name */}
          <h1 className="text-4xl laptop:text-6xl font-bold mb-3">
            {data.name}
          </h1>

          {/* Tagline */}
          <p className="text-lg laptop:text-xl opacity-60 mb-2 w-full laptop:w-2/5">
            {data.tagline}
          </p>

          {/* Location */}
          {data.location && (
            <p className="text-base opacity-40 mt-3 mb-6">{data.location}</p>
          )}

          {/* Social links */}
          <div className="flex flex-wrap justify-center gap-2">
            {data.socials.filter(s => s.title !== "Website").map((social, index) => (
              <Button key={index} onClick={() => window.open(social.link)}>
                {social.title}
              </Button>
            ))}
          </div>
        </div>

        {/* This button should not go into production */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
