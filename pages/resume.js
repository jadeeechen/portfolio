import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import Button from "../components/Button";
import { useTheme } from "next-themes";
// Data
import { name, showResume } from "../data/portfolio.json";
import { resume } from "../data/portfolio.json";
import data from "../data/portfolio.json";

const Resume = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    if (!showResume) {
      router.push("/");
    }
  }, []);
  return (
    <>
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-6 right-6">
          <Button onClick={() => router.push("/edit?tab=RESUME")} type={"primary"}>
            Edit Resume
          </Button>
        </div>
      )}
      {data.showCursor && <Cursor />}
      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>
      <div
        className={`container mx-auto mb-10 ${
          data.showCursor && "cursor-none"
        }`}
      >
        <Header />
        <div className="mt-10 p-2 laptop:p-0">
          <h1 className="text-bold text-6xl laptop:text-8xl w-full">Resume.</h1>
        </div>
        {mount && (
          <div className="mt-10 w-full flex flex-col items-center">
            <div
              className={`w-full ${
                mount && theme.theme === "dark" ? "bg-slate-800" : "bg-gray-50"
              } max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
            >
              <h1 className="text-3xl font-bold">{name}</h1>
              <h2 className="text-xl mt-5">{resume.tagline}</h2>
              <h2 className="text-xl mt-5 opacity-50 whitespace-nowrap">
                {resume.description}
              </h2>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Experience</h1>
                {resume.experiences.map(({ id, company, type, roles }) => (
                  <div key={id} className="mt-6 flex gap-6 mob:flex-col desktop:flex-row">
                    <div className="desktop:w-2/5 shrink-0">
                      <h2 className="text-lg font-bold">{company}</h2>
                      <p className="text-sm opacity-50">{type}</p>
                    </div>
                    <div className="desktop:w-3/5 flex flex-col">
                      {roles.map((role, i) => (
                        <div key={i} className="flex gap-3">
                          <div className="flex flex-col items-center">
                            <div className="w-2.5 h-2.5 rounded-full bg-gray-400 mt-1.5 shrink-0"></div>
                            {i < roles.length - 1 && (
                              <div className="w-0.5 bg-gray-200 flex-1 mt-1"></div>
                            )}
                          </div>
                          <div className="pb-4">
                            <h3 className="text-sm font-semibold">{role.title}</h3>
                            <p className="text-xs opacity-50 mt-0.5">{role.dates}</p>
                            {role.bullets && (
                              <ul className="list-disc ml-4 mt-1">
                                {role.bullets.split(",").map((b, j) => {
                                  const t = b.trim();
                                  return t ? (
                                    <li key={j} className="text-sm my-1 opacity-70">
                                      {t.charAt(0).toUpperCase() + t.slice(1)}
                                    </li>
                                  ) : null;
                                })}
                              </ul>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Education</h1>
                {resume.education.map((edu, index) => (
                  <div className="mt-2" key={index}>
                    <h2 className="text-lg">{edu.universityName}</h2>
                    <h3 className="text-sm opacity-75">{edu.universityDate}</h3>
                    {edu.universityPara && (
                      <p className="text-sm mt-2 opacity-50">{edu.universityPara}</p>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Skills</h1>
                {[
                  { label: "Languages", items: resume.languages },
                  { label: "Frameworks", items: resume.frameworks },
                  { label: "Others", items: resume.others },
                ].filter(({ items }) => items?.length).map(({ label, items }) => (
                  <div key={label} className="mt-4 flex gap-6 mob:flex-col desktop:flex-row">
                    <div className="desktop:w-2/5 shrink-0">
                      <h2 className="text-lg font-bold">{label}</h2>
                    </div>
                    <div className="desktop:w-3/5 flex flex-wrap gap-2">
                      {items.map((item, i) => (
                        <span key={i} className="text-sm opacity-70 border rounded-full px-3 py-1">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;
