import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from "./pages/About";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />}> </Route>
        <Route path='/projects' exact element={<Projects />}> </Route>
        <Route path='/about' exact element={<About />}> </Route>
        <Route path='/contact' exact element={<Contact />}> </Route>
      </Routes>
      <Footer />
    </Router>
    

    </div>
  );
}

export default App;
