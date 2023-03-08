import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav style ={{position: "fixed", top:"0", width: "100%"}}>
        <div style={{background: "#FAF9F6"}}>
          <ul style={{listStyleType:"none", display: "flex", margin:"0px", padding:"5px"}}>
            <li className="nav-item">
              <Link className="nav-link active"  to="/profile" style={{textDecoration: "underline", fontSize: "1.2em", paddingLeft: "2em"}}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile/projects" style={{textDecoration: "underline", fontSize: "1.2em", paddingLeft: "2em"}}>My Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile/contact" style={{textDecoration: "underline", fontSize: "1.2em", paddingLeft: "2em"}}>Contact Me</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile/resume" style={{textDecoration: "underline", fontSize: "1.2em", paddingLeft: "2em"}}>Resume</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header