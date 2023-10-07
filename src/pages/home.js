import { useState } from "react";
import hero from "../images/web-design-illustration.png";
import fly from "../images/flying-birds.png";
import Hero from "../images/Home.png";
import Linkedin from "../images/linkedin.png";
import Mail from "../images/mail.jpg";
import Whatsapp from "../images/whatsapp.png";
import Github from "../images/github.png";
import FullStackImg from "../images/fullStack.webp";
import "../scss/home.css";
function Home(params) {
  const [readmore, setReadmore] = useState(false);
  const readMore = () => {
    setReadmore(!readmore);
  };
  return (
    <div>
      <div className="home">
        <div className="home--img">
          <img src={fly} alt="flying-birds" className="flying-birds"></img>
          <img
            src={FullStackImg}
            alt="FullStack-Developer image"
            className="fullStackImage"
            loading="eager"
          ></img>
        </div>

        <div className="home--content">
          <h4 className="intro">Hi ! I'm David Susairaj.</h4>
          <h2 style={{ marginTop: "5px" }}>MERN Stack Developer</h2>
          <div className="socialMedia">
            <div className="socialMedia_icons">
              <div>
                {" "}
                <img src={Github} width={25} height={25}  loading="eager"></img>
              </div>
              <div>
                {" "}
                <img src={Linkedin} width={30} height={30}  loading="eager"></img>
              </div>
              <div>
                {" "}
                <img src={Mail} width={25} height={25}  loading="eager"></img>
              </div>
              <div>
                {" "}
                <img src={Whatsapp} width={28} height={28}  loading="eager"></img>
              </div>
            </div>
            <div className="socialMedia_urls">
              <div className="github_url_div">
                {" "}
                <a href="https://github.com/DAVIDSUSAIRAJ" target="_blank" >
                  <span className="github_url"> https://github.com/DAVIDSUSAIRAJ</span>
                </a>
              </div>
              <div className="linkedin_url_div">
                {" "}
                <a
                  href="https://www.linkedin.com/in/davidsusairaj"
                  target="_blank"
                >
                  <span className="linkedin_url"> https://www.linkedin.com/in/davidsusairaj</span>
                </a>
              </div>
              <div  className="mail_url_div">
                {" "}
                <a href="mailto:davidsusairaj1996@gmail.com" target="_blank">
                  <span className="mail_url">davidsusairaj1996@gmail.com</span>
                </a>
              </div>
              <div className="whatapp_url_div">
                {" "}
                <a href="https://wa.me/+919345163305" target="_blank">
                  <span className="whatsapp_url">9345163305</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
