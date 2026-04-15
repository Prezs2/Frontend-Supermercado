import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/major/home";

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Navbar />
    </Router>
  );
}

export default App;
