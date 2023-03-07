import gitHub from "../assets/GitHub-Mark.png"
import linkedIn from "../assets/LinkedIn.png"


const Footer = () => {
  return (
    <footer>
      <nav style={{display:"flex"}}>
        <div style={{background: "#316bad", position: "fixed", bottom:"0", width: "100%"}}>
          <ul style={{listStyleType:"none", display: "flex", margin:"0px", padding:"5px", justifyContent:"center"}}>
            <li className="nav-item" style={{justifyContent:"center"}}>
              <a href="https://github.com/Greg-Trahan" >
                <img src={gitHub} className="github-logo" style={{height:"2em", width: "2em"}} alt="github-logo" />
              </a>
            </li>
            <li className="nav-item" style={{justifyContent:"center", paddingLeft:"1em"}}>
              <a href="https://www.linkedin.com/in/greg-trahan-1489azx56/" >
                <img src={linkedIn} className="linkedin-logo" style={{height:"2em", width: "2em"}} alt="linkedin-logo" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  )
}


export default Footer