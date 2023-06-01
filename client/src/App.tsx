import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/home";
import Dashboard from "./pages/Dashboard";
import Form from "./pages/form";

import Login from "./pages/login";

import CardModal from "./components/card"

import EditProfile from "./components/EditProfile";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route  path="/login/*" element={<Login />} />
        <Route  path="/form/*" element={<Form />} />

        <Route  path="/cardModal/*" element={<CardModal/>} />
        


        <Route  path="/dashboard/editprofile" element={<EditProfile />} />

      </Routes>
    </Router>
  );
}
