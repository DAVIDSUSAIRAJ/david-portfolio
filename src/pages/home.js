import { useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import { ClipLoader } from "react-spinners"; // Importing spinner
import FullStackImg from "../images/fullStack.webp";
import Resume from "./resume";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "../scss/home.css";
import Github from "../images/githubround.png";
import Linkedin from "../images/linkedin.png";
import Mail from "../images/emailred.png";
import Whatsapp from "../images/whatsapp.png";
import { ToastContainer, toast } from "react-toastify"; // Import Toast
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for notifications

function Home(params) {
  const [readmore, setReadmore] = useState(false);
  const [text] = useTypewriter({
    words: ["MERN STACK DEVELOPER"],
    loop: {},
    typeSpeed: 70,
    deleteSpeed: 70,
    delaySpeed: 3000,
  });

  const [loading, setLoading] = useState(false); // New state to track loading

  const download = async () => {
    setLoading(true); // Show loader before starting the PDF generation
    const toastId = toast.info("Preparing your CV download..."); // Show a notification when the download starts

    try {
      const downloadResumeDom = document.getElementById("re_pdf_resume");

      const doc = new jsPDF();
      const captureOptions = {
        onclone: (docClone) => {
          const targetElement = docClone.getElementById("re_pdf_resume");
          if (targetElement) {
            targetElement.style.display = "block";
          }
        },
      };

      const canvas = await html2canvas(downloadResumeDom, captureOptions);

      const elementWithBgClass = document.querySelector(".re_body");
      const computedStyle = getComputedStyle(elementWithBgClass);
      const bgColor = computedStyle.backgroundColor;

      const rgbValues = bgColor.match(/\d+/g);
      const red = parseInt(rgbValues[0], 10);
      const green = parseInt(rgbValues[1], 10);
      const blue = parseInt(rgbValues[2], 10);

      doc.setFillColor(red, green, blue);
      doc.rect(0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height, "F");

      const imageData = canvas.toDataURL("image/png");
      doc.addImage(imageData, "PNG", -55, 0, 300, 300, "", "FAST");

      doc.save("David_CV.pdf");

      toast.update(toastId, { render: "CV downloaded successfully!", type: "success", autoClose: 1000 }); // Update the toast to success
    } catch (error) {
      toast.update(toastId, { render: "Download failed. Please try again.", type: "error", autoClose: 1000 }); // Update for error
    } finally {
      setLoading(false); // Hide loader after the download is complete
    }
  };

  return (
    <div>
      <ToastContainer /> {/* Add this line to render notifications */}
      <div className="home">
        <div className="home--img">
          <img
            src={FullStackImg}
            alt="FullStack-Developer image"
            className="fullStackImage"
            loading="eager"
          />
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
              <img src={Github} width={27} height={27} loading="eager" />
              <img src={Linkedin} width={32} height={32} loading="eager" />
              <img src={Mail} width={27} height={27} loading="eager" />
              <img src={Whatsapp} width={28} height={28} loading="eager" />
            </div>
            <div className="socialMedia_urls">
              <a href="https://github.com/DAVIDSUSAIRAJ" target="_blank" rel="noopener noreferrer">
                <span className="github_url">https://github.com/DAVIDSUSAIRAJ</span>
              </a>
              <a href="https://www.linkedin.com/in/davidsusairaj" target="_blank" rel="noopener noreferrer">
                <span className="linkedin_url">https://www.linkedin.com/in/davidsusairaj</span>
              </a>
              <a href="mailto:davidsusairaj1996@gmail.com" target="_blank" rel="noopener noreferrer">
                <span className="mail_url">davidsusairaj1996@gmail.com</span>
              </a>
              <a href="https://wa.me/+919345163305" target="_blank" rel="noopener noreferrer">
                <span className="whatsapp_url">9345163305</span>
              </a>
            </div>
          </div>

          <div className="download_resume_div">
            {false ? ( // Show loader if loading is true
              <div>
                <ClipLoader size={35} color={"#123abc"} loading={loading} />
                <p>Preparing your download...</p>
              </div>
            ) : (
              <button
                onClick={download}
                title="Download in .pdf"
                className="resume-downloadpdf-btn"
              >
                Download CV
              </button>
            )}
          </div>
        </div>
      </div>
      <Resume />
    </div>
  );
}

export default Home;
