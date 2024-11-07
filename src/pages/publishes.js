import hostAndDeployImage from "../images/hostAndDeployImage.jpg";
import "../scss/publishes.css";
function Publishes(params) {
  return (
    <div>
      <div className="publishes">
        <div className="publishes--img">
          <img
            src={hostAndDeployImage}
            alt="Honors and Awards image"
            className="deployImage"
            loading="eager"
          ></img>
        </div>

        <div className="publishes--content">
          <div>
            <div className="webapp">
              <h5>Feedback Application:</h5>
              <h6>
                Technology:MERN with TypeScript,Jest,NPM package("david-unique-id")
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
                >
                  https://my-feedback-app-nu.vercel.app/
                </a>
              </span>
            </div>
            <div className="webapp">
              <h5>Quiz Application:</h5>
              <h6>Technology: html5,sass and reactjs</h6>
              <span
                style={{
                  fontSize: "12px",
                  color: "#0000ee",
                }}
              >
                <a
                  href="https://davidsusairaj.github.io/quiz-react-app/"
                  target="_blank"
                >
                  https://davidsusairaj.github.io/quiz-react-app/
                </a>
              </span>
            </div>
            <div className="webapp">
              <h5>Todo Application:</h5>
              <h6>Technology: html5,sass and reactjs</h6>
              <span
                style={{
                  fontSize: "12px",
                  color: "#0000ee",
                }}
              >
                <a
                  href="https://davidsusairaj.github.io/todo-react-app"
                  target="_blank"
                >
                  https://davidsusairaj.github.io/todo-react-app
                </a>
              </span>
            </div>
            <div className="webapp">
              {" "}
              <h5>Learning of Journey Application:</h5>
              <h6>Technology: html5,sass and js</h6>
              <span
                style={{
                  fontSize: "12px",
                  color: "#0000ee",
                }}
              >
                <a
                  href="https://davidsusairaj.github.io/Web-first-Design/"
                  target="_blank"
                >
                  https://davidsusairaj.github.io/Web-first-Design/
                </a>
              </span>
            </div>
            <div className="webapp">
              <h5>RoadmapMaster Application:</h5>
              <h6>Technology: html5,sass and reactjs</h6>
              <span
                style={{
                  fontSize: "12px",
                  color: "#0000ee",
                }}
              >
                <a
                  href="https://davidsusairaj.github.io/web-design-react/"
                  target="_blank"
                >
                  https://davidsusairaj.github.io/web-design-react/
                </a>
              </span>
            </div>

            <div className="webapp">
              <h5>Counter Application:</h5>
              <h6>Technology: html5,sass,reactjs and redux</h6>
              <span
                style={{
                  fontSize: "12px",
                  color: "#0000ee",
                }}
              >
                <a
                  href="https://davidsusairaj.github.io/redux-counter-app/"
                  target="_blank"
                >
                  https://davidsusairaj.github.io/redux-counter-app/
                </a>
              </span>
            </div>

            {/* <div className="webapp">
              <h5>Stopwatch Application:</h5>
              <h6>Technology: html5,sass and reactjs</h6>
              <span
                style={{
                  fontSize: "12px",
                  color: "#0000ee",
                }}
              >
                <a
                  href="https://davidsusairaj.github.io/stopwatch-react-app/"
                  target="_blank"
                >
                  https://davidsusairaj.github.io/stopwatch-react-app/
                </a>
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Publishes;
