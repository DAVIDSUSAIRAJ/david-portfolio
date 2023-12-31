import { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import hero from "../images/web-design-illustration.png";
import fly from "../images/flying-birds.png";
import Hero from "../images/Home.png";
import Linkedin from "../images/linkedin.png";
import Mail from "../images/emailred.png";
import Whatsapp from "../images/whatsapp.png";
import Github from "../images/githubround.png";
import FullStackImg from "../images/fullStack.webp";
import Resume from "./resume";
// import { download } from "./resume";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "jspdf-autotable";
import autoTable from "jspdf-autotable";
import "../scss/home.css";
import davidimg from "../images/david.png";
function Home(params) {
  const [readmore, setReadmore] = useState(false);
  const [text] = useTypewriter({
    words: ["MERN STACK DEVELOPER"],
    loop: {},
    typeSpeed: 70,
    deleteSpeed: 70,
    delaySpeed: 3000,
  });

  const readMore = () => {
    setReadmore(!readmore);
  };
  const mobileDownload= async () => {
    const downloadResumeDom = document.getElementById("re_pdf_resume");
  
    const doc = new jsPDF();
  
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
    // const imageData = canvas.toDataURL("image/png");
  
    doc.addImage(davidimg, "PNG", 30, 30, 40, 40);
    doc.setFontSize(18);
    doc.text("Hi ! I'm' David Susairaj", 80, 12);
    doc.line(10, 55, 280, 55);







    doc.save("David_CV.pdf");
  };
   const download = async () => {
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
  
    // doc.addImage(imageData, "PNG", -55, 0, 300, 300);
    doc.addImage(imageData, "PNG", -55, 0, 300, 300, '', 'FAST');
    doc.save("David_CV.pdf");
  };
  return (
    <div>
      <div className="home">
        <div className="home--img">
          {/* <img src={fly} alt="flying-birds" className="flying-birds"></img> */}
          <img
            src={FullStackImg}
            alt="FullStack-Developer image"
            className="fullStackImage"
            loading="eager"
          ></img>
        </div>

        <div className="home--content">
          <h4 className="intro">Hi! I'm David Susairaj</h4>
          <h2 style={{ marginTop: "5px" }}>
            <span
              style={{
                width: "250px",
                display: "inline-block",
                color: "rgb(128 5 251)",
                fontSize: "13px",
              }}
            >
              {text}
            </span>
          </h2>
          <div className="socialMedia">
            <div className="socialMedia_icons">
              <div>
                {" "}
                <img src={Github} width={27} height={27} loading="eager"></img>
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
                <img src={Mail} width={27} height={27} loading="eager"></img>
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
            </div>
            <div className="socialMedia_urls">
              <div className="github_url_div">
                {" "}
                <a href="https://github.com/DAVIDSUSAIRAJ" target="_blank">
                  <span className="github_url">
                    {" "}
                    https://github.com/DAVIDSUSAIRAJ
                  </span>
                </a>
              </div>
              <div className="linkedin_url_div">
                {" "}
                <a
                  href="https://www.linkedin.com/in/davidsusairaj"
                  target="_blank"
                >
                  <span className="linkedin_url">
                    {" "}
                    https://www.linkedin.com/in/davidsusairaj
                  </span>
                </a>
              </div>
              <div className="mail_url_div">
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
          <div className="download_resume_div">
            {" "}
            <button onClick = {download}title="Download in .pdf" className="resume-downloadpdf-btn">
              Download CV
            </button>
          </div>
        </div>
      </div>
      <Resume />
    </div>
  );
}
export default Home;
