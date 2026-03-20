import Head from "next/head";
import Header from "../components/Header";
import WorkCard from "../components/WorkCard";
import Cursor from "../components/Cursor";
import data from "../data/portfolio.json";

export default function Projects() {
  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>Projects | {data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header isBlog={true} />
        <div className="mt-10 laptop:mt-20 p-2 laptop:p-0">
          <h1 className="text-bold text-6xl laptop:text-8xl w-full">Projects.</h1>
          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
