import '../styles/homepage.css'
import headShot from "../assets/HeadShot.jpg"

const styleObj = {
  img: {width:"250px", height:"350px", borderRadius: "90px"},
  flex: {display: "flex", height: "100%"},
  textBox: {padding: "10px"},
  p: {textAlign: "center"}
}


const HomePage = (props) => {

  return (
    <div>
      
      <div class="container" style={styleObj.flex}>
        <img id="headshot" src={headShot} style={styleObj.img}></img>
        
        <div style={styleObj.textBox}>
          <h1 style = {styleObj.p}>About Me</h1>
          <h3  style = {styleObj.p}>My name is Greg Trahan, welcome to my portfolio!</h3>
          <p style = {styleObj.p}>I am an emerging full-stack web developer, based in St. Paul Minnesota. I recently graduated from the University of Minnesota full stack coding bootcamp. Through my coursework, I learned the core skills to web development and gained hands-on experience building web applications.</p>

          <p style = {styleObj.p}>
          During the bootcamp, I learned how to develop full-stack web applications using a variety of front-end and back-end technologies. These include tools such as JavaScript, React, REST APIs, NodeJS, Express, MySQL and MongoDB. I also am proficient in other associated tools including jQuery, Sequelize, Bootstrap and Git, as well as Microsoft Office and Python. </p>

          <p style = {styleObj.p}>Now I am excited to put the skills I learned to work and to collaborate with experienced developers as I begin a career developing brilliant and engaging websites. Prior to training in web development, earned Bachelor of the Arts degrees in Biology and Chemistry, and spent 5 years working as a Molecular Biologist. During that time I gained valuable experience in detail-oriented work and time management skills while developing treatments for genetic, collagen based disorders.</p>

        </div>
      </div>
    </div>
  )
}

export default HomePage