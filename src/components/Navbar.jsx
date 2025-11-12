import { Link } from "react-scroll";
import ThemeSelector from "./ThemeController";

const Navbar = () => {
  const navlist = (
    <>
      <li>
        {/* Home */}
        <Link
          to="home"
          smooth={true}
          duration={800}
          offset={-70} // adjust for navbar height
          className="cursor-pointer hover:text-blue-800"
        >
          {" "}
          Home
        </Link>
      </li>
      <li>
        {/* About */}
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-40} // adjust for navbar height
          className="cursor-pointer hover:text-blue-800"
        >
          About
        </Link>
      </li>
      <li>
        {/* education */}
        <Link
          to="education"
          smooth={true}
          duration={500}
          offset={-40} // adjust for navbar height
          className="cursor-pointer hover:text-blue-800"
        >
          Education
        </Link>
      </li>
      <li>
        {/* Skills */}
        <Link
          to="skills"
          smooth={true}
          duration={500}
          offset={-40} // adjust for navbar height
          className="cursor-pointer hover:text-blue-800"
        >
          Skills
        </Link>
      </li>
      <li>
        {/* Projects */}
        <Link
          to="projects"
          smooth={true}
          duration={400}
          offset={-80} // adjust for navbar height
          className="cursor-pointer hover:text-blue-800"
        >
          Projects
        </Link>
      </li>
      <li>
        {/* Contact */}
        <Link
          to="contact"
          smooth={true}
          duration={800}
          offset={-80} // adjust for navbar height
          className="cursor-pointer hover:text-blue-800"
        >
          {" "}
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <div className="fixed top-0 z-10 w-full">
      <nav className="navbar rounded-b-box border-b-2 justify-between items-center backdrop-blur-md">
        <div>
          <Link
            to="home"
            smooth={true}
            duration={800}
            offset={-70} // adjust for navbar height
            className="cursor-pointer font-title hover:text-primary text-xl font-semibold"
          >
            Mst. Nafisa Akter
          </Link>
        </div>
        <div className=" lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg bg-base-100/30 rounded-2xl font-semibold">
            {navlist}
            <li>
              <ThemeSelector />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
