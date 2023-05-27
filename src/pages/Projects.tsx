import { useState } from "react";
import { projectsData } from "../data/videoData";
import { AiFillGithub } from "react-icons/ai";
import { ProjectFilter } from "../enums/ProjectFilter";
import FilterButton from "../components/FilterButton";

function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>(ProjectFilter.All);

  function updateFilter(updatedFilter: ProjectFilter): void {
    setFilter(updatedFilter);
  }

  return (
    <div className="flex justify-center w-full min-h-screen bg-light xl:text-start dark:bg-dark [transition:background-color_.3s,color_.3s]">
      <div className="flex flex-col w-full max-w-4xl gap-10 px-5 pt-24 pb-10 2xl:max-w-6xl animate-page xl:px-0 xl:ml-80">
        <div className="flex flex-col gap-2">
          <p className="bg-[#EEEEEE] dark:bg-[#242424] w-fit px-5 py-2 dark:text-white font-semibold">
            Projects
          </p>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2 sm:justify-between sm:flex-row sm:items-center">
              <div>
                <p className="text-3xl font-extrabold tracking-wider dark:text-white">
                  Projects
                </p>
              </div>
              <div className="flex items-center gap-5 dark:text-white">
                <FilterButton
                  appliedFilter={filter}
                  filter={ProjectFilter.All}
                  title="All"
                  updateFilter={updateFilter}
                />
                <FilterButton
                  appliedFilter={filter}
                  filter={ProjectFilter.Game}
                  title="Game"
                  updateFilter={updateFilter}
                />
                <FilterButton
                  appliedFilter={filter}
                  filter={ProjectFilter.App}
                  title="App"
                  updateFilter={updateFilter}
                />
                <FilterButton
                  appliedFilter={filter}
                  filter={ProjectFilter.Web}
                  title="Web"
                  updateFilter={updateFilter}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 grid-rows-3 gap-6 sm:grid-cols-2 2xl:grid-cols-3">
              {projectsData.map((data, index) => {
                {
                  return (
                    (filter === ProjectFilter.All ||
                      data.filter === filter) && (
                      <div
                        key={index}
                        className="flex flex-col justify-center w-full gap-1 transition-all h-72 hover:scale-[1.02]"
                      >
                        <div className="flex items-center gap-5 dark:text-white">
                          <p className="text-lg font-medium">{data.title}</p>
                          {data.githubLink && (
                            <a
                              target="_blank"
                              href={data.githubLink}
                              className="text-lg cursor-pointer"
                            >
                              <AiFillGithub />
                            </a>
                          )}
                        </div>
                        <iframe
                          className="w-full h-full bg-black"
                          src={data.youtubeLink}
                          title={data.title}
                          allowFullScreen={true}
                        ></iframe>
                      </div>
                    )
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
