import ILineDetails from "../interfaces/ILineDetails";

function LineDetails({ subtitle, title, timeline }: ILineDetails) {
  return (
    <div className="top-0 flex items-center gap-10 md:gap-20">
      <div className="flex items-center gap-4">
        <div className="w-4 h-4 border border-black border-solid rounded-full bg-white z-[1] dark:bg-black dark:border-white"></div>
        <p className="px-8 py-2 text-sm text-gray-700 bg-gray-300 rounded-full dark:text-white dark:bg-[#323232] opacity-70">
          {" "}
          {timeline}
        </p>
      </div>

      <div>
        <p className="w-10 font-semibold text-md dark:text-white">{title}</p>
        <p className="text-sm text-gray-400 dark:text-gray-300">{subtitle}</p>
      </div>
    </div>
  );
}

export default LineDetails;
