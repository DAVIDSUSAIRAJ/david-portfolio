import { useState, useEffect, useRef } from "react";
import axios from 'axios'

import "../scss/contact.css";

import email_illustration from "../images/beard-gmail.png";

function Contact(params) {
  const [details, SetDetails] = useState({});

  const [namefeed, setNamefeed] = useState("");
  const [textarea, setTextarea] = useState("");
  const [isValid,setIsValid] = useState(false);
  const handleChange = (e) => {
    const keyname = e.target.name;
    const value = e.target.value;

    // CONTACT NAME AND INPUT FEILD
    if (keyname == "name") {
      let alphabets = /^[a-zA-Z ]*$/;

      if (
        value != "" &&
        value.match(alphabets) &&
        3 <= value.length &&
        value.length <= 25
      ) {
        setNamefeed("WOW! looks good.");
        const feedColor = document.querySelector(".name-feed");
        feedColor.style.color = "green";
        setIsValid(true);
      } else {
        setNamefeed("* please check your input feild!! *");
        const feedColor = document.querySelector(".name-feed");
        feedColor.style.color = "red";
        setIsValid(false);
      }
    }
  
    // CONTACT TEXTAREA AND INPUT FEILD
    if (keyname == "feedback") {
      let alphabets = /^[a-zA-Z ]*$/;

      if (value != "" && 10 <= value.length && value.length <= 255) {
        setTextarea("WOW! looks good.");
        const feedColor = document.querySelector(".text-feed");
        feedColor.style.color = "green";
        setIsValid(true);
      } else {
        setTextarea("* Minumum few words!! *");
        const feedColor = document.querySelector(".text-feed");
        feedColor.style.color = "red";
        setIsValid(false);
      }
    }
    SetDetails((prevDetails) => ({
      ...prevDetails,
      [keyname]: value,
    }));
  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    // const name = document.getElementById("name").value;
    // const feedback = document.getElementById("textarea");
    // window.location.href =
    //   "mailto:enteryourmailid@gamil.com?name=" + name + "&textarea=" + textarea;
    e.preventDefault();
    if(!isValid) return alert("please check your input feild!!")
   try {
    axios.post("https://portfolio-feedback.onrender.com/api/feedbacks/",details)
   } catch (error) {
    alert("Network Error.")
   }

    alert(`Thanks ${details.name}. Your feedback has submited`);
    setNamefeed("");
    setTextarea("");
    SetDetails({});
    
    // return false;
  };
  // console.log(details);
  const contactFocus = useRef();

  useEffect(() => {
    contactFocus.current.focus();
  }, []);
  // START CONTACT AUTO FOCUS

  // END COTACT AUTO FOCUS
  return (
    <div className="contactFull">
      <div className="contactp">
        <div className="contactp-card">
          <div className="contactp-card1">
            <div className="contactp-card1--form">
              <h4>Contact us a messsage</h4>
              <form onSubmit={handleSubmit} autoComplete="off">
                <label className="name" for="name">
                  Name
                </label>
                <br></br>
                <input
                  ref={contactFocus}
                  type="text"
                  name="name"
                  id="name"
                  value={details?.name ? details.name :""}
                  className="nameInput"
                  placeholder="Enter your name"
                  onChange={handleChange}
                  required
                ></input>
                <br></br>
                <i className="name-feed">{namefeed}</i>
                <span style={{ visibility: "hidden" }}>.</span>
                <br></br>

                <label className="feedback" for="textarea">
                  Feedback
                </label>
                <br></br>
                <textarea
                  type="text"
                  name="feedback"
                  id="textarea"
                  value={details?.feedback ? details.feedback :""}
                  className="textareaInput"
                  placeholder="Share your feedback"
                  rows="4"
                  required
                  onChange={handleChange}
                ></textarea>
                <br></br>
                <i className="text-feed">{textarea}</i>
                <span style={{ visibility: "hidden",}}>.</span>
                <br></br>
                <button title="Send in Gamil" className="contact-send-btn">
                  Send
                </button>
              </form>
            </div>
            <div className="contactp-card1--img">
              <img src={email_illustration} alt="email--illustration" loading="eager"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
