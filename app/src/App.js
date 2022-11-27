import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home Page/Home";
import NaveBar from "./Components/NaveBar/NaveBar";
import Footer from "./Components/Footer/Footer";
import Cards from "./Components/Cards/Cards";
import About from "./Components/React Router/About";
import Services from "./Components/React Router/Services";
import Countact from "./Components/React Router/Countact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  console.log('Hello')
  return (
    <div className="App">
      {/* <h1>This is app.js Components</h1> */}
      <NaveBar />
      {/* <Cards />
      <Home />
      <About /> */}
      {/* <Services /> */}
      {/* <Countact /> */}
      {/* <Footer /> */}

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Cards />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/countact" element={<Countact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
