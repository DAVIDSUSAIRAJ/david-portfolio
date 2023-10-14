import "../scss/resume.css";
import davidimg from "../images/david.png";
import Linkedin from "../images/linkedin.png";
import Mail from "../images/emailred.png";
import Whatsapp from "../images/whatsapp.png";
import Github from "../images/githubround.png";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "jspdf-autotable";
import autoTable from "jspdf-autotable";

const Resume = () => {
  let download = async () => {
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
      0,//start(for x co-ordinate)
      0,//start(for y co-ordinate)
      doc.internal.pageSize.width,//end(for y co-ordinate)
      doc.internal.pageSize.height,//end(for y co-ordinate)
      "F",//fill the color
    ); // 'F' means fill
    const imageData = canvas.toDataURL("image/png");

    doc.addImage(imageData, "PNG", -45, 0, 300, 200);
    doc.save("GZ Curve.pdf");
  };

  return (
    <div className="resume" id="pdfresume">
      <div className="re_header" id="re_pdf_resume">
        <div className="re_body" id="davidresume">
          <div className="da_head">
            <div>
              <img className="david-img" width="200px" src={davidimg}></img>
            </div>
            <div className="re_name">
              <span className="resumeName">David susairaj</span>
            </div>
            <div className="re_role">
              <span className="resumeRole">MERN STACK DEVELOPER</span>
            </div>
            <div className="re_socialMedia">
              <div className="re_socialMedia_icons">
                <div>
                  {" "}
                  <img
                    src={Github}
                    width={20}
                    height={20}
                    loading="eager"
                  ></img>
                </div>
                <div>
                  {" "}
                  <img
                    src={Linkedin}
                    width={24}
                    height={24}
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
              </div>
            </div>
            <div className="re_skills_div">
              <span >SKILLS</span>
            </div>
            <div className="borderdiv">.</div>
            <div className="re-skills_ul">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
                <li>REACT JS</li>
                <li>NODE JS</li>
                <li>EXPRESS JS</li>
                <li>MONGO DB</li>
                <li>METERIAL UI</li>
                <li>BOOTSTRAP</li>
              </ul>
            </div>
          </div>
          <div className="da_body">
            <div className="re_about--content">
              <h3 className="re_summaray">
                <strong>SUMMARAY:</strong>
              </h3>
              <div className="re_underline">.</div>
              <p>
                I am a web developer proficient in both front-end{" "}
                <strong>(HTML5, CSS3, JavaScript, React.js, Redux)</strong> and
                back-end <strong>(Node.js, Express.js, MongoDB)</strong>{" "}
                technologies. I also have experience with version control{" "}
                <strong>(Git, GitHub)</strong>, project management{" "}
                <strong>(Azure DevOps)</strong>, and UI frameworks{" "}
                <strong>(Material-UI, Bootstrap)</strong>.
              </p>
              <h4 className="re_experience">
                <strong>EXPERIENCE:</strong>
              </h4>
              <div className="re_underline">.</div>
              <p>
                React developer specializing <strong>2</strong> years in bug
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
              <ul className="re_publish_ul">
                <li>
                  <strong>Learning of Journey Application:</strong>
                  <br></br>
                  <a
                    href="https://davidsusairaj.github.io/Web-first-Design/"
                    target="_blank"
                  >
                    https://davidsusairaj.github.io/Web-first-Design/
                  </a>
                </li>
                <li>
                  <strong>RoadmapMaster Application:</strong>
                  <br></br>
                  <a
                    href="https://davidsusairaj.github.io/web-design-react/"
                    target="_blank"
                  >
                    https://davidsusairaj.github.io/web-design-react/
                  </a>
                </li>
                <li>
                  <strong>Quiz Application:</strong>
                  <br></br>
                  <a
                    href="https://davidsusairaj.github.io/quiz-react-app/"
                    target="_blank"
                  >
                    https://davidsusairaj.github.io/quiz-react-app/
                  </a>
                </li>
                <li>
                  <strong>Counter Application:</strong>
                  <br></br>
                  <a
                    href=" https://davidsusairaj.github.io/redux-counter-app/"
                    target="_blank"
                  >
                    https://davidsusairaj.github.io/redux-counter-app/
                  </a>
                </li>
                <li>
                  <strong>Todo Application:</strong>
                  <br></br>
                  <a
                    href="https://davidsusairaj.github.io/todo-react-app/"
                    target="_blank"
                  >
                    https://davidsusairaj.github.io/todo-react-app/
                  </a>
                </li>
                <li>
                  <strong>Stopwatch Application:</strong>
                  <br></br>
                  <a
                    href="https://davidsusairaj.github.io/stopwatch-react-app/"
                    target="_blank"
                  >
                    https://davidsusairaj.github.io/stopwatch-react-app/
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          margin: "auto",
          width: "100",
          backgroundColor: "red",
          marginTop: "250px",
        }}
      >
        <button onClick={download}> Download</button>
      </div>
    </div>
  );
};
export default Resume;
