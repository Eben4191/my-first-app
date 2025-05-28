import "./App.css";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import { Nav, Footer } from "./Test";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
