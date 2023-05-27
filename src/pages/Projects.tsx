function Projects() {
  return (
    <div className="flex justify-center w-full min-h-screen bg-light xl:text-start dark:bg-dark [transition:background-color_.3s,color_.3s]">
      <div className="flex flex-col w-full gap-10 px-5 pt-24 pb-10 xl:max-w-4xl animate-page xl:px-0 xl:ml-80">
        <div className="flex flex-col gap-2">
          <p className="bg-[#EEEEEE] dark:bg-[#242424] w-fit px-5 py-2 dark:text-white font-semibold">
            Projects
          </p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-3xl font-extrabold tracking-wider dark:text-white">
                Projects
              </p>
            </div>
            <div className="flex items-center gap-5 dark:text-white">
              <button>All</button>
              <button>Game</button>
              <button>Web</button>
              <button>App</button>
            </div>
          </div>

          <div className="grid grid-cols-2 grid-rows-3 gap-2">
            {[1, 2, 3, 4].map(() => {
              return (
                <div className="flex items-center justify-center w-full bg-slate-500">
                  Hello World
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
