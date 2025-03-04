import logo from './logo.svg';
import axios from 'axios';
import stackInfo from './StackInfo.js';
import StackCard from './Components/StackCard.jsx';
import SkillCard from './Components/SkillCard.jsx';
import skillSet from './skill.js';
import ExpCard from './Components/ExperienceCard.jsx';
import experience from './experience.js';
import './App.css';
import InputBox from './Components/InputCon.jsx';
import { useState } from 'react';
import ToastBox from './Components/toastContainer.jsx';
import profileImg from './StackImages/YogiProfile.jpeg';
//import samplePdf from './asset/ResumeDuplicate.pdf';
import Frame from './Logos/Frame.jpeg';
import email from './Logos/email.jpeg';
import Git from './Logos/github.jpeg';


function App() {
  const [userName, setName] = useState("")
  const [userMail, setMail] = useState("")
  const [userMsg, setMsg] = useState("");
  const [btnStr, setBtnStr] = useState("Send To Me");
  const [validMail, setValidMail] = useState(true);
  const [validName, setValidName] = useState(true);
  const [validMsg, setValidMsg] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false)
  const [isAlert, setAlert] = useState(false);
  const [alertStr, setAlertStr] = useState("");
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  
  
  const images = [Frame, email, Git];
  const inputList = [
    {
      id: "mail",
      text: "Email"
    },
    {
      id: "name",
      text:"name"
    }
  ]
  const year = new Date();


  function addValue(id, value) {
    id === "mail" ? setMail(value) : setName(value);
}

function addMsg(event) {
    setMsg(event.target.value);
}

async function sendMail() {
    setIsDisabled(true);
    setBtnStr("Sending...");
    setValidName(userName !== "");
    setValidMsg(userMsg !== "");
    setValidMail(regex.test(userMail));

    if (userName !== "" && userMsg !== "" && regex.test(userMail)) {
        const res = await sendMailTo(userName, userMail, userMsg);
        setAlertStr(res);
        setAlert(true);
        clearInputs();
        setTimeout(() => setAlert(false), 2000);
    }

    setBtnStr("Send To Me");
    setIsDisabled(false);
  }

  const clearInputs = () =>{
    setName("");
    setMsg("");
    setMail("");
  };
  async function sendMailTo(name, mail, msg) {
    try {
        const apiUrl = 'http://127.0.0.1:5000/getMail';
        const headers = {
            'content-type': 'application/json'
        };

        const requestBody = {
            name: name,
            mail: mail,
            msg: msg
        };

        const response = await axios.post(apiUrl, requestBody, { headers: headers });
        setAlert(true);
        return response.data.result;
        
    } catch (error) {
        setAlert(false);
        if (error.response) {
            return "Failed to send -- Server Problem";
        }
        return "Failed to send";
    }
}

return(
  <div>
    <div className ="flexTwoWaycentreDiv header">
      <p className="poppinsFontline headtext">Yogi S</p>
    </div>
    <div className="flexTwoWaycentreDiv container">
      <div className="img">
        <img src={profileImg} alt="profileImage"/>
      </div>

        <div className="info">
            <p className="poppinsFontlime headtext">Software Developement Engineer I</p>
            <p className="poppinsFontgrey infotext">Software Development Engineer-I with 1.5+ years of experience in building and maintaining scalable applications. Strong hands-on experience in mobile app development using .NET MAUI and backend development using C# and ASP.NET. Passionate about learning new technologies, solving complex problems, and contributing to innovative projects in GenAI, automation, and cloud platforms.</p>

            {/* <div className="logobox">
              {images.map((name, index) => (
                <button key={index} className="logo">
                  <img className="logoimg" src={name} alt={`${name.split('.')[0]} Logo`} />
                </button>
              ))}
            </div> */}

            <div className="text">
              <pre className="poppinsFontlime infotext">
                <span style={{ fontSize: "x-large" }}>1.5+ Years of Experience</span>
              </pre>
             {/* <button className="poppinsFontlime resume">
                <a className="poppinsfontlime atext" href={samplePdf} download>
                  Download CV
                </a>
              </button>  */}
            </div>
          </div>

    </div>

    <hr/>
    <div className="stackDiv">
      <p className="poppinsFontwhite stackText">Converting </p>
      <p className="poppinsFontwhite stackText">Diagrams into Architectures, Designs into Digital Reality, Concepts into Code</p>
      
      <div className="flexTwoWaycentreDiv stackcardbox">
        {stackInfo.map((value, index) => (
          <StackCard 
            key={index} 
            imgSrc={value.imgSrc} 
            headText={value.headText} 
            roleText={value.infoText} 
          />
        ))}
      </div>
    </div>


  <hr />

  <div className="skills">
    <p className="poppinsFontwhite stackText">Skills & Experience</p>
    
    <div className="flexOneWayCentreDiv skillscardbox">
      {skillSet.map((value, index) => (
        <SkillCard 
          key={index} 
          imgSrc={value.imgSrc} 
          text={value.text} 
        />
      ))}
    </div>

    <div className="Companyinfo">
      <pre className="poppinsFontwhite companyPraiseText">
        The company that have been instrumental in cultivating my skills and molding me into an expert in the above-mentioned areas.
      </pre>
    </div>
  </div>

  <div className="flexTwoWaycentreDiv Experience">
    {
      experience.map((value,index) =>{
        return (
        <ExpCard
          key={index}
          imgSrc={value.imgSrc}
          role={value.role}
          startDate={value.startDate}
          endDate={value.endDate} />)
      }
      )
    }
  </div>


  <hr />

  <div className="flexTwoWayCentreDiv MailBox">
      <div className="MailInfoBox">
        <p className="poppinsFontwhite contact">Contact Me</p>
        <p className="poppinsFontwhite mailinfo">Connect with me to bring your</p>
        <p className="poppinsFontwhite mailinfo">
          <span style={{ color: "#e8d780" }}>Dream project</span> to life. Shoot me an 
          <span style={{ color: "#80ed9a" }}> email now</span>
        </p>
      </div> 
      <div className="MailForm">
        {inputList.map((value, index) => (
            <InputBox 
              key={index}
              validItem={value.id === "mail" ? validMail : validName} 
              valueStr={value.id === "mail" ? userMail : userName} 
              id={value.id} 
              text = {value.text}
              addItem={addValue}
            />
        ))}   

        <div className="inputcontainer">
          <textarea
            className="emailInput messageField"
            style={{ border: validMsg ? "1px solid #696866" : "1px solid red" }}
            disabled={isDisabled}
            onChange={addMsg}
            id="msg"
            placeholder=""
            value={userMsg}
          />
          <label className="fieldText">Message</label>
        </div>

        <button id="sendMail" onClick={sendMail} className="button">
          {btnStr}
        </button>
      </div>
    </div>

    <div className="footer">
      <p className="poppinsFontwhite footText">
        Built in <span style={{ fontWeight: "bold", color: "#96d6b3" }}>React JS</span>
      </p>
      <p className="poppinsFontwhite footText">
        {new Date().getFullYear()} - <span style={{ fontWeight: "bold", color: "#acd7e6" }}>yogism504@gmail.com</span>
      </p>
    </div>

    <ToastBox className={isAlert ? 'appear':'hide'} text={alertStr}/>
    <script src="./mailForm.js"></script>

  </div>
);



}

export default App;
