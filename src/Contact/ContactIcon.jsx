import { CgMail } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const iconSize = 60;
function ContactIcon() {
  return (
    <div className="flex  gap-4">
      <a target="_blank" href="mailto:thanaphon.thanusan@gmail.com" className="cursor-pointer">
        <CgMail size={iconSize} />
      </a>
      <a target="_blank" href="https://github.com/thanaphon0737" className="cursor-pointer">
        <FaGithub size={iconSize} />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/thanaphon-thanusan-4b6469202/" className="cursor-pointer">
        <FaLinkedin size={iconSize} />
      </a>
      <a target="_blank" href="https://www.facebook.com/T.thanusan" className="cursor-pointer">
        <FaFacebook size={iconSize} />
      </a>
    </div>
  );
}
export default ContactIcon;
