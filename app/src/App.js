import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home Page/Home";
import NaveBar from "./Components/NaveBar/NaveBar";
import Footer from "./Components/Footer/Footer";
import Cards from "./Components/Cards/Cards";

function App() {
  return (
    <div className="App">
      {/* <h1>This is app.js Components</h1> */}
      <NaveBar />
      <Home />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
