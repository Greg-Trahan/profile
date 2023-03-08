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
          <Route path="/profile" element={<HomePage />} />
          <Route path="/profile/contact" element={<ContactPage />} />
          <Route path="/profile/projects" element={<ProjectPage />} />
          <Route path="/profile/resume" element={<ResumePage />} />
        </Routes>
      </Wrapper>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
