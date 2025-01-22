import "../scss/resume.css";
import davidimg from "../images/david.png";
import Linkedin from "../images/linkedin.png";
import Mail from "../images/emailred.png";
import Whatsapp from "../images/whatsapp.png";
import Github from "../images/githubround.png";
import StackOverflow from "../images/stackOverFlow.png";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "jspdf-autotable";
import autoTable from "jspdf-autotable";

export const download = async () => {
  const downloadResumeDom = document.getElementById("re_pdf_resume");

  const doc = new jsPDF();
  const captureOptions = {
    onclone: (docClone) => {
      const targetElement = docClone.getElementById("re_pdf_resume");
      if (targetElement) {
        // Add the style to the cloned element within the captured document
        targetElement.style.display = "block";
      }
    },
  };

  const canvas = await html2canvas(downloadResumeDom, captureOptions);

  // Get the background color from the CSS class
  const elementWithBgClass = document.querySelector(".re_body");
  const computedStyle = getComputedStyle(elementWithBgClass);
  const bgColor = computedStyle.backgroundColor;

  // Extract RGB color values from the background color
  const rgbValues = bgColor.match(/\d+/g);
  const red = parseInt(rgbValues[0], 10);
  const green = parseInt(rgbValues[1], 10);
  const blue = parseInt(rgbValues[2], 10);

  // Set the background color in the PDF
  doc.setFillColor(red, green, blue);
  doc.rect(
    0, //start(for x co-ordinate)
    0, //start(for y co-ordinate)
    doc.internal.pageSize.width, //end(for y co-ordinate)
    doc.internal.pageSize.height, //end(for y co-ordinate)
    "F" //fill the color
  ); // 'F' means fill
  const imageData = canvas.toDataURL("image/png");

  doc.addImage(imageData, "PNG", -45, 0, 300, 200);
  doc.save("Davidsusairaj_CV.pdf");
};

const Resume = () => {
  return (
    <div className="resume" id="pdfresume">
      <div
        className="re_header"
        id="re_pdf_resume"
        style={{ display: "none" }}
      >
        <div className="re_body" id="davidresume">
          <div className="da_head">
            <div>
              <img className="david-img" width="200px" src={davidimg}></img>
            </div>
            <div className="re_name">
              <span className="resumeName">David susairaj</span>
            </div>
            <div className="re_role">
              <span className="resumeRole">MERN STACK DEVELOPER </span>
            </div>
            <div className="re_socialMedia">
              <div className="re_socialMedia_icons">
                <div>
                  {" "}
                  <img
                    src={Github}
                    width={28}
                    height={28}
                    loading="eager"
                  ></img>
                </div>
                <div>
                  {" "}
                  <img
                    src={Linkedin}
                    width={32}
                    height={32}
                    loading="eager"
                  ></img>
                </div>
                <div>
                  {" "}
                  <img src={Mail} width={28} height={28} loading="eager"></img>
                </div>
                <div>
                  {" "}
                  <img
                    src={Whatsapp}
                    width={28}
                    height={28}
                    loading="eager"
                  ></img>
                </div>
                <div>
                  {" "}
                  <img
                    src={StackOverflow}
                    width={24}
                    height={24}
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
                    <span className="re_mail_url">
                      davidsusairaj1996@gmail.com
                    </span>
                  </a>
                </div>
                <div className="re_whatapp_url_div">
                  {" "}
                  <a href="https://wa.me/+919345163305" target="_blank">
                    <span className="re_whatsapp_url">9345163305</span>
                  </a>
                </div>
                <div className="re_whatapp_url_div">
                  {" "}
                  <a href="https://stackoverflow.com/users/28158685/david-susairaj" target="_blank">
                  <span className="re_stackoverflow_url">stackoverflow</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="re_skills_div">
              <span>SKILLS</span>
            </div>
            <div className="borderdiv">.</div>
            <div className="re_frontend_div">
              <span>FRONTEND :</span>
            </div>
            <div className="re-skills_ul">
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JAVASCRIPT</li>
                <li>REACT JS</li>
                <li>NEXT JS</li>
                <li>REDUX</li>
                <li>TYPESCRIPT</li>
                <li>SASS</li>
                <li>MATERIAL UI</li>
                <li>BOOTSTRAP</li>
              </ul>
            </div>
            <div className="re_backend_div">
              <span>BACKEND :</span>
            </div>
            <div className="re-backend_skills_ul">
              <ul>
                <li>NODE JS</li>
                <li>EXPRESS JS</li>
                <li>MONGODB</li>
                <li>david-unique-id(npm)</li>
              </ul>
            </div>
            <div className="re_backend_div_testing_tools_div">
              <span>TESING/TOOLS</span>
            </div>
            <div className="re-backend_skills_ul_testing">
              <ul>
                <li>JEST</li>
                <li>GIT</li>
                <li>GITHUB</li>
                <li> AZURE DEVOPS</li>
              </ul>
            </div>
          </div>
          <div className="da_body">
            <h1 style={{fontSize: "25px",marginTop:"7px",transform:"translateX(-48px)",fontWeight:"bold"}}>RESUME</h1>
            <div className="re_about--content">
              <h3 className="re_summaray">
                <strong>SUMMARY:</strong>
              </h3>
              <div className="re_underline">.</div>
              <p>
                I am a web developer proficient in both front-end{" "}
                <strong>(HTML5, CSS3, JavaScript, React.js,Next.js, Redux)</strong> and
                back-end <strong>(Node.js, Express.js, MongoDB,david-uiniqe-id(npm custom ID generator))</strong>{" "}
                technologies. I also have experience with version control{" "}
                <strong>(Git, GitHub)</strong>, project management{" "}
                <strong>(Azure DevOps)</strong>, and UI frameworks{" "}
                <strong>(Material-UI, Bootstrap)</strong>,and testing frameworks(<strong>Jest</strong>).
              </p>
              <h4 className="re_experience">
                <strong>EXPERIENCE:</strong>
              </h4>
              <div className="re_underline">.</div>
              <p>
                React developer specializing <strong>3.0</strong> years in bug
                fixing and ui development, enhancing projects stability and user
                experience.
              </p>
              <h4 className="re_education">
                <strong>EDUCATION:</strong>
              </h4>
              <div className="re_underline">.</div>
              <p>
                {" "}
                H.H. The Rajah's College, Pudukkottai - 622 001. Master of
                Philosophy in Mathematics <strong>(MPhil)</strong>, 2018–2020.
              </p>
              <h4 className="re_honorAndAwards">
                <strong>HONORS & AWARDS:</strong>
              </h4>
              <div className="re_underline">.</div>
              <p>
                2021 <strong>National Champion</strong> in Silambam.
              </p>
              <h4 className="re_publishes">
                <strong>PUBLISHES:</strong>
              </h4>
              <div className="re_underline">.</div>
              <div className="re_publish_ul">
                <div>
                  <strong>Portfolio Application:</strong>

                  <br></br>
                  <span>
                    Technology:MERN
                  </span>
                  <br></br>

                  <a
                    href="https://david-portfolio-two.vercel.app/"
                    target="_blank"
                  >
                    https://david-portfolio-two.vercel.app/
                  </a>
                </div>
                <div>
                  <strong>Feedback Application:</strong>

                  <br></br>
                  <span>
                  Technology:MERN with TypeScript,Jest,NPM package("david-unique-id")
                  </span>
                  <br></br>

                  <a
                    href="https://my-feedback-app-nu.vercel.app/"
                    target="_blank"
                  >
                    https://my-feedback-app-nu.vercel.app/
                  </a>
                </div>

                <div>
                  <strong>Mini eCommerce Application:</strong>

                  <br></br>
                  <span>
                  Technology:MERN
                  </span>
                  <br></br>

                  <a
                    href="https://mini-ecommerce-project-6mai.vercel.app//"
                    target="_blank"
                  >
                   https://mini-ecommerce-project-6mai.vercel.app/
                  </a>
                </div>


                <div>
                  <strong>Quiz Application:</strong>

                  <br></br>
                  <span>Technology: html5,sass and react js</span>
                  <br></br>
                  <a
                    href="https://davidsusairaj.github.io/quiz-react-app/"
                    target="_blank"
                  >
                    https://davidsusairaj.github.io/quiz-react-app/
                  </a>
                </div>
                <div>
                  <strong>Todo Application:</strong>
                  <br></br>
                  <span>Technology: html5,sass and react js</span>
                  <br></br>
                  <a
                    href="https://davidsusairaj.github.io/todo-react-app/"
                    target="_blank"
                  >
                    https://davidsusairaj.github.io/todo-react-app/
                  </a>
                </div>

                <div>
                  <strong>RoadmapMaster Application:</strong>

                  <br></br>
                  <span>Technology: html5,sass and react js</span>
                  <br></br>
                  <a
                    href="https://davidsusairaj.github.io/web-design-react/"
                    target="_blank"
                  >
                    https://davidsusairaj.github.io/web-design-react/
                  </a>
                </div>
                <div>
                  <strong>Learning of Journey Application:</strong>

                  <br></br>
                  <span>Technology: html5,sass and js</span>
                  <br></br>

                  <a
                    href="https://davidsusairaj.github.io/Web-first-Design/"
                    target="_blank"
                  >
                    https://davidsusairaj.github.io/Web-first-Design/
                  </a>
                </div>
                <div>
                  <strong>Stopwatch Application:</strong>
                  <br></br>
                  <span>Technology: html5,sass and reactjs</span>
                  <br></br>
                  <a
                    href="https://davidsusairaj.github.io/stopwatch-react-app/"
                    target="_blank"
                  >
                    https://davidsusairaj.github.io/stopwatch-react-app/
                  </a>
                </div>

                <div>
                  <strong>Counter Application:</strong>

                  <br></br>
                  <span>Technology: html5,sass,react js and redux</span>
                  <br></br>
                  <a
                    href=" https://davidsusairaj.github.io/redux-counter-app/"
                    target="_blank"
                  >
                    https://davidsusairaj.github.io/redux-counter-app/
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div
        style={{
          margin: "auto",
          width: "100",
          backgroundColor: "red",
          marginTop: "250px",
        }}
      >
        <button onClick={download}> Download</button>
      </div> */}
    </div>
  );
};
export default Resume;
