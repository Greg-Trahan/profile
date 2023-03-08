import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import checkBack from "../assets/checkBack.png"
import smorgesbord from "../assets/smorgesbord.png"
import listenIn from "../assets/ListenIn.png"
import socialNetwork from "../assets/social-network.png"
import database from "../assets/employee-database.PNG"
import weatherApp from "../assets/WeatherApp.PNG"


const styleObj = {
  img: {width:"15em", paddingBottom: "1em"},
  div: {border:"solid black 2px", borderRadius: "20px", display:"flex", justifyContent: "center", backgroundColor: "#ececec"}
}

const ProjectPage = (props) => {

  const [show, setShow] = useState(false);
  const [activeModal, setModal] = useState({
    title: "",
    gitHub: "",
    deploy: "",
    description: "",
    stack: ""
  })

  const handleClose = () => setShow(false)
  const handleShow = (event) => {
    setModal(projectData[event.target.dataset["name"]])
    setShow(true)}

  const projectData = [
    {
      title: "This project is still being worked on",
      gitHub: "",
      deploy: "",
      description: "Please check back in a few days!",
      stack: ""
    },
    {
    title: "Smorgesbord",
    gitHub: <a href="https://github.com/Greg-Trahan/smorgasbord">Click Here for the GitHub Repo</a>,
    deploy: <a href="https://smorgasbord.herokuapp.com/">Click Here for the Live Website</a>,
    description: "aaa",
    stack: "aaa"
  },
  {
    title: "ListenIn",
    gitHub: <a href="https://github.com/Greg-Trahan/ListenIn">Click Here for the GitHub Repo</a>,
    deploy: <a href="https://greg-trahan.github.io/ListenIn/">Click Here for the Live Website</a>,
    description: "bbb",
    stack: "bbb"
  },
  {
    title: "Mongo Social Network",
    gitHub: <a href="https://github.com/Greg-Trahan/social-network">Click Here for the GitHub Repo</a>,
    deploy: "This project does not have a live site",
    description: "ccc",
    stack: "ccc"
  },
  {
    title: "MySQL Employee Database",
    gitHub: <a href="https://github.com/Greg-Trahan/12-employee-database">Click Here for the GitHub Repo</a>,
    deploy: "This project does not have a live site",
    description: "ddd",
    stack: "ddd"
  },
  {
    title: "Weather Dashboard",
    gitHub: <a href="https://github.com/Greg-Trahan/06-weekly-weather">Click Here for the GitHub Repo</a>,
    deploy: <a href="https://greg-trahan.github.io/06-weekly-weather/">Click Here for the Live Website</a>,
    description: "eee",
    stack: "eee"
  }
]
  
  return (
    <div>
      <h1 style={{textAlign: "center", padding: "20px"}}>My Projects</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12" style={styleObj.div}>
            <div style={{textAlign: "center"}}>
              <h3 onClick={handleShow} data-name="0">In Process</h3>
              <img src={checkBack} onClick={handleShow} data-name="0" alt="Current Project" style={styleObj.img}></img>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12" style={styleObj.div}>
            <div style={{textAlign: "center"}}> 
              <h3 data-name="1" onClick={handleShow}>Smorgesbord</h3>
              <img src={smorgesbord} data-name="1" onClick={handleShow} alt="Smorgesbord project" style={styleObj.img}></img>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12" style={styleObj.div}>            
            <div style={{textAlign: "center"}}> 
              <h3 data-name="2" onClick={handleShow}>ListenIn</h3>
              <img src={listenIn} data-name="2" onClick={handleShow} alt="ListenIn project" style={styleObj.img}></img>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12" style={styleObj.div}>
            <div style={{textAlign: "center"}}>
               <h3 data-name="3" onClick={handleShow}>Mongo Social Network</h3>
              <img src={socialNetwork} data-name="3" onClick={handleShow} alt="Mongo social network project" style={styleObj.img}></img>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12" style={styleObj.div}>
            <div style={{textAlign: "center"}}>
               <h3 data-name="4" onClick={handleShow}>MySQL Employee Database</h3>
              <img src={database} data-name="4" onClick={handleShow} alt="MySQL Employee Database project" style={styleObj.img}></img>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12" style={styleObj.div}>
            <div style={{textAlign: "center"}}>
              <h3 data-name="5" onClick={handleShow}>Weather Dashboard</h3>
              <img src={weatherApp} data-name="5" onClick={handleShow} alt="Weather Dashboard project" style={styleObj.img}></img>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{activeModal.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{activeModal.gitHub}</p>
          <p>{activeModal.deploy}</p>
          <p>{activeModal.description}</p>
          <p>Tech Stack: {activeModal.stack}</p>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ProjectPage
