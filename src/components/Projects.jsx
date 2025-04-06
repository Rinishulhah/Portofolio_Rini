import { projects, minis } from "../constants/index";

const Projects = () => {
  return (
    <div
      className="mt-20 border-b border-neutral-700 mb-20 min-h-[800px]"
      id="projects"
    >
      <div className="text-center">
        <span className="border-b-2 text-violet-600 border-violet-600 h-6 text-xl font-semibold px-2 uppercase tracking-wide">
          Projects
        </span>
        <p className="mx-0 lg:mx-36 mt-3 leading-8">
          Through the process of strengething my skills, I have worked on a
          variety of projects including front and backend development & UI/UX.
          Focusing on the user and getting into the mind of a user navigating an
          interface has given me the tools to plan & build user-friendly,
          thoughtfully designed, entirely responsive interfaces.
        </p>
      </div>
      {/* PROJECTS */}
      <div className="flex flex-col justify-center mt-6 lg:mt-10">
        {projects.map((project, index) => (
          <div
            className="flex flex-wrap justify-center gap-12 mb-12 min-h-72 border-b pb-12 w-100"
            key={index}
          >
            <img
              className="max-w-[400px] lg:w-1/3"
              src={project.projectImg}
              alt="proj1"
            />

            <div className="max-w-[500px] lg:w-1/3">
              <span className="float-end text-green-600 border border-green-600 rounded-xl px-2">
                {project.category}
              </span>

              <h2 className="font-semibold text-2xl mb-1">{project.title}</h2>
              <p className="text-sm leading-5">{project.description}</p>
              <div className="flex flex-wrap justify-end mt-6">
                {project.technologies.map((tech, techIndex) => (
                  <p
                    className="border-2 p-1 px-2 text-sm mx-2 my-2"
                    key={techIndex}
                  >
                    {tech}
                  </p>
                ))}
              </div>
              <div className="flex justify-start mt-6 my-2">
                {project.codeLink ? (
                  <a
                    className="bg-gradient-to-r from-green-500 via-green-700 to-green-900 py-2 px-3 hover:bg-gradient-to-bl rounded-2xl text-white"
                    href={project.codeLink}
                    target="_blank"
                  >
                    Code
                  </a>
                ) : (
                  ""
                )}
                {project.demoLink ? (
                  <a
                    className="mx-6 bg-gradient-to-r from-cyan-500 via-cyan-600 to-blue-800 py-2 px-3 hover:bg-gradient-to-bl rounded-2xl text-white"
                    href={project.demoLink}
                    target="_blank"
                  >
                    Live Demo
                  </a>
                ) : (
                  ""
                )}

                {project.otherLink ? (
                  <a
                    className="bg-gradient-to-r from-rose-500 via-violet-500 to-blue-600 py-2 px-3 hover:bg-gradient-to-bl rounded-2xl text-white"
                    href={project.otherLink}
                    target="_blank"
                  >
                    More Info
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* MINI PROJECTS */}
      <div className="text-center">
        <span className="border-b-2 text-violet-600 border-violet-600 h-6 text-xl font-semibold px-2 uppercase tracking-wide">
          MINI Projects
        </span>
        <p className="mx-0 lg:mx-36 mt-3 leading-8">
          Additionally, I've explored various mini projects that showcase my
          creativity and coding abilities, ranging from interactive web
          applications to fun games, each designed with user engagement and
          experience in mind.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 mb-10">
        {minis.map((mini, index) => (
          <a href={mini.demoLink} target="_blank">
            <div
              class="max-w-[360px] rounded overflow-hidden hover:scale-105 transition-all cursor-pointer"
              key={index}
            >
              <img src={mini.projectImg} alt={mini.title} />
              <div class="px-6">
                <span class="font-medium text-xl">{mini.title}</span>
              </div>
              <div class="px-6 pt-0 pb-2 flex flex-wrap">
                {mini.technologies.map((tech, techIndex) => (
                  <p
                    className="border-2 p-1 px-2 text-sm mx-2 my-2"
                    key={techIndex}
                  >
                    {tech}
                  </p>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
