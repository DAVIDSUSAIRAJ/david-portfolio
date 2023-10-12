import "../scss/resume.css";
import davidimg from "../images/david.png";
import Linkedin from "../images/linkedin.png";
import Mail from "../images/emailred.png";
import Whatsapp from "../images/whatsapp.png";
import Github from "../images/githubround.png";

const Resume = () => {
  return (
    <div className="resume">
      <div className="re_header">
        <div className="re_body">
          <div className="da_head">
            <div >
              <img
              className="david-img"
               width="200px"
               src={davidimg}
              
              
              ></img>
            </div>
             <div className="re_name">
                <h3>David susairaj</h3>
             </div>
             <div className="re_role">
                <h6>MERN STACK DEVELOPER</h6>
             </div>
             <div className="re_socialMedia">
            <div className="re_socialMedia_icons">
              <div>
                {" "}
                <img src={Github} width={20} height={20} loading="eager"></img>
              </div>
              <div>
                {" "}
                <img
                  src={Linkedin}
                  width={25}
                  height={25}
                  loading="eager"
                ></img>
              </div>
              <div>
                {" "}
                <img src={Mail} width={20} height={20} loading="eager"></img>
              </div>
              <div>
                {" "}
                <img
                  src={Whatsapp}
                  width={20}
                  height={20}
                  loading="eager"
                ></img>
              </div>
            </div>
            <div className="re_socialMedia_urls">
              <div className="re_github_url_div">
                {" "}
                <a href="https://github.com/DAVIDSUSAIRAJ" target="_blank">
                  <span className="re_github_url">
                    {" "}
                    https://github.com/DAVIDSUSAIRAJ
                  </span>
                </a>
              </div>
              <div className="re_linkedin_url_div">
                {" "}
                <a
                  href="https://www.linkedin.com/in/davidsusairaj"
                  target="_blank"
                >
                  <span className="re_linkedin_url">
                    {" "}
                    https://www.linkedin.com/in/davidsusairaj
                  </span>
                </a>
              </div>
              <div className="re_mail_url_div">
                {" "}
                <a href="mailto:davidsusairaj1996@gmail.com" target="_blank">
                  <span className="re_mail_url">davidsusairaj1996@gmail.com</span>
                </a>
              </div>
              <div className="re_whatapp_url_div">
                {" "}
                <a href="https://wa.me/+919345163305" target="_blank">
                  <span className="re_whatsapp_url">9345163305</span>
                </a>
              </div>
            </div>
             </div>
             <div>
                <h5 className="re_skills">SKILLS</h5>
             </div>
          </div>
          <div className="da_body">second</div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
