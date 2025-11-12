import { Typewriter } from "react-simple-typewriter";

import ProjectsButton from "./ProjectsButton";
const Hero = () => {
  return (
    <div>
      <div id="home" className="hero min-h-screen font-display">
        <div className="hero-content flex-col items-center justify-center text-center w-full">
          <div className="p-8">
            <h1 className="text-5xl font-bold cursor-pointer">HELLO</h1>
            <div>
              <h2 className="text-5xl mt-4 mb-6 ">I'm Mst. Nafisa Akter,</h2>
              <div className="font-semibold text-4xl my-8 text-primary">
                {"a Web Developer"}
              </div>
            </div>
            <a
              href="https://drive.google.com/uc?export=download&id=1Xz5tI570jVYuxyh1jl2AMkRd5zJ_OX9l"
              rel="noopener noreferrer"
              target="_blank"
              className="btn btn-primary"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
      <div className="relative -mt-20">
        <div className="absolute w-full flex top-5 justify-center z-10">
          <ProjectsButton />
        </div>
      </div>
    </div>
  );
};

export default Hero;
