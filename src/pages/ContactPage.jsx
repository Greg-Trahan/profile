import {useState} from "react"
import { send } from 'emailjs-com';
import {Modal} from '../components';

const styleObj = {
  h3: {paddingBottom: "1em", textAlign: "center"},
  div: {display: "flex", flexDirection:"column", paddingBottom:"1em"},
  p: {justifyContent: "center", textAlign: "center"},
  input: {margin: "auto", width:"50%"},
  container: {border:"solid black 2px", borderRadius: "20px"}
}

const ContactPage = (props) => {
  const defaultForm = {from_name: "", userEmail: "", message: ""}
  const [ userData, setUserData ] = useState(defaultForm)
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");

  const handleBlur = (event) => {
    if (event.target.value === ""){
      console.log("This field is required")
    }
  }

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    })
  };

    const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userData && userData.from_name && userData.userEmail && userData.message){
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
        console.log("Your message failed to send")
      })
      setUserData({from_name: "", userEmail: "", message: ""})
      setMessage(`Your message has been sent!`);
      openModal();
    } else {
      setMessage('Please fill out all fields')
      openModal()
    }
  };
  

  return (
    <div>
      <h3 style={styleObj.h3}>Please feel free to reach out if you have any questions!</h3>
      <h4 style={styleObj.h3}> You can reach me at trahgr01@gmail.com or thorugh the form below</h4>

        {showModal ? <Modal message={message} closeModal={closeModal} /> : null}

        <form onSubmit={handleSubmit} style={styleObj.container}>
          <div style={styleObj.div}>
            <div style={styleObj.div}>
              <p style={styleObj.p}>Your Name</p>
              <input type="text" name="from_name" placeholder="John Doe" style={styleObj.input} value={userData.from_name} onChange={handleInputChange} onBlur={handleBlur}/>
            </div>
            <div style={styleObj.div}>
              <p style={styleObj.p}>Your Email Address</p>
              <input type="email" name="userEmail" placeholder="jdoe@example.com" style={styleObj.input} value={userData.userEmail} onChange={handleInputChange} onBlur={handleBlur}/>
            </div>
            <div style={styleObj.div}>
              <p style={styleObj.p}>Comments</p>
              <textarea name="message" rows="6" style={styleObj.input} value={userData.message} onChange={handleInputChange} onBlur={handleBlur}></textarea>
            </div>
            <input type="submit" value="Submit" style={{margin:"auto"}}></input>
          </div>
      </form>
    </div>
  )
}

export default ContactPage