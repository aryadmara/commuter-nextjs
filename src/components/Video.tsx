import * as React from "react";
interface IVideoProps {
  CompantProfile: string;
}

const Video: React.FunctionComponent<IVideoProps> = (props) => {
  return (
    <div className="mx-3 md:w-[46rem] h-[20rem] md:h-[30rem] overflow-hidden">
    <iframe className="w-[46rem] -ml-32 md:ml-0 h-full " src="https://youtube.com/embed/yGwRJBHbFKk?autoplay=1"  allowFullScreen title="room-tour"></iframe>
    </div>
  );
};

export default Video;
