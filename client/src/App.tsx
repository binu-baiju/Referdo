import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/login";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route  path="/login/*" element={<Login />} />
      </Routes>
    </Router>
  );
}
