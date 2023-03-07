import {useState} from "react"
import { send } from 'emailjs-com';

const styleObj = {
  h3: {paddingBottom: "1em"},
  div: {display: "flex", flexDirection:"column", paddingBottom:"1em"},
  p: {justifyContent: "center", textAlign: "center"},
  input: {margin: "auto", width:"50%"},
  container: {border:"solid black 2px", borderRadius: "20px", backgroundColor: "#3f3f3f"}
}

const ContactPage = (props) => {

  const [ userData, setUserData ] = useState({
    from_name: "",
    userEmail: "",
    message: ""
  })

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    send(
      "service_990b138",
      "template_gliz19o",
      userData,
      "FptF138cWWivyfvZg"
    )
    .then((response) => {
      console.log("Your comments have been sent!", response.status, response.text)
    })
    .catch((err) => {
      console.log("Your message failed to")
    })
  };
  

  return (
    <div>
      <h1>Contact Me</h1>
      <h3 style={styleObj.h3}>Please feel free to reach out if you have any questions!</h3>
        <form onSubmit={handleSubmit} style={styleObj.container}>
          <div style={styleObj.div}>
            <div style={styleObj.div}>
              <p style={styleObj.p}>Your Name</p>
              <input type="text" name="from_name" placeholder="John Doe" style={styleObj.input} value={userData.from_name} onChange={handleInputChange}/>
            </div>
            <div style={styleObj.div}>
              <p style={styleObj.p}>Your Email Address</p>
              <input type="email" name="userEmail" placeholder="jdoe@example.com" style={styleObj.input} value={userData.userEmail} onChange={handleInputChange}/>
            </div>
            <div style={styleObj.div}>
              <p style={styleObj.p}>Comments</p>
              <textarea name="message" rows="6" style={styleObj.input} value={userData.message} onChange={handleInputChange}></textarea>
            </div>
            <input type="submit" value="Submit" style={{margin:"auto"}}></input>
          </div>
      </form>
    </div>
  )
}

export default ContactPage