import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/home";
import Dashboard from "./pages/Dashboard";
import Form from "./pages/form";

import Login from "./pages/login";
import EditProfile from "./components/EditProfile";
import Sampleform from "./pages/sample_form";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route  path="/login/*" element={<Login />} />
        <Route  path="/form/*" element={<Form />} />
        <Route  path="/dashboard/editprofile" element={<EditProfile />} />
        <Route  path="/sampleform" element={<Sampleform />} />

      </Routes>
    </Router>
  );
}
