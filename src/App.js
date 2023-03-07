import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactPage, HomePage, ProjectPage, ResumePage } from "./pages";
import { Header, Wrapper, Footer } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Wrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </Wrapper>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
