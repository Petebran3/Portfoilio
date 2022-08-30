import Navbar from './components/Navbar';
import './App.css';
import {Route, Routes} from  "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import { Footer } from "./components/Footer"
import "./components/home.css"
function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      
      <Route path="/projects" element={<Projects />} />
    </Routes>
    <Footer/>
    </div>
    </>
  );
}

export default App;
