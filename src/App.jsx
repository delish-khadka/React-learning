import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Layout from "./Layout";
import PracticePage from "./Pages/PracticePage";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/practice" element={<PracticePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
