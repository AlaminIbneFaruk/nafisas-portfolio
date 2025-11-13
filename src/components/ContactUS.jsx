import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const ContactUS = () => {
  return (
    <form
      id="contact"
      className="card card-border items-center outline-2 outline-offset-4 outline-primary mx-auto py-12"
    >
      <h2 className="text-5xl font-bold my-5 text-center">Contact US</h2>
      <div className="flex flex-col md:flex-row justify-center gap-12">
        <div className="flex items-center justify-center gap-4">
          <FaEnvelope className="text-2xl mx-auto" />
          nafisaakther796@gmail.com
        </div>
        <a
          href="https://github.com/nafisa727"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-4"
        >
          <FaGithub className="text-2xl mx-auto" />
          @nafisa727
        </a>

        <a
          href="https://www.facebook.com/nafisa.nafu.437410/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-4"
        >
          <FaFacebook className="text-2xl mx-auto" />
          @ nafisa.nafu.437410
        </a>
      </div>
    </form>
  );
};

export default ContactUS;
