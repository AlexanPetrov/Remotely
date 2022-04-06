import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Post from "./pages/Post";
import Search from "./pages/Search";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

//testing
const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Post" element={<Post />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </Router>
  );
};

export default App;
