
const Header = () => {
  return (
    <header>
      <nav style ={{position: "fixed", top:"0", width: "100%"}}>
        <div style={{background: "#316bad"}}>
          <ul style={{listStyleType:"none", display: "flex", margin:"0px", padding:"5px"}}>
            <li className="nav-item">
              <a className="nav-link active"  href="/" style={{textDecoration: "none", color: "#cccccc", fontSize: "1.2em", paddingLeft: "2em"}}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/projects" style={{textDecoration: "none", color: "#cccccc", fontSize: "1.2em", paddingLeft: "2em"}}>My Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact" style={{textDecoration: "none", color: "#cccccc", fontSize: "1.2em", paddingLeft: "2em"}}>Contact Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/resume" style={{textDecoration: "none", color: "#cccccc", fontSize: "1.2em", paddingLeft: "2em"}}>Resume</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header