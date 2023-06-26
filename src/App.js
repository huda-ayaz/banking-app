import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import axios from "axios";

import Home from "./components/Home";
import Debits from "./components/Debits";
import Credits from "./components/Credits";

function App() {
  const [debitBalance, setDebitBalance] = useState(3400);
  const [creditBalance, setCreditBalance] = useState(10000);
  const [accountBalance, setAccountBalance] = useState(10000 - 3400);
  const [debitLog, setDebitLog] = useState([]);
  const [creditLog, setCreditLog] = useState([]);

  const debitAdd = (debitBalance => {
    setDebitBalance((previousDebitBalance) => Number(previousDebitBalance + debitBalance.amount));
    setAccountBalance((previousAccountBalance) => Number(previousAccountBalance - debitBalance.amount));
    setDebitLog([...debitLog, debitBalance]);
  })

  const creditAdd = (creditBalance => {
    setCreditBalance((previousCreditBalance) => Number(previousCreditBalance + creditBalance.amount));
    setAccountBalance((previousAccountBalance) => Number(previousAccountBalance) + Number(creditBalance.amount));
    setCreditLog([...creditLog, creditBalance]);
  })

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
          <Route path="/debits" element={<Debits accountBalance={accountBalance} debitAdd={debitAdd} debitLog={debitLog}/>} />
          <Route path="/credits" element={<Credits accountBalance={accountBalance} creditAdd={creditAdd} creditLog={creditLog}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;