import hostAndDeployImage from "../images/hostAndDeployImage.jpg";
import "../scss/publishes.css";
function Publishes(params) {
  return (
    <div>
      <div className="publishes">
        <div className="publishes--img">
          <img
            src={hostAndDeployImage}
            alt="Honors and Awards"
            className="deployImage"
            loading="eager"
          ></img>
        </div>

        <div className="publishes--content">
          <div>
            <div className="webapp">
              <h5>SwiftTalk – Real-Time Chat & Media Sharing:</h5>
              <h6>
                Technology: React, Supabase (Realtime), WebRTC, Audio/Video Calls, File Sharing
              </h6>
              <span
                style={{
                  fontSize: "12px",
                  color: "#0000ee",
                }}
              >
                <a
                  href="https://chat-osbe.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://chat-osbe.onrender.com/
                </a>
              </span>
            </div>

            <div className="webapp">
              <h5>Mad Wanderings – Multilingual Book Web App:</h5>
              <h6>
                Technology: React, ChatGPT Chatbot, Multilingual Support (Tamil, English, Hindi, Telugu, Malayalam)
              </h6>
              <span
                style={{
                  fontSize: "12px",
                  color: "#0000ee",
                }}
              >
                <a
                  href="https://madwanderings.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://madwanderings.vercel.app/
                </a>
              </span>
            </div>

            <div className="webapp">
              <h5>3D Portfolio Website:</h5>
              <h6>Technology: React, Three js</h6>
              <span
                style={{
                  fontSize: "12px",
                  color: "#0000ee",
                }}
              >
                <a
                  href="https://3-d-david-portfolio-ysab.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://3-d-david-portfolio-ysab.vercel.app/
                </a>
              </span>
            </div>

            <div className="webapp">
              <h5>Feedback System:</h5>
              <h6>
                Technology: MERN with TypeScript, Jest, and custom NPM package ("david-unique-id")
              </h6>
              <span
                style={{
                  fontSize: "12px",
                  color: "#0000ee",
                }}
              >
                <a
                  href="https://my-feedback-app-nu.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://my-feedback-app-nu.vercel.app/
                </a>
              </span>
            </div>

            <div className="webapp">
              <h5>Mini eCommerce Platform:</h5>
              <h6>Technology: MERN</h6>
              <span
                style={{
                  fontSize: "12px",
                  color: "#0000ee",
                }}
              >
                <a
                  href="https://mini-ecommerce-project-6mai.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://mini-ecommerce-project-6mai.vercel.app/
                </a>
              </span>
            </div>

            <div className="webapp">
              <h5>Journey Learning Project:</h5>
              <h6>Technology: HTML5, Sass, JavaScript</h6>
              <span
                style={{
                  fontSize: "12px",
                  color: "#0000ee",
                }}
              >
                <a
                  href="https://davidsusairaj.github.io/Web-first-Design/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://davidsusairaj.github.io/Web-first-Design/
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Publishes;
