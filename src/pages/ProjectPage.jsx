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
  div: {border:"solid black 2px", borderRadius: "20px", backgroundColor: "#ececec", textAlign: "center"}
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
    description: "Smorgasbord is a website for users to post and view favorite restaraunts. Users can view others restraunts that have been posted, as well as review the postings of others. Each user has a personal profile for easy access to their own favorite restaraunts.",
    stack: "Express, MySQL2, Sequelize, Node, Bootstrap, JavaScript"
  },
  {
    title: "ListenIn",
    gitHub: <a href="https://github.com/Greg-Trahan/ListenIn">Click Here for the GitHub Repo</a>,
    deploy: <a href="https://greg-trahan.github.io/ListenIn/">Click Here for the Live Website</a>,
    description: "The following application presents the user with an interactive webpage to search for a music artist. It will then pull up the artists top albums and tops songs. When the artist is found, a dyanmicaly created slide of the artist album covers is displayed where the user can scroll through and select an album to see its song titles and then click on a song to go to another webpage where the song can be played. Other functionality includes a history of most recently searched artists.",
    stack: "Last.FM API, Javascript, GlideJS, jQuery, Bootstrap"
  },
  {
    title: "Mongo Social Network",
    gitHub: <a href="https://github.com/Greg-Trahan/social-network">Click Here for the GitHub Repo</a>,
    deploy: "This project does not have a live site",
    description: "In this interface, a user can add themselves to the database, and add other users as friends. You can also leave thoughts for others and react to the thoughts that other people leave you.",
    stack: "Express, MongoDB, Mongoose, Node, Javascript"
  },
  {
    title: "MySQL Employee Database",
    gitHub: <a href="https://github.com/Greg-Trahan/12-employee-database">Click Here for the GitHub Repo</a>,
    deploy: "This project does not have a live site",
    description: "This application can be used to display lists information on departments, roles and employees from a company stored in a mySQL database. The information can be accessed and added or modified from the terminal.",
    stack: "MySQL, Javascript"
  },
  {
    title: "Weather Dashboard",
    gitHub: <a href="https://github.com/Greg-Trahan/06-weekly-weather">Click Here for the GitHub Repo</a>,
    deploy: <a href="https://greg-trahan.github.io/06-weekly-weather/">Click Here for the Live Website</a>,
    description: "I constructed a webpage from scratch that will display the weather for the upcoming week for Minneapolis MN, based on data from the openweathermap.org API. Users can additionally choose to enter any other city to recieve weather information about that city. The cities entered are saved to local storage and displayed so they can be easilly accessed in the future.",
    stack: "OpenWeather API, Javascript, CS, Bootstrap"
  }
]
  
  return (
    <div>
      <h1 style={{textAlign: "center", padding: "20px"}}>My Projects</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12" style={{padding: "5px"}}>
            <div style={styleObj.div}>
              <h3 onClick={handleShow} data-name="0">In Process</h3>
              <img src={checkBack} onClick={handleShow} data-name="0" alt="Current Project" style={styleObj.img}></img>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12" style={{padding: "5px"}}>
            <div style={styleObj.div}>
              <h3 data-name="1" onClick={handleShow}>Smorgesbord</h3>
              <img src={smorgesbord} data-name="1" onClick={handleShow} alt="Smorgesbord project" style={styleObj.img}></img>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12" style={{padding: "5px"}}>
            <div style={styleObj.div}> 
              <h3 data-name="2" onClick={handleShow}>ListenIn</h3>
              <img src={listenIn} data-name="2" onClick={handleShow} alt="ListenIn project" style={styleObj.img}></img>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12" style={{padding: "5px"}}>
            <div style={styleObj.div}>
               <h3 data-name="3" onClick={handleShow}>Mongo Social Network</h3>
              <img src={socialNetwork} data-name="3" onClick={handleShow} alt="Mongo social network project" style={styleObj.img}></img>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12" style={{padding: "5px"}}>
            <div style={styleObj.div}>
               <h3 data-name="4" onClick={handleShow}>MySQL Employee Database</h3>
              <img src={database} data-name="4" onClick={handleShow} alt="MySQL Employee Database project" style={styleObj.img}></img>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12" style={{padding: "5px"}}>
            <div style={styleObj.div}>
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
