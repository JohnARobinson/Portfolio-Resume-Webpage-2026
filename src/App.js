import { Routes, Route, Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Resume from "./pages/Resume";
import Devlog from "./pages/Devlog";
import DevlogEntry from "./pages/DevlogEntry";
import "./App.css";

function Layout() {
  return (
    <>
      <Nav />
      {/* Outlet renders whichever page is active */}
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* All pages share the Layout (Nav + Footer) */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/devlog" element={<Devlog />} />
        <Route path="/devlog/:slug" element={<DevlogEntry />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
