
import SkillsImage from "../images/skillsImage.webp";
import "../scss/skills.css"
function Skills(params) {
  return (
    <div>
      <div className="skills">
        <div className="skills--img">
          <img
            src={SkillsImage}
            width="200px"
            height="350px"
            alt="Honors and Awards image"
            className="honorsAndAwards"
            loading="eager"
          ></img>
        </div>

        <div className="skills--content">
          <div>
            <h4  style= {{margin:"5px"}}>FRONTEND:</h4>
            <div style={{lineHeight:"20px",margin:"5px"}}>
              {" "}
               HTML5, CSS3, SASS, JAVASCRIPT, REACT JS, REDUX, TYPESCRIPT, GIT, GITHUB, AZURE
              DEVOPS, MUI, BOOTSTRAP.
            </div>
            <h4 style= {{margin:"5px",}}>BACKEND:</h4>
              <div style = {{margin:"5px"}}>
              NODE JS, EXPRESS JS, MONGODB.
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
