
const Header = () => {
  return (
    <header>
      <nav style ={{position: "fixed", top:"0", width: "100%"}}>
        <div style={{background: "#FAF9F6"}}>
          <ul style={{listStyleType:"none", display: "flex", margin:"0px", padding:"5px"}}>
            <li className="nav-item">
              <a className="nav-link active"  href="/profile" style={{textDecoration: "underline", fontSize: "1.2em", paddingLeft: "2em"}}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profile/projects" style={{textDecoration: "underline", fontSize: "1.2em", paddingLeft: "2em"}}>My Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profile/contact" style={{textDecoration: "underline", fontSize: "1.2em", paddingLeft: "2em"}}>Contact Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profile/resume" style={{textDecoration: "underline", fontSize: "1.2em", paddingLeft: "2em"}}>Resume</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header