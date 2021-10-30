import "./App.scss";
import Navbar from "./App/Navbar/Navbar";
import Contintro from "./App/Contintro/Contintro";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Contintro />
      </div>
    </Router>
  );
}

export default App;
