import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import { v4 as uuidv4 } from "uuid";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

// Data
import yourData from "../data/portfolio.json";
import Cursor from "../components/Cursor";

const Edit = () => {
  // states
  const [data, setData] = useState(yourData);
  const [currentTabs, setCurrentTabs] = useState("HEADER");
  const { theme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    if (router.query.tab) setCurrentTabs(router.query.tab);
  }, [router.query.tab]);

  const saveData = () => {
    if (process.env.NODE_ENV === "development") {
      fetch("/api/portfolio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } else {
      alert("This thing only works in development mode.");
    }
  };

  // Project Handler
  const editProjects = (projectIndex, editProject) => {
    let copyProjects = data.projects;
    copyProjects[projectIndex] = { ...editProject };
    setData({ ...data, projects: copyProjects });
  };

  const addProject = () => {
    setData({
      ...data,
      projects: [
        ...data.projects,
        {
          id: uuidv4(),
          title: "New Project",
          description: "Web Design & Development",
          imageSrc:
            "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",

          url: "http://chetanverma.com/",
        },
      ],
    });
  };

  const deleteProject = (id) => {
    const copyProjects = data.projects;
    copyProjects = copyProjects.filter((project) => project.id !== id);
    setData({ ...data, projects: copyProjects });
  };

  // Services Handler

  const editServices = (serviceIndex, editService) => {
    let copyServices = data.services;
    copyServices[serviceIndex] = { ...editService };
    setData({ ...data, services: copyServices });
  };

  const addService = () => {
    setData({
      ...data,
      services: [
        ...data.services,
        {
          id: uuidv4(),
          title: "New Service",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        },
      ],
    });
  };

  const deleteService = (id) => {
    const copyServices = data.services;
    copyServices = copyServices.filter((service) => service.id !== id);
    setData({ ...data, services: copyServices });
  };

  // Socials Handler

  const editSocials = (socialIndex, editSocial) => {
    let copySocials = data.socials;
    copySocials[socialIndex] = { ...editSocial };
    setData({ ...data, socials: copySocials });
  };

  const addSocials = () => {
    setData({
      ...data,
      socials: [
        ...data.socials,
        {
          id: uuidv4(),
          title: "New Link",
          link: "www.chetanverma.com",
        },
      ],
    });
  };

  const deleteSocials = (id) => {
    const copySocials = data.socials;
    copySocials = copySocials.filter((social) => social.id !== id);
    setData({ ...data, socials: copySocials });
  };

  // Resume

  const handleAddExperience = () => {
    setData({
      ...data,
      resume: {
        ...data.resume,
        experiences: [
          ...data.resume.experiences,
          {
            id: uuidv4(),
            company: "New Company",
            type: "Full Time",
            roles: [{ title: "New Role", dates: "Enter Dates", bullets: "" }],
          },
        ],
      },
    });
  };

  const handleDeleteExperience = (id) => {
    setData({
      ...data,
      resume: {
        ...data.resume,
        experiences: data.resume.experiences.filter((e) => e.id !== id),
      },
    });
  };

  const handleEditExperience = (index, updated) => {
    const copy = [...data.resume.experiences];
    copy[index] = updated;
    setData({ ...data, resume: { ...data.resume, experiences: copy } });
  };

  const handleAddRole = (expIndex) => {
    const copy = [...data.resume.experiences];
    copy[expIndex] = {
      ...copy[expIndex],
      roles: [...copy[expIndex].roles, { title: "New Role", dates: "Enter Dates", bullets: "" }],
    };
    setData({ ...data, resume: { ...data.resume, experiences: copy } });
  };

  const handleEditRole = (expIndex, roleIndex, updated) => {
    const copy = [...data.resume.experiences];
    const roles = [...copy[expIndex].roles];
    roles[roleIndex] = updated;
    copy[expIndex] = { ...copy[expIndex], roles };
    setData({ ...data, resume: { ...data.resume, experiences: copy } });
  };

  const handleDeleteRole = (expIndex, roleIndex) => {
    const copy = [...data.resume.experiences];
    copy[expIndex] = {
      ...copy[expIndex],
      roles: copy[expIndex].roles.filter((_, i) => i !== roleIndex),
    };
    setData({ ...data, resume: { ...data.resume, experiences: copy } });
  };

  return (
    <div className={`container mx-auto ${data.showCursor && "cursor-none"}`}>
      <Header isBlog></Header>
      {data.showCursor && <Cursor />}
      <div className="mt-10">
        <div className={`${theme === "dark" ? "bg-transparent" : "bg-white"}`}>
          <div className="flex items-center justify-between">
            <h1 className="text-4xl">Dashboard</h1>
            <div className="flex items-center">
              <Button onClick={saveData} type="primary">
                Save
              </Button>
            </div>
          </div>

          <div className="flex items-center">
            <Button
              onClick={() => setCurrentTabs("HEADER")}
              type={currentTabs === "HEADER" && "primary"}
            >
              Header
            </Button>
            <Button
              onClick={() => setCurrentTabs("PROJECTS")}
              type={currentTabs === "PROJECTS" && "primary"}
            >
              Projects
            </Button>
            <Button
              onClick={() => setCurrentTabs("SERVICES")}
              type={currentTabs === "SERVICES" && "primary"}
            >
              Services
            </Button>
            <Button
              onClick={() => setCurrentTabs("ABOUT")}
              type={currentTabs === "ABOUT" && "primary"}
            >
              About
            </Button>
            <Button
              onClick={() => setCurrentTabs("SOCIAL")}
              type={currentTabs === "SOCIAL" && "primary"}
            >
              Social
            </Button>
            <Button
              onClick={() => setCurrentTabs("RESUME")}
              type={currentTabs === "RESUME" && "primary"}
            >
              Resume
            </Button>
          </div>
        </div>
        {/* HEADER */}
        {currentTabs === "HEADER" && (
          <div className="mt-10">
            <div className="flex items-center">
              <label className="w-1/5 text-lg opacity-50">Name</label>
              <input
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                type="text"
              ></input>
            </div>
            <div className="mt-5 flex items-center">
              <label className="w-1/5 text-lg opacity-50">Tagline</label>
              <input
                value={data.tagline}
                onChange={(e) =>
                  setData({ ...data, tagline: e.target.value })
                }
                className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                type="text"
              ></input>
            </div>
            <div className="mt-5 flex items-center">
              <label className="w-1/5 text-lg opacity-50">Location</label>
              <input
                value={data.location}
                onChange={(e) =>
                  setData({ ...data, location: e.target.value })
                }
                className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                type="text"
              ></input>
            </div>
            <div className="mt-5 flex items-center">
              <label className="w-1/5 text-lg opacity-50">Blog</label>
              <div className="w-4/5 ml-10 flex items-center">
                <Button
                  onClick={() => setData({ ...data, showBlog: true })}
                  type={data.showBlog && "primary"}
                >
                  Yes
                </Button>
                <Button
                  onClick={() => setData({ ...data, showBlog: false })}
                  classes={
                    !data.showBlog && "bg-red-500 text-white hover:bg-red-600"
                  }
                >
                  No
                </Button>
              </div>
            </div>
            <div className="mt-5 flex items-center">
              <label className="w-1/5 text-lg opacity-50">Dark Mode</label>
              <div className="w-4/5 ml-10 flex items-center">
                <Button
                  onClick={() => setData({ ...data, darkMode: true })}
                  type={data.darkMode && "primary"}
                >
                  Yes
                </Button>
                <Button
                  onClick={() => setData({ ...data, darkMode: false })}
                  classes={
                    !data.darkMode && "bg-red-500 text-white hover:bg-red-600"
                  }
                >
                  No
                </Button>
              </div>
            </div>
            <div className="mt-5 flex items-center">
              <label className="w-1/5 text-lg opacity-50">Show Resume</label>
              <div className="w-4/5 ml-10 flex items-center">
                <Button
                  onClick={() => setData({ ...data, showResume: true })}
                  type={data.showResume && "primary"}
                >
                  Yes
                </Button>
                <Button
                  onClick={() => setData({ ...data, showResume: false })}
                  classes={
                    !data.showResume && "bg-red-500 text-white hover:bg-red-600"
                  }
                >
                  No
                </Button>
              </div>
            </div>
            <div className="mt-5 flex items-center">
              <label className="w-1/5 text-lg opacity-50">Custom Cursor</label>
              <div className="w-4/5 ml-10 flex items-center">
                <Button
                  onClick={() => setData({ ...data, showCursor: true })}
                  type={data.showCursor && "primary"}
                >
                  Yes
                </Button>
                <Button
                  onClick={() => setData({ ...data, showCursor: false })}
                  classes={
                    !data.showCursor && "bg-red-500 text-white hover:bg-red-600"
                  }
                >
                  No
                </Button>
              </div>
            </div>
          </div>
        )}
        {/* PROJECTS */}
        {currentTabs === "PROJECTS" && (
          <>
            <div className="mt-10">
              {data.projects.map((project, index) => (
                <div className="mt-10" key={project.id}>
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl">{project.title}</h1>
                    <Button
                      onClick={() => deleteProject(project.id)}
                      type="primary"
                    >
                      Delete
                    </Button>
                  </div>

                  <div className="flex items-center mt-5">
                    <label className="w-1/5 text-lg opacity-50">Title</label>
                    <input
                      value={project.title}
                      onChange={(e) =>
                        editProjects(index, {
                          ...project,
                          title: e.target.value,
                        })
                      }
                      className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                      type="text"
                    ></input>
                  </div>
                  <div className="flex items-center mt-2">
                    <label className="w-1/5 text-lg opacity-50">
                      Description
                    </label>
                    <input
                      value={project.description}
                      onChange={(e) =>
                        editProjects(index, {
                          ...project,
                          description: e.target.value,
                        })
                      }
                      className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                      type="text"
                    ></input>
                  </div>
                  <div className="flex items-center mt-2">
                    <label className="w-1/5 text-lg opacity-50">
                      Image Source
                    </label>
                    <input
                      value={project.imageSrc}
                      onChange={(e) =>
                        editProjects(index, {
                          ...project,
                          imageSrc: e.target.value,
                        })
                      }
                      className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                      type="text"
                    ></input>
                  </div>
                  <div className="flex items-center mt-2">
                    <label className="w-1/5 text-lg opacity-50">url</label>
                    <input
                      value={project.url}
                      onChange={(e) =>
                        editProjects(index, {
                          ...project,
                          url: e.target.value,
                        })
                      }
                      className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                      type="text"
                    ></input>
                  </div>
                  <hr className="my-10"></hr>
                </div>
              ))}
            </div>

            <div className="my-10">
              <Button onClick={addProject} type="primary">
                Add Project +
              </Button>
            </div>
          </>
        )}
        {/* SERVICES */}
        {currentTabs === "SERVICES" && (
          <>
            <div className="mt-10">
              {data.services.map((service, index) => (
                <div key={service.id}>
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl">{service.title}</h1>
                    <Button
                      onClick={() => deleteService(service.id)}
                      type="primary"
                    >
                      Delete
                    </Button>
                  </div>
                  <div className="flex items-center mt-5">
                    <label className="w-1/5 text-lg opacity-50">Title</label>
                    <input
                      value={service.title}
                      onChange={(e) =>
                        editServices(index, {
                          ...service,
                          title: e.target.value,
                        })
                      }
                      className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                      type="text"
                    ></input>
                  </div>
                  <div className="flex items-center mt-5">
                    <label className="w-1/5 text-lg opacity-50">
                      Description
                    </label>
                    <textarea
                      value={service.description}
                      onChange={(e) =>
                        editServices(index, {
                          ...service,
                          description: e.target.value,
                        })
                      }
                      className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                    ></textarea>
                  </div>
                  <hr className="my-10"></hr>
                </div>
              ))}
            </div>
            <div className="my-10">
              <Button onClick={addService} type="primary">
                Add Service +
              </Button>
            </div>
          </>
        )}
        {currentTabs === "ABOUT" && (
          <div className="mt-10">
            <h1 className="text-2xl">About</h1>
            <textarea
              className="w-full h-96 mt-10 p-2 rounded-md shadow-md border"
              value={data.aboutpara}
              onChange={(e) => setData({ ...data, aboutpara: e.target.value })}
            ></textarea>
          </div>
        )}
        {currentTabs === "SOCIAL" && (
          <div className="mt-10">
            {data.socials.map((social, index) => (
              <>
                <div key={social.id}>
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl">{social.title}</h1>
                    <Button
                      onClick={() => deleteSocials(social.id)}
                      type="primary"
                    >
                      Delete
                    </Button>
                  </div>
                  <div className="flex items-center mt-5">
                    <label className="w-1/5 text-lg opacity-50">Title</label>
                    <input
                      value={social.title}
                      onChange={(e) =>
                        editSocials(index, {
                          ...social,
                          title: e.target.value,
                        })
                      }
                      className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                      type="text"
                    ></input>
                  </div>
                  <div className="flex items-center mt-5">
                    <label className="w-1/5 text-lg opacity-50">Link</label>
                    <input
                      value={social.link}
                      onChange={(e) =>
                        editSocials(index, {
                          ...social,
                          link: e.target.value,
                        })
                      }
                      className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                      type="text"
                    />
                  </div>
                  <hr className="my-10"></hr>
                </div>
              </>
            ))}
            <div className="my-10">
              <Button onClick={addSocials} type="primary">
                Add Social +
              </Button>
            </div>
          </div>
        )}
        {currentTabs === "RESUME" && (
          <div className="mt-10">
            <h1>Main</h1>
            <div className="mt-5 flex items-center">
              <label className="w-1/5 text-sx opacity-50">Tagline</label>
              <input
                value={data.resume.tagline}
                onChange={(e) =>
                  setData({
                    ...data,
                    resume: { ...data.resume, tagline: e.target.value },
                  })
                }
                className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                type="text"
              ></input>
            </div>
            <div className="flex items-center mt-5">
              <label className="w-1/5 text-lg opacity-50">Description</label>
              <textarea
                value={data.resume.description}
                onChange={(e) =>
                  setData({
                    ...data,
                    resume: { ...data.resume, description: e.target.value },
                  })
                }
                className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
              ></textarea>
            </div>
            <hr className="my-10"></hr>

            <h1>Experiences</h1>
            <div className="mt-10">
              {data.resume.experiences.map((exp, index) => (
                <div className="mt-10" key={exp.id}>
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl">{exp.company}</h1>
                    <Button onClick={() => handleDeleteExperience(exp.id)} type="primary">
                      Delete
                    </Button>
                  </div>
                  <div className="flex items-center mt-5">
                    <label className="w-1/5 text-lg opacity-50">Company</label>
                    <input
                      value={exp.company}
                      onChange={(e) => handleEditExperience(index, { ...exp, company: e.target.value })}
                      className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                      type="text"
                    />
                  </div>
                  <div className="flex items-center mt-2">
                    <label className="w-1/5 text-lg opacity-50">Type</label>
                    <input
                      value={exp.type}
                      onChange={(e) => handleEditExperience(index, { ...exp, type: e.target.value })}
                      className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                      type="text"
                    />
                  </div>
                  <div className="mt-5 ml-0">
                    <label className="text-lg opacity-50">Roles</label>
                    {exp.roles.map((role, ri) => (
                      <div key={ri} className="mt-3 pl-5 border-l-2">
                        <div className="flex items-center justify-between">
                          <h2 className="text-lg opacity-75">{role.title}</h2>
                          <Button onClick={() => handleDeleteRole(index, ri)}>Remove</Button>
                        </div>
                        <div className="flex items-center mt-2">
                          <label className="w-1/5 text-sm opacity-50">Title</label>
                          <input
                            value={role.title}
                            onChange={(e) => handleEditRole(index, ri, { ...role, title: e.target.value })}
                            className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                            type="text"
                          />
                        </div>
                        <div className="flex items-center mt-2">
                          <label className="w-1/5 text-sm opacity-50">Dates</label>
                          <input
                            value={role.dates}
                            onChange={(e) => handleEditRole(index, ri, { ...role, dates: e.target.value })}
                            className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                            type="text"
                          />
                        </div>
                        <div className="flex items-center mt-2">
                          <label className="w-1/5 text-sm opacity-50">Bullets</label>
                          <input
                            value={role.bullets}
                            onChange={(e) => handleEditRole(index, ri, { ...role, bullets: e.target.value })}
                            placeholder="Bullet One, Bullet Two, Bullet Three"
                            className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                            type="text"
                          />
                        </div>
                      </div>
                    ))}
                    <Button onClick={() => handleAddRole(index)} type="primary" classes="mt-3">
                      Add Role +
                    </Button>
                  </div>
                  <hr className="my-5" />
                </div>
              ))}
            </div>
            <div className="my-10">
              <Button onClick={handleAddExperience} type="primary">
                Add Company +
              </Button>
            </div>
            <hr className="my-10"></hr>
            <div className="mt-10">
              <h1>Education</h1>
              {data.resume.education.map((edu, index) => (
                <div key={index} className="mt-5">
                  <h2 className="text-lg opacity-75">Entry {index + 1}</h2>
                  <div className="flex items-center mt-2">
                    <label className="w-1/5 text-lg opacity-50">Name</label>
                    <input
                      value={edu.universityName}
                      onChange={(e) => {
                        const updated = [...data.resume.education];
                        updated[index] = { ...updated[index], universityName: e.target.value };
                        setData({ ...data, resume: { ...data.resume, education: updated } });
                      }}
                      className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                      type="text"
                    />
                  </div>
                  <div className="flex items-center mt-2">
                    <label className="w-1/5 text-lg opacity-50">Dates</label>
                    <input
                      value={edu.universityDate}
                      onChange={(e) => {
                        const updated = [...data.resume.education];
                        updated[index] = { ...updated[index], universityDate: e.target.value };
                        setData({ ...data, resume: { ...data.resume, education: updated } });
                      }}
                      className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                      type="text"
                    />
                  </div>
                  <div className="flex items-center mt-2">
                    <label className="w-1/5 text-lg opacity-50">Detail</label>
                    <input
                      value={edu.universityPara}
                      onChange={(e) => {
                        const updated = [...data.resume.education];
                        updated[index] = { ...updated[index], universityPara: e.target.value };
                        setData({ ...data, resume: { ...data.resume, education: updated } });
                      }}
                      className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                      type="text"
                    />
                  </div>
                </div>
              ))}
            </div>
            <hr className="my-10"></hr>
            <div className="mt-10">
              <div className="flex">
                <label className="w-1/5 text-lg opacity-50">Languages</label>
                <div className="w-4/5 ml-10 flex flex-col">
                  {data.resume.languages.map((language, index) => (
                    <div key={index} className="flex">
                      <input
                        value={language}
                        onChange={(e) => {
                          setData({
                            ...data,
                            resume: {
                              ...data.resume,
                              languages: [
                                ...data.resume.languages.slice(0, index),
                                e.target.value,
                                ...data.resume.languages.slice(index + 1),
                              ],
                            },
                          });
                        }}
                        className="w-full p-2 rounded-md shadow-lg border-2"
                        type="text"
                      ></input>
                      <Button
                        onClick={() =>
                          setData({
                            ...data,
                            resume: {
                              ...data.resume,
                              languages: data.resume.languages.filter(
                                (value, i) => index !== i
                              ),
                            },
                          })
                        }
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                  <Button
                    type="primary"
                    classes="hover:scale-100"
                    onClick={() =>
                      setData({
                        ...data,
                        resume: {
                          ...data.resume,
                          languages: [...data.resume.languages, "Added"],
                        },
                      })
                    }
                  >
                    Add +
                  </Button>
                </div>
              </div>
              <hr className="my-10"></hr>
              <div className="flex">
                <label className="w-1/5 text-lg opacity-50">Frameworks</label>
                <div className="w-4/5 ml-10 flex flex-col">
                  {data.resume.frameworks.map((framework, index) => (
                    <div key={index} className="flex">
                      <input
                        value={framework}
                        onChange={(e) => {
                          setData({
                            ...data,
                            resume: {
                              ...data.resume,
                              frameworks: [
                                ...data.resume.frameworks.slice(0, index),
                                e.target.value,
                                ...data.resume.frameworks.slice(index + 1),
                              ],
                            },
                          });
                        }}
                        className="w-full p-2 rounded-md shadow-lg border-2"
                        type="text"
                      ></input>
                      <Button
                        onClick={() =>
                          setData({
                            ...data,
                            resume: {
                              ...data.resume,
                              frameworks: data.resume.frameworks.filter(
                                (value, i) => index !== i
                              ),
                            },
                          })
                        }
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                  <Button
                    onClick={() =>
                      setData({
                        ...data,
                        resume: {
                          ...data.resume,
                          frameworks: [...data.resume.frameworks, "Added"],
                        },
                      })
                    }
                    type="primary"
                    classes="hover:scale-100"
                  >
                    Add +
                  </Button>
                </div>
              </div>
              <hr className="my-10"></hr>
              <div className="flex">
                <label className="w-1/5 text-lg opacity-50">Others</label>
                <div className="w-4/5 ml-10 flex flex-col">
                  {data.resume.others.map((other, index) => (
                    <div key={index} className="flex">
                      <input
                        value={other}
                        onChange={(e) => {
                          setData({
                            ...data,
                            resume: {
                              ...data.resume,
                              others: [
                                ...data.resume.others.slice(0, index),
                                e.target.value,
                                ...data.resume.others.slice(index + 1),
                              ],
                            },
                          });
                        }}
                        className="w-full p-2 rounded-md shadow-lg border-2"
                        type="text"
                      ></input>
                      <Button
                        onClick={() =>
                          setData({
                            ...data,
                            resume: {
                              ...data.resume,
                              others: data.resume.others.filter(
                                (value, i) => index !== i
                              ),
                            },
                          })
                        }
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                  <Button
                    onClick={() =>
                      setData({
                        ...data,
                        resume: {
                          ...data.resume,
                          others: [...data.resume.others, "Added"],
                        },
                      })
                    }
                    type="primary"
                    classes="hover:scale-100"
                  >
                    Add +
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Edit;
