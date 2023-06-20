import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Debits from "./components/Debits";
import Credits from "./components/Credits";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/debits">Debits</Link>
            </li>
            <li>
              <Link to="/credits">Credits</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/debits" element={<Debits />} />
          <Route path="/credits" element={<Credits />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;