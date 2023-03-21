import resume from "../assets/gregsResume2.pdf"

const ResumePage = (props) => {

  return (
    <div>
      <h1>Resume</h1>
      <embed src={resume} width="100%" height="800px"/>
    </div>

  )
}

export default ResumePage