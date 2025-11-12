import { FaGithub } from "react-icons/fa";
import { ImGift } from "react-icons/im";

export default function Projects() {
  const projects = [
    {
      title: "Aphrodite Webpage",
      tech: ["HTML", "Tailwind CSS", "JavaScript"],
      github_link: "https://github.com/nafisa727/portfolio",
      image: "https://nafisa727.github.io/Portfolio/",
      link: "https://nafisa727.github.io/Portfolio/",
      description: "A platform for Beauty products",
    },
    {
      title: "Trafalgar Webpage",
      tech: ["HTML", "Tailwind CSS", "JavaScript"],
      github_link: "https://github.com/nafisa727/doctr",
      image: "https://nafisa727.github.io/doctr/",
      link: "https://nafisa727.github.io/doctr/",
      description: "A platform for Health Services",
    },
  ];

  return (
    <section id="projects" className="mb-24">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-10">
          Featured Projects
        </h2>
        <div
          className={
            projects.length == 1
              ? `flex justify-center items-center gap-8 w-full`
              : `grid grid-cols-1 md:grid-cols-2 gap-8`
          }
        >
          {projects.map((project, i) => (
            <div
              key={i}
              className="card card-border border-4 shadow-white/20 shadow-xl hover:scale-105 transition max-w-lg"
            >
              {project.image ? (
                <iframe
                  src={project?.image}
                  title={project.title}
                  className="w-full h-96 object-cover rounded-t-lg "
                ></iframe>
              ) : (
                <img src={"/Blog.png"} alt={project.title} className="h-96" />
              )}
              <div className="card-body">
                <h3 className="card-title text-3xl">{project.title}</h3>
                <p>{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((t, idx) => (
                    <div key={idx} className="badge badge-outline">
                      {t}
                    </div>
                  ))}
                </div>
                <div
                  className={`flex mt-4 ${
                    project.link ? ` items-center gap-4` : ``
                  }`}
                >
                  <a
                    href={project.github_link}
                    className={`btn btn-primary ${
                      project.link ? `w-[50%]` : `btn-block`
                    }`}
                  >
                    <FaGithub /> Link
                  </a>
                  {project.link ? (
                    <a href={project.link} className="btn btn-primary w-[50%]">
                      View Link
                    </a>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
