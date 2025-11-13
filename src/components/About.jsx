
const About = () => {
  return (
    <div className="hero min-h-screen  bg-base-200" id="about">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/Nafisa.jpg"
          alt="Developer at work"
          className="max-w-sm rounded-2xl shadow-2xl"
        />
        <div className="lg:mr-10 mt-6 lg:mt-0 max-w-md">
          <h1 className="text-6xl font-bold text-primary mb-4">About Me</h1>
          <p className="py-2 text-base-content/80 leading-relaxed text-xl">
            <div className="">
              Hey there I’m{" "}
              <span className="font-semibold text-primary ">
                Mst. Nafisa Akter
              </span>
            </div>
            — a hands-on <span className="font-semibold">Web Developer</span>{" "}
            who builds sleek, accessible, and high-performance user interfaces.
            I focus on creating experiences that feel fast and intuitive across
            devices.
          </p>

          <p className="py-2 text-base-content/70">
            My core toolkit includes JavaScript and React for frontend apps,
            along with HTML5, CSS3, Tailwind and Bootstrap for responsive,
            well-structured UIs. I also work with the MERN stack (MongoDB,
            Express, React, Node) and related services like Firebase when a
            project needs realtime features or simpler backend integration. I
            enjoy turning ideas into production-ready web apps that solve real
            problems.
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default About;
