import { useState } from "react";
import IProjectData from "../interfaces/IProjectData";
import { AiFillYoutube } from "react-icons/ai";

function ProjectVideo({
  data,
  updatePlayingVideoIndex,
  playingVideoIndex,
  videoIndex,
}: {
  data: IProjectData;
  updatePlayingVideoIndex(index: number): void;
  playingVideoIndex: number;
  videoIndex: number;
}) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <div className="w-full bg-black h-[90%]">
      {data.youtubeId ? (
        <div className="w-full bg-black h-[90%]">
          {isLoaded && playingVideoIndex === videoIndex ? (
            <iframe
              loading="lazy"
              className="w-full h-full bg-black"
              src={`https://www.youtube.com/embed/${data.youtubeId}?&mute=1&autoplay=true`}
              title={data.title}
              allowFullScreen={true}
            ></iframe>
          ) : (
            <div
              className="relative flex items-center justify-center w-full h-full cursor-pointer"
              onClick={() => {
                setIsLoaded(true);
                updatePlayingVideoIndex(videoIndex);
              }}
            >
              <img
                loading="lazy"
                src={`https://img.youtube.com/vi/${data.youtubeId}/0.jpg`}
                alt="Project Image"
                className="object-cover w-full h-full bg-black"
              />
              <div className="absolute text-6xl text-red-700 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                <AiFillYoutube />
              </div>
            </div>
          )}
        </div>
      ) : (
        <img
          src={data.image}
          className="object-cover w-full h-full"
          alt="game image"
        ></img>
      )}
    </div>
  );
}

export default ProjectVideo;
