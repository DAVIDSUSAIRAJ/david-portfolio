import { useState } from "react";
import honorsAndAwards from "../images/honorsAndAwards.avif"
import "../scss/about.css";
function About(params) {
  return (
    <div>
      <div className="about">
        <div className="about--img">
          <img src={honorsAndAwards}  width = "200px"  height = "350px" alt="Honors and Awards image" className="honorsAndAwards" loading="eager"></img>
        </div>

        <div className="about--content">
          <h4 className="summaray">Summary:</h4>
          <p>
          I am a web developer proficient in both front-end <strong>(HTML5, CSS3, JavaScript, React.js, Redux)</strong> and back-end <strong>(Node.js, Express.js, MongoDB)</strong> technologies. I also have experience with version control <strong>(Git, GitHub)</strong>, project management <strong>(Azure DevOps)</strong>, and UI frameworks <strong>(Material-UI, Bootstrap)</strong>.
          </p>
          <h4>Experience:</h4>
          <p>
            React developer specializing <strong>2.5</strong> years in bug fixing and ui
            development, enhancing projects stability and user experience.
          </p>
          <h4>Education:</h4>
          <p>
            {" "}
            H.H. The Rajah's College, Pudukkottai - 622 001. Master of
            Philosophy in Mathematics <strong>(MPhil)</strong>, 2018–2020.
          </p>
          <h4>Honors & Awards:</h4>
           <p>2021 <strong>National Champion</strong> in Silambam.</p>
        </div>
      </div>
    </div>
  );
}
export default About;
